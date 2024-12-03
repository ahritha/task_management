import mongoose, { Document, Model, Schema } from 'mongoose';


interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}


const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
}, {
  timestamps: true, 
});

const TasksModel: Model<IUser> = mongoose.model<IUser>('Task', userSchema);

export default TasksModel;
