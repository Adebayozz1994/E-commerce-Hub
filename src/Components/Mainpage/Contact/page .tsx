import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Get in Touch</h1>
        <p className="text-gray-600 mb-6">Feel free to reach out via any of the channels below.</p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <span className="text-indigo-500 text-xl">📞</span>
            <span className="text-gray-700 font-medium">08166223968</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-indigo-500 text-xl">📧</span>
            <a href="mailto:ogunladeadebayopeter@gmail.com" className="text-gray-700 font-medium hover:underline">
              ogunladeadebayopeter@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-indigo-500 text-xl">🔗</span>
            <a
              href="https://www.linkedin.com/in/ogunlade-adebayo-2a1786294/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-medium hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-indigo-500 text-xl">📍</span>
            <span className="text-gray-700 font-medium">R08 Katangua Area, Ogbomosho, Oyo State, Nigeria</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
