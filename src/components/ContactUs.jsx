import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const ContactUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it enters the view
    threshold: 0.1, // Fire the event when 10% of the component is visible
  });
  
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_py2ndtj', 'template_56erl5y', e.target, 'VtEcW5EnsU9TiHnDO')
      .then(
        (result) => {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', phone: '', message: '' });
        },
        (error) => {
          setError('Something went wrong, please try again later.');
        }
      );
  };

  return (
    <div className="bg-gray-50" ref={ref}>
      {/* Google Map Section */}
      <section className="w-full">
        <iframe
        //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.0677082005723!2d39.2819771!3d-6.7615988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c157c175805%3A0xf78d233cac824cef!2sSecure%207%20System%20Limited!5e0!3m2!1sen!2stz!4v1665389177643!5m2!1sen!2stz" 
          src="https://www.google.com/maps/embed" 
          width="100%"
          height="400"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
      
      {/* Contact Form Section */}
      <section className="container mx-auto px-4 mt-10 p-10 border border-gray-300 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className={`bg-blue-500 text-white p-8 rounded-lg relative overflow-hidden col-1 ${visible ? 'animate-fall-left' : 'opacity-0'}`}>
            <div className="absolute inset-0 opacity-20"></div>
            <h4 className="text-4xl font-bold relative z-10 my-10 underline">MEGA Technologies</h4>
            <h4 className="text-3xl font-bold relative z-10">Tailored Solutions For Your Security</h4>
            <p className="my-4 relative z-10">
              At MG Technologies, we prioritize your security. Reach out to us for customized solutions designed to meet your specific needs.
            </p>
            <ul className="mt-6 relative z-10">
              <li className="mb-2 flex items-center">
                <FaPhoneAlt className="mr-2" /> Hotline: +91 90522 54949
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> AS Rao Nagar, Hyderabad, Telangana
              </li>
            </ul>
          </div>

          {/* Form */}
          <form className={`bg-white p-8 rounded-lg col-2 ${visible ? 'animate-fall-right' : 'opacity-0'}`} onSubmit={handleSubmit}>
            <h4 className="text-2xl font-bold mb-4">Get In Touch</h4>
            <p className="text-gray-600 mb-6">
              Work with a team of experts to enhance your security. Let us guide you.
            </p>

            {/* Form Inputs */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                className="border border-gray-300 p-3 rounded-lg w-full"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                className="border border-gray-300 p-3 rounded-lg w-full"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="border border-gray-300 p-3 rounded-lg w-full"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              className="border border-gray-300 p-3 rounded-lg w-full mb-4"
              placeholder="Additional Details"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit Request
            </button>

            {/* Feedback Message */}
            {isSubmitted && (
              <p className="text-green-600 mt-4">Your request has been sent successfully!</p>
            )}
            {error && <p className="text-red-600 mt-4">{error}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
