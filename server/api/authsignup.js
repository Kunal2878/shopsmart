import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import User from '~/server/models/user.js';
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
    
    await newUser.save();
    
    return ({status:200, message: 'Registration successful' });
    } 
    catch (error) {
  
    console.error(error);
  return ({ message: 'Internal Server Error',status:500 });
    }
  }
);
