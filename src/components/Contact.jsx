import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-6">
          <p className="text-4xl text-gray-300 border-b-4 border-pink-600 inline font-bold">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Please use form below to submit your comments:
          </p>
        </div>
        <input
          type="text"
          placeholder="Name..."
          name="name"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <input
          type="email"
          placeholder="Email..."
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          id=""
          rows="10"
          placeholder="Type in your message message..."
          className="my-4 p-2 bg-[#ccd6f6]"
        ></textarea>
        <button className="text-white border-2 px-4 py-3 my-4 mx-auto hover:bg-pink-600 hover:border-pink-600 flex items-center justify-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
