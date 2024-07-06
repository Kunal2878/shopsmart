import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
 Email: {
    unique: true,
    type: String,
    required: true
  }
});


const User = mongoose.model('User', userSchema);




export default User;



// const adapter = new MongodbAdapter(
// 	mongoose.connection.collection("sessions"),
// 	mongoose.connection.collection("users")
// );
// const Session = mongoose.model(
// 	"Session",
// 	new mongoose.Schema(
// 		{
// 			_id: {
// 				type: String,
// 				required: true
// 			},
// 			user_id: {
// 				type: String,
// 				required: true
// 			},
// 			expires_at: {
// 				type: Date,
// 				required: true
// 			}
// 		},
// 		{ _id: false }
// 	)
// );
