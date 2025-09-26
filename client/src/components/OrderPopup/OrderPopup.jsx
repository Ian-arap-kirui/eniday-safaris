import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiUser, FiMail, FiCalendar, FiUsers } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const OrderPopup = ({ orderPopup, setOrderPopup, packageData }) => {
  const formRef = useRef();

  const sendOrder = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l4fwt9n",     // replace with your EmailJS service ID
        "template_jhgz6nm",    // replace with your EmailJS order template ID
        formRef.current,
        "user_Gm64rr0jmtM3pMdOrrn2p"      // replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Booking request sent! We’ll contact you shortly.");
          setOrderPopup(false);
        },
        (error) => {
          console.error(error.text);
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-md bg-white dark:bg-gray-900 rounded-lg duration-200 w-full max-w-md">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-t-lg -m-6 mb-4 p-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Book {packageData?.title || "Your Package"}
                </h1>
                <p className="text-white/90 mt-1">
                  {packageData?.subtitle || "Secure your spot today!"}
                </p>
              </div>
              <IoCloseOutline
                className="text-2xl cursor-pointer text-white hover:text-white/80 transition"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Booking form */}
            <form ref={formRef} onSubmit={sendOrder} className="mt-4 space-y-4">
              {/* Hidden fields to capture package info */}
              <input type="hidden" name="package_title" value={packageData?.title || ""} />
              <input type="hidden" name="package_price" value={packageData?.price || ""} />

              {/* Full Name */}
              <div className="relative">
                <FiUser className="absolute inset-y-0 left-3 my-auto text-gray-400" />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border ..."
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FiMail className="absolute inset-y-0 left-3 my-auto text-gray-400" />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  className="w-full pl-10 ..."
                  required
                />
              </div>

              {/* Date + Travelers */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <FiCalendar className="absolute inset-y-0 left-3 my-auto text-gray-400" />
                  <input
                    type="date"
                    name="travel_date"
                    className="w-full pl-10 ..."
                    required
                  />
                </div>
                <div className="relative">
                  <FiUsers className="absolute inset-y-0 left-3 my-auto text-gray-400" />
                  <select name="travelers" className="w-full pl-10 ..." required>
                    <option value="">Travelers</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="4+">4+ People</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-6 rounded-lg shadow-lg"
              >
                Complete Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
