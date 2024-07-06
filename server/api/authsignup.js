import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {Lucia} from 'lucia'
import User from '~/server/models/user.js';
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";

// import adapter from '~/server/models/user.js';
// import { generateIdFromEntropySize } from "lucia";
import mongoose from 'mongoose';
export default  defineEventHandler(async (event) => {

  const { username, password, Email } = await readBody(event);
 

  try{
  
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    const existingEmail = await User.findOne({ Email });
    if (existingUser) {
   
      return({ message: 'Username already exists',status:400 });
   
    }
    if (existingEmail) {
      return({ message: 'Username already exists',status:400 });
    }
    
    // Create a new user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      Email,
      password: hashedPassword
    });
    
    
    const db = mongoose.connection;
    // console.log(db)
    // const adapter = new MongodbAdapter(db);
const adapter = new MongodbAdapter(
	mongoose.connection.collection("sessions"),
	mongoose.connection.collection("users")
);
  const lucia = new Lucia(   adapter );
  console.log("lucia is",lucia)
    // const userId = generateIdFromEntropySize(10);
    // console.log(userId)
    const session = await lucia.createSession("userId", {});
    console.error("sessasion is",session)
    appendHeader(event, "Set-Cookie", lucia.createSessionCookie(session.id).serialize());
    await newUser.save();
    // const token = jwt.sign({ userId: user._id }, process.env.secretKey, { expiresIn: '1h'});
    // const userData = {
    //   token: token,
    //   userName: username,
    //   email:Email,
      
    // };

    
    return ({status:200, message: 'Registration successful' });
    } 
    catch (error) {
  
    console.error("server error",error);
  return ({ message: 'Internal Server Error',status:500 });
    }
  }
);
