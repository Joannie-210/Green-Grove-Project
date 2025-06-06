import React from 'react';
import Swal from "sweetalert2";
import Contacts from '../assets/download.jpeg';
import Cimg from '../assets/cimg.jpg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "14c20eca-62ff-4ad3-a54c-8e98eb8507c8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-fixed flex items-center justify-center rounded-bl-[40px] sm:rounded-bl-[100px] h-[60vh] sm:h-[80vh] lg:h-screen"
        style={{ backgroundImage: `url(${Contacts})` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/60 rounded-bl-[40px] sm:rounded-bl-[100px]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Form Section */}
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 min-w-full h-auto py-5 px-4 sm:px-10">
  {/* Contact Info Section */}
  <div className="hidden md:flex flex-col justify-center w-full max-w-xl rounded-lg">
    <h1 className="text-2xl bgw-full md:text-6xl lg:text-5xl font-bold mb-4">Drop the line, let's chat</h1>
    <h2 className="text-xl mb-6">Don't hesitate to say a hello!</h2>

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
      <div className="flex flex-col text-black">
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Phone</h4>
          <p className="hover:underline cursor-pointer text-green-500">+235 8132667897</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Email</h4>
          <p className="hover:underline cursor-pointer text-green-500">greengrove@gmail.com</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Office</h4>
          <p className="hover:underline cursor-pointer text-green-500 max-w-xs">
            No 10 MBM Plaza, Old Aba Road, Rumuobiakani, Port-harcourt Rivers State, Nigeria.
          </p>
        </div>
      </div>

      <img
        src={Cimg}
        alt="Contact"
        className="w-40 h-40 sm:w-60 sm:h-60 rounded-lg object-cover"
      />
    </div>
  </div>

  {/* Contact Form Section */}
  <div className="w-full max-w-2xl bg-green-200 rounded-xl py-6 px-4 sm:px-8 border-2 border-black">
    <h2 className="text-center font-Jost text-black text-3xl sm:text-4xl mb-6">Contact Us</h2>
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="bg-white p-4 rounded-lg w-full border-2 border-black"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        className="bg-white p-4 rounded-lg w-full border-2 border-black"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="bg-white p-4 rounded-lg w-full border-2 border-black"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        rows="5"
        className="bg-white p-4 rounded-lg w-full border-2 border-black"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full p-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold border-2 border-black transition-colors hover:border-white"
      >
        Submit Form
      </button>
    </form>
  </div>
</div>

    </div>
  );
};

export default Contact;
