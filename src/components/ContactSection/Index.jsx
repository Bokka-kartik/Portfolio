import { Mail, Phone } from "lucide-react";
import React from "react";

const labelClass = [
  "block",
  "mb-2",
  "text-sm",
  "font-medium",
  "text-gray-800",
  "dark:text-gray-200",
].join(" ");

const inputClass = [
  "w-full",
  "px-4",
  "py-2",
  "border",
  "rounded-lg",
  "bg-white",
  "dark:bg-gray-800",
  "border-gray-200",
  "dark:border-gray-700",
  "text-gray-800",
  "dark:text-white",
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-blue-500",
  "focus:border-blue-500",
].join(" ");

const ContactSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 text-center bg-white dark:bg-gray-900">
      <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12">
        Contact Me.
      </h3>

      <div className="mb-10 text-gray-700 dark:text-gray-300">
        <p className="text-lg">
          {/* <Phone 
            size={20}
            // className="bg-white-600 dark:bg-gray-900 "
          /> */}
         📞 +91 - 9106960869
        </p>
        <p className="text-lg">
          {/* <Mail size={20} /> */}
          <strong> ✉️Kartiksai619@gmail.com</strong>
        </p>
      </div>
      <form className="max-w-3xl mx-auto text-left grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name :
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email :
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="msg" className={labelClass}>
            Message :
          </label>
          <textarea
            row={5}
            id="msg"
            placeholder="Your Message...."
            className={inputClass}
          ></textarea>
        </div>
        <button
          type="submit"
          className={[
            "w-full",
            "sm:w-fit",
            "px-6",
            "py-2",
            "border",
            "border-blue-500",
            "text-blue-500",
            "rounded",
            "hover:bg:blue-500",
            "hover:text-white",
            "transition",
          ].join(" ")}
        >
          {" "}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
