"use client";

import { useState } from "react";
import Link from "next/link";

interface ContactProps {
  dict: {
    title: string;
    description: string;
    email: string[];
    subject: string[];
    message: string[];
    button: string;
    emailSubmitted: string;
  };
}

export const Contact = ({ dict }: ContactProps) => {
  const [isLoading, setisLoading] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> & {
      target: {
        email: { value: string };
        subject: { value: string };
        message: { value: string };
      };
    }
  ) => {
    e.preventDefault();

    setisLoading(true);

    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      }),
    })
      .then(() => setEmailSubmitted(true))
      .finally(() => {
        setisLoading(false);

        e.target.email.value = "";
        e.target.subject.value = "";
        e.target.message.value = "";
      });
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">{dict.title}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md"> {dict.description}</p>
        <div className="socials flex flex-row gap-2 mt-8">
          <Link
            href="https://linkedin.com/in/pedrohxiv"
            target="_blank"
            className="text-[#ADB7BE] hover:text-white"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          <Link
            href="https://github.com/pedrohxiv"
            target="_blank"
            className="ml-6 text-[#ADB7BE] hover:text-white"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="mt-12 md:mt-0">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              {dict.email[0]}
            </label>
            <input
              disabled={emailSubmitted}
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={dict.email[1]}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              {dict.subject[0]}
            </label>
            <input
              disabled={emailSubmitted}
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={dict.subject[1]}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              {dict.message[0]}
            </label>
            <textarea
              disabled={emailSubmitted}
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={dict.message[1]}
              rows={6}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || emailSubmitted}
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none"
          >
            {dict.button}
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2 text-center">
              {dict.emailSubmitted}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
