import jwt, { Secret, SignOptions } from "jsonwebtoken"; // Import Secret and SignOptions

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET || "your_jwt_secret_key"; // Use a strong, random secret in production
const JWT_EXPIRES_IN = process.env.NEXT_PUBLIC_JWT_EXPIRES_IN || "1h";

if (!JWT_SECRET) {
  throw new Error(
    "Please define the JWT_SECRET environment variable inside .env.local"
  );
}

// Generate a JWT
export const generateToken = (userId: string): string => {
  return jwt.sign(
    { id: userId },
    JWT_SECRET as Secret,
    {
      expiresIn: JWT_EXPIRES_IN,
    } as SignOptions
  );
};

// Verify a JWT
export const verifyToken = (token: string): { id: string } | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
    return decoded;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};
