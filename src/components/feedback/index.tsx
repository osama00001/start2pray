import React, { FormEvent } from "react";

export const Feedback = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <section
      id="contact"
      className="flex flex-col gap-5 justify-center items-center min-h-screen w-[min(500px,100%-30px)] mx-auto"
    >
      <h2 className="uppercase text-center text-4xl md:text-6xl tracking-wide text-gradient bg-gradient-to-r from-[#aed6f1] to-[#5499c7] font-bold ">
        Feedback
      </h2>
      <div className="space-y-5">
        <p className="text-[1.2rem] text-center">
          Feel Free to leave a Feedback if you have any Questions.
        </p>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
            className="border-[1px] hover:border-gray-400 px-3 py-3 rounded-lg"
          />
          <button className="bg-gradient-to-r from-[#aed6f1] to-[#5499c7]  hover:to-[#5499c7]/80 self-center py-2 w-[min(300px,100%)] rounded-lg text-white font-bold">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
