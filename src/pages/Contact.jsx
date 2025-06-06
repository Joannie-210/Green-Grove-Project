import React from 'react'
import Swal from "sweetalert2";
import aboutus from '../assets/aboutusimg.jpg'

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

      <div className="relative bg-cover bg-center bg-fixed flex items-center justify-center rounded-bl-[60px] sm:rounded-bl-[100px] h-[60vh] sm:h-[80vh] lg:h-screen"
              style={{ backgroundImage: `url(${aboutus})` }} data-aos="fade-up"> 
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/60 to-black/60 rounded-bl-[60px] sm:rounded-bl-[100px]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className='flex items-center justify-center pt-[100px] pb-[100px]'>
        <form
        onSubmit={onSubmit}
        className="w-[500px] flex flex-col justify-between items-center gap-3 rounded-xl bg-green-200 border-black border-2"
      >
        <h2 className='text-center font-Jost text-black text-4xl pb-[30px]'>Contact Us</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="bg-white p-5 rounded-xl w-full border-black border-2"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Phone Number"
          className="bg-white p-5 rounded-xl w-full border-black border-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-white p-5 rounded-xl w-full border-black border-2"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="bg-white p-5 rounded-xl w-full border-black border-2"
          required
        ></textarea>
        <button
          type="submit"
          className="hover:cursor-pointer p-5 rounded-full bg-green-600 hover:bg-green-700 w-[200px] text-white font-bold border-2 border-black transition-colors hover:border-white"
        >
          Submit Form
        </button>
      </form>
      </div>
    </div>
  )
}

export default Contact
