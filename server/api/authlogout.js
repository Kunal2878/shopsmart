

import User from '~/server/models/user.js';
import lucia from '~/server/models/adapter.js';
import { generateIdFromEntropySize } from "lucia";

export default  defineEventHandler(async (event) => {

  const {  Email } = await readBody(event);
 

  try{
  


    const existingEmail = await User.findOne({ Email });

    if (existingEmail) 
{

setCookie(event, 'shopsmart', '')
return({ message: 'Logout successful',status:200 });

}


  


    return ({status:400, message: 'User doesnot exist' });
    } 
    catch (error) {
  
    console.error("server error",error);
  return ({ message: 'Internal Server Error',status:500 });
    }
  }
);
