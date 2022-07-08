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
        Please feel free to get in touch using the form below. We’d love
to hear your thoughts and answer any questions you may have!
        </p>
        <FeedbackForm />
      </div>
    </section>
  );
};
