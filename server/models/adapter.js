
import {Lucia} from 'lucia'
import mongoose from 'mongoose';
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";

const adapter = new MongodbAdapter(
	mongoose.connection.collection("sessions"),
	mongoose.connection.collection("users")
);
  const lucia = new Lucia(   adapter );



export default lucia;