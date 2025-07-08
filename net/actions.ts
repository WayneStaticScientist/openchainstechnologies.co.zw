"use server";
import User from "@/models/user";
import { User as UserType } from "@/types";
import { generateToken, verifyToken } from "@/utils/auth";
import dbConnect from "@/utils/db";

export async function RegisterUser(user: UserType) {
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
    throw new Error("Please enter all fields");
  }

  let userModel = await User.findOne({ email: user.email });
  if (userModel) {
    throw new Error(`User with email ${user.email} already exists`);
  }
  // Create new user
  userModel = await User.create(user);
  userModel.password = undefined;
  const token = generateToken(userModel._id);
  return { user: userModel, token };
}

export async function LoginUser(user: UserType) {
  await dbConnect();
  if (!user.email || !user.password) {
    throw new Error("Please enter all fields");
  }
  const userModel = await User.findOne({ email: user.email });
  if (!userModel) {
    throw new Error(`Invalid credentials`);
  }
  const isMatch = await userModel.comparePassword(user.password);
  if (!isMatch) {
    throw new Error(`Invalid credentials`);
  }
  // Generate token
  userModel.password = undefined;
  const token = generateToken(userModel._id);
  return { user: userModel, token };
}

// --- File: pages/api/auth/me.ts ---
// This API route retrieves the authenticated user's information.
// It relies on the token being present in cookies or Authorization header.

export async function getUser(token: string) {
  await dbConnect();
  if (!token || token.trim() === "") {
    throw new Error(`Authorization denied`);
  }
  const decoded = verifyToken(token);
  if (!decoded) {
    throw new Error(`Authorization denied`);
  }
  const user = await User.findById(decoded.id).select("-password"); // Exclude password
  if (!user) {
    throw new Error(`User not found`);
  }
  return user;
}

// --- File: pages/api/auth/logout.ts ---
// This API route handles user logout by clearing the token cookie.

export async function logout() {
  //man
}
