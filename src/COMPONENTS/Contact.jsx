import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-5 md:px-20
      bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]"
    >
      {/* Heading */}
      <div className="text-center text-white mb-16">
        <h2 className="text-5xl font-bold">Get In Touch</h2>
        <p className="mt-3 text-gray-300">
          Feel free to contact me for collaboration or opportunities.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="text-white space-y-8">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-yellow-400" />
            <span>yourmail@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-yellow-400" />
            <span>+91 XXXXX XXXXX</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl text-yellow-400" />
            <span>Anand, Gujarat, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-xl space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg outline-none"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg outline-none"
          ></textarea>

          <button
            type="submit"
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
