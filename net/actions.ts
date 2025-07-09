"use server";
import User from "@/models/user";
import { User as UserType } from "@/types";
import { generateToken, verifyToken } from "@/utils/auth";
import dbConnect from "@/utils/db";

export async function RegisterUser(user: UserType): Promise<{
  user?: UserType;
  token?: string;
  message?: string;
  error: boolean;
}> {
  await dbConnect();
  if (
    !user.phone ||
    !user.fullName ||
    !user.email ||
    !user.password ||
    user.phone.trim() == "" ||
    user.fullName.trim() == "" ||
    user.email.trim() == "" ||
    user.password.trim() == ""
  ) {
    return { error: true, message: "Please enter all fields" };
  }

  let userModel = await User.findOne({ email: user.email });
  if (userModel) {
    return { error: true, message: "User already exists" };
  }
  try {
    userModel = await User.create(user);
    userModel.password = undefined;
    const token = generateToken(userModel._id);
    return { user: userModel.toObject(), token, error: false };
  } catch (e: any) {
    return { error: true, message: e.message ?? "Something went wrong" };
  }
}

export async function LoginUser(user: UserType): Promise<{
  user?: UserType;
  token?: string;
  message?: string;
  error: boolean;
}> {
  await dbConnect();
  if (!user.email || !user.password) {
    return { error: true, message: "Please enter all fields" };
  }
  const userModel = await User.findOne({ email: user.email });
  if (!userModel) {
    return { error: true, message: `Invalid credentials` };
  }
  const isMatch = await userModel.comparePassword(user.password);
  if (!isMatch) {
    return { error: true, message: `Invalid credentials` };
  }
  // Generate token
  userModel.password = undefined;
  const token = generateToken(userModel._id);
  return { user: userModel.toObject(), token, error: false };
}

// --- File: pages/api/auth/me.ts ---
// This API route retrieves the authenticated user's information.
// It relies on the token being present in cookies or Authorization header.

export async function getUser(token: string): Promise<{
  user?: UserType;
  token?: string;
  message?: string;
  error: boolean;
}> {
  await dbConnect();
  if (!token || token.trim() === "") {
    return { error: true, message: `Authorization denied` };
  }
  const decoded = verifyToken(token);
  if (!decoded) {
    return { error: true, message: `Authorization denied` };
  }
  const user = await User.findById(decoded.id).select("-password"); // Exclude password
  if (!user) {
    return { error: true, message: `Authorization denied` };
  }
  return user.toObject();
}

// --- File: pages/api/auth/logout.ts ---
// This API route handles user logout by clearing the token cookie.

export async function logout() {
  //man
}
