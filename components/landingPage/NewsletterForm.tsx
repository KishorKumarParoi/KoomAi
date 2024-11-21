import * as React from "react";

export const NewsletterForm: React.FC = () => {
  return (
    <form className="flex flex-col mt-8 max-w-full w-[513px]">
      <div className="flex flex-wrap gap-4 items-start w-full text-base max-md:max-w-full">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="flex-1 shrink gap-2 self-stretch p-3 border border-black border-solid basis-6 min-w-[240px] text-stone-500"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="gap-2 self-stretch px-6 py-3 text-white bg-black border border-black border-solid w-[101px] max-md:px-5"
        >
          Sign up
        </button>
      </div>
      <p className="mt-4 text-xs text-black max-md:max-w-full">
        By clicking Sign Up you're confirming that you agree with our{" "}
        <a href="/terms" className="underline">
          Terms and Conditions
        </a>
        .
      </p>
    </form>
  );
};
