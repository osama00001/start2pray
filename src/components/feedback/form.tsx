import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const FeedbackForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>(null!);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cgmwpii", // service_id template_id and User_ID in here from emailjs
        "template_zveek6a",
        form.current,
        "Lg22aS6akO7zZxU9m"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );
    e.currentTarget.reset();
    setIsSubmitted(true);
  };
  return (
    <div>
      {!isSubmitted ? (
        <form
          ref={form}
          className="flex flex-col space-y-5"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            className="border-[1px] hover:border-gray-400 px-3 py-3 rounded-full"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="border-[1px] hover:border-gray-400 px-3 py-3 rounded-full"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="border-[1px] hover:border-gray-400 px-3 py-3 rounded-full"
          />
          <textarea
            placeholder="Message"
            name="message"
            rows={5}
            className="border-[1px]  hover:border-gray-400 px-3 py-3 rounded-lg"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#aed6f1] to-[#5499c7]  hover:to-[#5499c7]/80 self-center py-2 w-[min(300px,100%)] rounded-lg text-white font-bold"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="bg-[#5499c7] rounded-lg text-center text-white font-bold py-3">
          Form Submitted
        </div>
      )}
    </div>
  );
};
