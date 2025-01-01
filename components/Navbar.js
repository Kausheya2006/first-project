"use client";
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-slate-950 text-white flex justify-between items-center px-6 py-4 shadow-lg">
      {/* Left Section: Logo and Links */}
      <div className="flex items-center gap-6">
        <Link
          className="logo font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform"
          href="/"
        >
          <img src="/search_bg.gif" width={44} alt="Logo" />
          <span>Find My Item</span>
        </Link>

        <div className="flex gap-4">
          <Link
            href="/report"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Report
            </span>
          </Link>

          <Link
            href="/lists"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              View Lists
            </span>
          </Link>

          <Link
            href="/about"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              About
            </span>
          </Link>

          <Link
            href="/dashboard"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Dashboard
            </span>
          </Link>
        </div>
      </div>

      {/* Right Section: Login/SignOut */}
      <div className="flex items-center gap-6">
        {!session && (
          <Link
            href="/login"
            className="text-sm font-medium hover:text-blue-400 transition-colors"
          >
            Login
          </Link>
        )}
        {session && (
          <>
            <button
              onClick={() => {
                signOut();
              }}
              className="text-sm font-medium hover:text-red-400 transition-colors"
            >
              Sign out
            </button>
            <div className="text-sm font-light text-gray-300">
              Logged in as <span className="font-medium">{session.user.name}</span>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
