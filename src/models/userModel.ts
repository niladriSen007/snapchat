import mongoose, { Model } from "mongoose";

export interface UserType {
  username: String;
  firstname: String;
  email: String;
  avatar?: String;
};

export interface UserDocument extends UserType, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema<UserDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const UserModel : Model<UserDocument> =
  mongoose.models?.UserModel ?? mongoose.model("UserModel", UserSchema);
