import React from "react";
import { FeedbackForm } from "./form";

export const Feedback = () => {
  return (
    <section
      id="contact"
      className="flex flex-col space-y-5 justify-center items-center min-h-screen w-[min(500px,100%-30px)] mx-auto"
    >
      <h2 className="uppercase text-center text-4xl md:text-6xl tracking-wide text-gradient bg-gradient-to-r from-[#aed6f1] to-[#5499c7] font-bold ">
        Feedback
      </h2>
      <div className="space-y-5">
        <p className="text-[1.2rem] text-center">
          Feel Free to leave a Feedback if you have any Questions.
        </p>
        <FeedbackForm />
      </div>
    </section>
  );
};
