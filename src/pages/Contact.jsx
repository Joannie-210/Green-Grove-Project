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

  const scrollToTop = () => {
 window.scrollTo({
  top: 0,
  behavior: 'smooth'
 })
  }

  return (
    <div>
      
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

      
    <div className="lg:h-200 flex flex-col lg:flex-row justify-between lg:pt-15  items-start gap-10 min-w-full h-auto py-5 px-4 sm:px-10">
  {/* Contact Info Section */}
  <div className="hidden md:flex flex-col justify-start md:w-full  w-150 max-w-4xl rounded-lg">
<h1 className="text-2xl w-full md:text-5xl  md:text-center lg:text-4xl  lg:text-left font-bold mt-5 mb-4">Drop the line, let's chat</h1>
    <h2 className="text-xl text-gray-600 mb-6">Don't hesitate to say a hello!</h2>

    <div className="flex flex-col  items-center md:justify-between  md:flex-row lg:items-center lg:justify-between gap-6">
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
  <div className="w-full max-w-lg mx-auto bg-white rounded-2xl py-6 lg:px-1 sm:p-10 shadow-lg border border-gray-200">
  <h2 className="text-center font-sans text-gray-800 text-3xl sm:text-4xl font-semibold mb-6">
      Let's Get in Touch!
  </h2>
  <form onSubmit={onSubmit} className="flex flex-col gap-5">
    <input
      type="text"
      name="name"
      placeholder="Your Full Name"
      className="w-full py-3 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 placeholder-gray-500"
      required
    />
    <input
      type="text"
      name="phone"
      placeholder="Phone Number"
      className="w-full py-3 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 placeholder-gray-500"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      className="w-full py-3 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 placeholder-gray-500"
      required
    />
    <textarea
      name="message"
      placeholder="Type your message here..."
      rows="5"
      className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 placeholder-gray-500"
      required
    ></textarea>
    <button
      type="submit"
      className="active:scale-90 w-full py-3 rounded-full bg-green-500 cursor-pointer hover:bg-green-600 text-white font-medium text-lg shadow-sm transition-all duration-200"
    >
      Send Message
    </button>
  </form>
</div>

</div>
<button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-[50px] h-[50px] flex items-center justify-center hover:cursor-pointer">
      <i className="bi bi-arrow-up text-xl"></i>

     </button>
    </div>
  );
};

export default Contact;
