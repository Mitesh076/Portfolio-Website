import React, { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaAddressBook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_6dg1qvm",
        "template_l1peytd",
        form.current,
        "Z7SRoapyXft1ZF39K",
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          e.target.reset();
        },
        () => {
          setLoading(false);
          setStatus("error");
        },
      );
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-5 md:px-20
      bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]"
    >
      {/* Heading */}
      <div className="  text-center text-white mb-5">
        <h2 className="text-5xl font-bold flex text-orange-400 justify-center items-center gap-3">
          <FaAddressBook className="" />
          Contact Me
        </h2>

        <p className="mt-3 text-gray-300">
          Feel free to contact me for collaboration or opportunities.
        </p>
      </div>

      {/* Separator */}
      <div className="w-24 h-1 bg-orange-400 mx-auto mb-16 rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT */}
        <div className="text-white space-y-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=miteshbharvad733@gmail.com&su=Portfolio visited Queries"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20"
          >
            <FaEnvelope className="text-2xl text-orange-400" />
            <span>miteshbharvad733@gmail.com</span>
          </a>

          <a
            href="tel:+919081611867"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20"
          >
            <FaPhone className="text-2xl text-orange-400" />
            <span>+91 XXXXX XXXXX</span>
          </a>

          <a
            href="https://www.google.com/maps/place/Anand,+Gujarat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20"
          >
            <FaMapMarkerAlt className="text-2xl text-orange-400" />
            <span>Anand, Gujarat, India</span>
          </a>
        </div>

        {/* RIGHT FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-6 border border-white/20"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-300 focus:border-orange-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-300 focus:border-orange-400 outline-none"
          />

          <textarea
            rows="4"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-300 focus:border-orange-400 outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="
            flex items-center justify-center gap-2 w-full
            bg-orange-400 text-black font-semibold
            px-6 py-3 rounded-lg

            hover:bg-orange-500
            hover:shadow-[0_0_20px_rgba(255,165,0,0.7)]

            transition-all duration-300
            "
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </button>

          {/* ✅ SUCCESS MESSAGE */}
          {status === "success" && (
            <p className="text-green-400 text-center">
              Message sent successfully ✅
            </p>
          )}

          {/* ❌ ERROR MESSAGE */}
          {status === "error" && (
            <p className="text-red-400 text-center">
              Failed to send message ❌
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
