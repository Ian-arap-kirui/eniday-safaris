import React, { useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiUser, FiMail } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const InquiryPopup = ({ inquiryPopup, setInquiryPopup }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendInquiry = (e) => {
    e.preventDefault();
    setLoading(true);

    
    emailjs
      .sendForm(
        "service_l4fwt9n",     // replace with EmailJS service ID
        "template_kbi930m",    // replace with EmailJS template ID
        form.current,
        "user_Gm64rr0jmtM3pMdOrrn2p"      // replace with EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
          setTimeout(() => setInquiryPopup(false), 2000);
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong: " + error.text);
        }
      );
  };

  return (
    <>
      {inquiryPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-md bg-white dark:bg-gray-900 rounded-lg w-full max-w-md">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-t-lg -m-6 mb-4 p-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Contact Us</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer text-white hover:text-white/80 transition"
                onClick={() => setInquiryPopup(false)}
              />
            </div>

            {/* Form */}
            {!success ? (
              <form ref={form} onSubmit={sendInquiry} className="space-y-4 mt-4">
                {/* Name */}
                <div className="relative">
                  <FiUser className="absolute inset-y-0 left-3 my-auto text-gray-400" />
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <FiMail className="absolute inset-y-0 left-3 my-auto text-gray-400" />
                  <input
                    type="email"
                    name="reply_to"
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
                    required
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
                  required
                ></textarea>

                {/* Hidden timestamp */}
                <input type="hidden" name="time" value={new Date().toLocaleString()} />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition"
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            ) : (
              <p className="text-center text-green-600 font-semibold">
                ✅ Thank you! Your inquiry has been sent.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default InquiryPopup;
