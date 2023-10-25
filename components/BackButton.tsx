import Link from "next/link";
import React from "react";

const BackButton = () => {
  return (
    <>
      <Link href="/">
        <div className="mt-8 flex items-center  text-blue-500 hover:text-blue-700 hover:underline transition">
          <span className="mx-2">Back to Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 mb-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </div>
      </Link>
    </>
  );
};

export default BackButton;
