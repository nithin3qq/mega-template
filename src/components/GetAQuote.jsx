import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
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
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (formData.products.length === 0) newErrors.products = 'At least one product must be selected';

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
        'service_py2ndtj', // Replace with your EmailJS service ID
        'template_ugp7ii1', // Replace with your EmailJS template ID
        formData,
        'VtEcW5EnsU9TiHnDO' // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            products: [],
          });
        },
        (error) => {
          setErrors({ submit: 'Failed to send the request. Please try again later.' });
          console.error('EmailJS Error:', error.text);
        }
      );
  };

  return (
    <div id="get-quote" className="flex justify-center items-center w-full bg-white py-12 lg:pb-24">
       
      <div className="container mx-auto px-4 lg:px-20">
      <nav className="text-gray-400 mb-4">
        <Link to="/" className="hover:underline text-blue-500">Home</Link>
        {/* <FaChevronRight className="inline-block mx-2" /> */}
        {/* <Link to="/portfolio" className="hover:underline text-blue-500">Portfolio</Link> */}
        <FaChevronRight className="inline-block mx-2" />
        <span className="text-gray-500">Get A Quote</span>
      </nav>
        <form onSubmit={sendEmail} id="quoteForm">
          <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Get a Quote</h1>
            <div className="flex items-center my-4">
              <input 
                type="checkbox" 
                className="h-4 w-4 rounded" 
                value="CCTV Systems" 
                onChange={handleCheckboxChange} 
                checked={formData.products.includes('CCTV Systems')}
              />
              <label className="ml-3 text-lg font-medium text-gray-900">CCTV Systems</label>
            </div>

            <div className="flex items-center my-4">
              <input 
                type="checkbox" 
                className="h-4 w-4 rounded" 
                value="Access Control" 
                onChange={handleCheckboxChange} 
                checked={formData.products.includes('Access Control')}
              />
              <label className="ml-3 text-lg font-medium text-gray-900">Access Control Systems</label>
            </div>

            <div className="flex items-center my-4">
              <input 
                type="checkbox" 
                className="h-4 w-4 rounded" 
                value="Alarm Systems" 
                onChange={handleCheckboxChange} 
                checked={formData.products.includes('Alarm Systems')}
              />
              <label className="ml-3 text-lg font-medium text-gray-900">Alarm Systems</label>
            </div>

            <div className="flex items-center my-4">
              <input 
                type="checkbox" 
                className="h-4 w-4 rounded" 
                value="Fire Safety Systems" 
                onChange={handleCheckboxChange} 
                checked={formData.products.includes('Fire Safety Systems')}
              />
              <label className="ml-3 text-lg font-medium text-gray-900">Fire Safety Systems</label>
            </div>

            {errors.products && <p className="text-red-500 text-sm">{errors.products}</p>}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <div>
                <input 
                  name="firstName" 
                  className="w-full bg-gray-100 mt-2 p-3 rounded-lg" 
                  type="text" 
                  placeholder="First Name*" 
                  value={formData.firstName} 
                  onChange={handleChange}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>

              <div>
                <input 
                  name="lastName" 
                  className="w-full bg-gray-100 mt-2 p-3 rounded-lg" 
                  type="text" 
                  placeholder="Last Name*" 
                  value={formData.lastName} 
                  onChange={handleChange}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>

              <div>
                <input 
                  name="email" 
                  className="w-full bg-gray-100 mt-2 p-3 rounded-lg" 
                  type="email" 
                  placeholder="Email*" 
                  value={formData.email} 
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <input 
                  name="phone" 
                  className="w-full bg-gray-100 mt-2 p-3 rounded-lg" 
                  type="text" 
                  placeholder="Phone*" 
                  value={formData.phone} 
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>

            <div className="my-4">
              <textarea 
                name="message" 
                placeholder="Message" 
                className="w-full h-32 bg-gray-100 mt-2 p-3 rounded-lg" 
                value={formData.message} 
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <div className="my-2 w-1/2 lg:w-2/4">
              <button 
                type="submit" 
                className="uppercase text-sm font-bold bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-lg w-full"
              >
                Send Request
              </button>
            </div>
          </div>
        </form>
        {isSubmitted && (
          <p className="text-green-600 mt-4">Your request has been sent successfully!</p>
        )}
        {errors.submit && <p className="text-red-600 mt-4">{errors.submit}</p>}

        {/* Office Info */}
        <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
          <div className="flex flex-col text-white">
            <div className="flex my-4">
              <i className="fas fa-map-marker-alt pt-2 pr-2" />
              <div className="flex flex-col">
                <h2 className="text-2xl">Office Address</h2>
                <p className="text-gray-400">AS Rao Nagar, Hyderabad, Telangana</p>
              </div>
            </div>
            
            <div className="flex my-4">
              <i className="fas fa-phone-alt pt-2 pr-2" />
              <div className="flex flex-col">
                <h2 className="text-2xl">Call Us</h2>
                <p className="text-gray-400">Tel: 9052254949</p>
                <h2 className="text-2xl mt-5">Send an Email</h2>
                <p className="text-gray-400">info.mgthyd@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
