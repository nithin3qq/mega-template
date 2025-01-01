import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    products: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    clearErrors();
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      products: checked
        ? [...prevState.products, value]
        : prevState.products.filter((product) => product !== value),
    }));
  };

  // Clear errors
  const clearErrors = () => {
    setErrors({});
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (formData.products.length === 0)
      newErrors.products = "At least one product must be selected";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission using emailjs
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(false);

    if (!validateForm()) return;

    emailjs
      .send(
        "service_py2ndtj", // Replace with your EmailJS service ID
        "template_ugp7ii1", // Replace with your EmailJS template ID
        formData,
        "VtEcW5EnsU9TiHnDO" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            products: [],
          });
        },
        (error) => {
          setErrors({
            submit: "Failed to send the request. Please try again later.",
          });
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <div
      id="get-quote"
      className="flex justify-center items-center w-full bg-gray-900 py-12 lg:pb-24"
    >
      <div className="container mx-auto px-4 lg:px-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-gray-400">
          <Link
            to="/"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </Link>
          <FaChevronRight className="text-sm" />
          <span className="text-blue-500">Get A Quote</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-2/3"
          >
            <form onSubmit={sendEmail} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h1 className="text-4xl font-bold text-white mb-8">
                Request a Quote
              </h1>

              {/* Services Selection */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "CCTV Systems",
                  "Access Control",
                  "Alarm Systems",
                  "Fire Safety Systems",
                ].map((service) => (
                  <div key={service} className="flex items-center gap-3 group">
                    <input
                      type="checkbox"
                      value={service}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 rounded border-gray-600 text-blue-500 focus:ring-blue-500"
                    />
                    <label className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                      {service}
                    </label>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  type="text"
                  placeholder="First Name*"
                />  
                <input
                  name="lastName"
                  className="bg-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  type="text"
                  placeholder="Last Name*"
                  value={formData.lastName} 
                  onChange={handleChange}
                />
                <input
                  name="email"
                  className="bg-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  type="email"
                  placeholder="Email*"
                  value={formData.email} 
                  onChange={handleChange}
                />
                <input
                  name="phone"
                  className="bg-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  type="tel"
                  placeholder="Phone*"
                  value={formData.phone} 
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="message"
                placeholder="Additional Details"
                className="w-full bg-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 mb-6"
                rows="4"
                value={formData.message} 
                onChange={handleChange}
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Send Request</span>
                <FaCheckCircle className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
            </form>
            {isSubmitted && (
          <p className="text-green-600 mt-4">Your request has been sent successfully!</p>
        )}
        {errors.submit && <p className="text-red-600 mt-4">{errors.submit}</p>}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3"
          >
            <div className="bg-blue-900 p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Office Address
                    </h3>
                    <p className="text-gray-300">
                      AS Rao Nagar, Hyderabad, Telangana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-300">+91 90522 54949</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Email
                    </h3>
                    <p className="text-gray-300">info.mgthyd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
