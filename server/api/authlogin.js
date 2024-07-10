
import User from '~/server/models/user.js';
import lucia from '~/server/models/adapter.js';
import { generateIdFromEntropySize } from "lucia";

export default  defineEventHandler(async (event) => {

  const {  Email } = await readBody(event);
 

  try{
  
console.log(Email)

    const existingEmail = await User.findOne({ Email });

    if (existingEmail) 
    {

const userId = generateIdFromEntropySize(10);
console.log(userId)
const user = {
    userId:userId,
    email:Email,
}
const userInfo = json.stringify(user)
const session = await lucia.createSession(userId, {});
appendHeader(event, "Set-Cookie", lucia.createSessionCookie(session.id).serialize());
setCookie(event, 'shopsmart', userInfo)
return({ message: 'Login successful',status:200 });

    }


  


    return ({status:400, message: 'User doesnot exist' });
    } 
    catch (error) {
  
    console.error("server error",error);
  return ({ message: 'Internal Server Error',status:500 });
    }
  }
);
