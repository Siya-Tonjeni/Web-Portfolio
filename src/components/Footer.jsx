import React, { useState } from 'react'; 

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      alert('Thank you for your message!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <footer className="bg-gray-100 py-12 px-20 flex flex-col md:flex-row md:justify-between gap-8">
      <div className="flex flex-col items-start md:w-1/2 lg:w-1/3">
        <h2 className="text-4xl font-bold">Let’s work together</h2>
        <p className="mt-4 text-gray-600">
          This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com.
        </p>
        
        <div className="flex gap-4 mt-6">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <i className="fab fa-discord text-xl"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <i className="fab fa-dribbble text-xl"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <i className="fab fa-behance text-xl"></i>
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <textarea
            name="message"
            placeholder="Type your message here"
            value={formData.message}
            onChange={handleChange}
            className="p-3 bg-gray-200 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-black text-white py-3 rounded mt-4 hover:bg-gray-800 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
