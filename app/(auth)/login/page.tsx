"use client";
import { LoginUser } from "@/net/actions";
import { User } from "@/types";
import { storeBothUserAndToken } from "@/utils/user-store";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

// Main App component that renders the LoginPage
export default function App() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="tw:min-h-screen! tw:bg-gray-100! tw:flex! tw:items-center! tw:justify-center! tw:p-4! tw:sm:p-6! tw:lg:p-8! tw:font-inter! tw:text-gray-800!">
        <LoginPage />
      </div>
    </>
  );
}

// LoginPage component
const LoginPage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const formdata = new FormData(e.currentTarget);
    const user = Object.fromEntries(formdata) as User;
    try {
      const login = await LoginUser(user);
      storeBothUserAndToken(login.user, login.token);
      setMessage("Login successful! Welcome to OpenchainsTechnologies.");
      setMessageType("success");
      router.push("/welcome");
      toast.success("Login successful");
    } catch (e: any) {
      toast.error(e.message ?? "Something went wrong");
      setMessage(e.message ?? "Something went wrong");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Changed card background to white, adjusted shadow and hover effect
    <div className="tw:bg-white tw:p-8! tw:rounded-2xl! tw:shadow-xl! tw:w-full! tw:max-w-md! tw:transform! tw:transition-all! tw:duration-300! tw:hover:scale-105!">
      <div className="tw:text-center! tw:mb-8! tw:flex! tw:items-center! tw:justify-center! tw:flex-col!">
        {/* Company Logo/Icon - Using a simple SVG for demonstration, adjusted color */}
        <img
          src={"/assets/images/web.png"}
          alt="Openchains Technologies Logo"
          width={65}
          height={65}
        />
        <h1 className="tw:text-xl! tw:font-extrabold tw:text-gray-900 tw:mt-4">
          Openchains<span className="tw:text-indigo-600">Technologies</span>
        </h1>
        <p className="tw:mt-2 tw:text-gray-600 tw:text-lg">
          Innovating in Web, Electronics & Robotics
        </p>
      </div>

      <form onSubmit={handleLogin} className="tw:space-y-6!">
        <div>
          <label
            htmlFor="email"
            className="tw:block! tw:text-sm! tw:font-medium! tw:text-gray-700!"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // Adjusted input background, border, and text colors
            className="tw:mt-1! tw:block! tw:w-full! tw:px-4! tw:py-2! tw:bg-gray-50! tw:border! tw:border-gray-300! tw:rounded-lg! tw:text-gray-900! tw:placeholder-gray-500! tw:focus:outline-none! tw:focus:ring-2! tw:focus:ring-indigo-500! tw:focus:border-transparent! tw:transition! duration-200!"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            {/* Adjusted label color */}
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // Adjusted input background, border, and text colors
            className="tw:mt-1! tw:block! tw:w-full! tw:px-4! tw:py-2! tw:bg-gray-50! tw:border! tw:border-gray-300! tw:rounded-lg! tw:text-gray-900! tw:placeholder-gray-500! tw:focus:outline-none! tw:focus:ring-2! tw:focus:ring-indigo-500! tw:focus:border-transparent! tw:transition! duration-200!"
            placeholder="••••••••"
          />
        </div>
        {message && (
          <div
            className={`tw:mt-6! tw:p-4! tw:rounded-lg! tw:text-center! ${
              messageType === "success"
                ? "tw:bg-green-100! tw:text-green-800!"
                : "tw:bg-red-100! tw:text-red-800!" // Adjusted message box colors
            }`}
          >
            {message}
          </div>
        )}

        <div className="tw:flex tw:items-center tw:justify-between">
          <div className="text-sm">
            <a
              href="#"
              className="tw:font-medium tw:text-indigo-600 tw:hover:text-indigo-500 tw:transition tw:duration-200"
            >
              {/* Adjusted link color */}
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            // Retained gradient button, but ensured good contrast on light background
            className=" tw:cursor-pointer! tw:w-full! tw:flex! tw:justify-center! tw:py-3! tw:px-4! tw:border! tw:border-transparent! tw:rounded-lg! tw:shadow-sm! tw:text-lg! tw:font-semibold! tw:text-white! tw:bg-gradient-to-r! tw:from-indigo-600! tw:to-purple-600! tw:hover:from-indigo-700! tw:hover:to-purple-700! tw:focus:outline-none! tw:focus:ring-2! tw:focus:ring-offset-2! tw:focus:ring-indigo-500! tw:transition! duration-300! tw:ease-in-out! tw:transform! tw:hover:-translate-y-0.5!"
          >
            {loading ? (
              <CgSpinner className="tw:animate-spin " size={20} />
            ) : (
              <> Sign in</>
            )}
          </button>
        </div>
      </form>

      <div className="tw:mt-8 tw:text-center tw:text-sm tw:text-gray-600">
        Don't have an account?{" "}
        <a
          href="/register"
          className="tw:font-medium tw:text-indigo-600 tw:hover:text-indigo-500 tw:transition tw:duration-200"
        >
          Sign up
        </a>
      </div>
    </div>
  );
};
