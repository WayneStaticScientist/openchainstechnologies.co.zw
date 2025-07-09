"use client";
import { useUserStore } from "@/stores/user-store";
import React from "react";

export default function WelcomePage() {
  const user = useUserStore();
  return (
    <div className="tw:min-h-screen! tw:bg-gradient-to-br! tw:from-purple-500! tw:to-indigo-600! tw:flex! tw:items-center! tw:justify-center! tw:p-4! tw:sm:p-6! tw:lg:p-8! tw:font-inter! tw:text-white!">
      <div className="tw:bg-white! tw:p-8! tw:rounded-2xl! tw:shadow-2xl! tw:w-full! tw:max-w-xl! tw:text-center! tw:transform! tw:transition-all! tw:duration-500! tw:scale-100! tw:hover:scale-105!">
        <div className="tw:mb-8! tw:flex! tw:items-center! tw:justify-center! tw:flex-col!">
          <img
            src={"/assets/images/web.png"}
            alt="Openchains Technologies Logo"
            width={80}
            height={80}
            className="tw:mb-4!"
          />
          <h6 className="tw:text-xl! tw:font-extrabold! tw:text-gray-900! tw:mb-2!">
            Welcome to Openchains
            <span className="tw:text-indigo-600!">Technologies</span>!
          </h6>
          {user.fullName}
          <p className="tw:text-lg! tw:text-gray-700! tw:leading-relaxed!">
            We're thrilled to have you join our community of innovators!.
          </p>
        </div>
        <p className="tw:text-gray-600! tw:text-md! tw:mb-6!">
          Explore our cutting-edge solutions in Web, Electronics, and Robotics.
          Your journey into the future of technology starts here.
        </p>
        <a
          href="/"
          className="tw:inline-block! tw:bg-gradient-to-r! tw:from-indigo-600! tw:to-purple-600! tw:text-white! tw:font-semibold! tw:py-3! tw:px-8! tw:rounded-full! tw:shadow-lg! tw:hover:from-indigo-700! tw:hover:to-purple-700! tw:transition! tw:duration-300! tw:ease-in-out! tw:transform! tw:hover:-translate-y-1!"
        >
          Start Exploring
        </a>
      </div>
    </div>
  );
}
