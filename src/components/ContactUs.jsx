import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (inView) setVisible(true);
  }, [inView]);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_py2ndtj', 'template_56erl5y', e.target, 'VtEcW5EnsU9TiHnDO')
      .then(
        (result) => {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', phone: '', message: '' });
          // Reset the form
          e.target.reset();
          // Clear success message after 3 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          setError('Something went wrong, please try again later.');
          // Clear error message after 3 seconds
          setTimeout(() => {
            setError('');
          }, 3000);
        }
      );
  };
  

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'info@megatechnologies.in', link: 'mailto:info@megatechnologies.in' },
    { icon: <FaPhoneAlt />, text: '+91 90522 54949', link: 'tel:+919052254949' },
    { icon: <FaMapMarkerAlt />, text: 'AS Rao Nagar, Hyderabad, Telangana' },
    { icon: <FaClock />, text: 'Mon - Sat: 9:00 AM - 6:00 PM' },
  ];

  return (
    <div className="bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-lg bg-blue-500/10 px-6 py-2 rounded-full">
            Contact Us
          </span>
          <h2 className="text-4xl font-bold text-white mt-6 mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss how we can help secure your space with our advanced security solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-blue-900/50 to-gray-900 p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  {info.link ? (
                    <a href={info.link} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{info.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="bg-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="bg-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              className="w-full bg-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="5"
              className="w-full bg-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message
              {isSubmitted && <FaCheckCircle />}
            </button>

            {isSubmitted && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 text-center"
              >
                Your message has been sent successfully!
              </motion.p>
            )}
            {error && <p className="text-red-500 text-center">{error}</p>}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
