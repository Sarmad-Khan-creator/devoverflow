import User from "@/database/user.model";
import connectToDatabase from "../mongoose";
import {
  CreateUserParams,
  GetUserByIdParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();

    const user = await User.create(userData);

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUserById(params: GetUserByIdParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();

    const { clerkId, updateData, path } = params;

    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
