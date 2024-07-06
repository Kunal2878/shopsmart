
import {Lucia} from 'lucia'
import mongoose from 'mongoose';
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";

const adapter = new MongodbAdapter(
	mongoose.connection.collection("sessions"),
	mongoose.connection.collection("users")
);
  const lucia = new Lucia(   adapter );
  console.log("lucia is",lucia)
    // const userId = generateIdFromEntropySize(10);
    // console.log(userId)
    // const session = await lucia.createSession("userId", {});
    // console.error("sessasion is",session)


export default lucia;