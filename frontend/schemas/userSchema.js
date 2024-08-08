import mongoose, {Schema, model, models, trusted} from 'mongoose';

const UserSchema = new Schema({
    email:{
        type:String,
    },
    username: {
        type: String,
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
  }, {collection: "users"})

  const User = models.User || model('User', UserSchema);

  export default User