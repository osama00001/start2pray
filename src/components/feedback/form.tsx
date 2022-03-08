import React, { FormEvent } from "react";

export const FeedbackForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          className="border-[1px] hover:border-gray-400 px-3 py-3 rounded-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-[1px] hover:border-gray-400 px-3 py-3 rounded-full"
        />
        <input
          type="text"
          placeholder="Subject"
          className="border-[1px] hover:border-gray-400 px-3 py-3 rounded-full"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="border-[1px]  hover:border-gray-400 px-3 py-3 rounded-lg"
        />
        <button className="bg-gradient-to-r from-[#aed6f1] to-[#5499c7]  hover:to-[#5499c7]/80 self-center py-2 w-[min(300px,100%)] rounded-lg text-white font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};
