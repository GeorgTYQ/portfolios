'use client';

import React, { useState } from 'react';

const Contact = () => {
  const formInitialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };


  const [formData, setFormData] = useState(formInitialValues);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormData({
      ...formData,
      [category]: value,
    });
  };
  
const handleSubmit = async (e) => {
  e.preventDefault();
  setButtonText("Sending...");

  const response = await fetch("/api/send-contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  console.log(response);
  

  const result = await response.json();
  setButtonText("Send");

  if (response.ok) {
    setStatus({ success: true, message: result.message });
    setFormData(formInitialValues);
  } else {
    setStatus({ success: false, message: result.error || "Something went wronassg." });
  }
};


  return (
  <section className="relative contact w-full px-6" id="connect">
    <div className="absolute inset-0 -z-10 flex justify-center items-center">
      <div className="w-[250px] h-[250px] bg-purple-700/40 blur-[150px] rounded-full"></div>
    </div>

    <div className="flex items-center gap-8">
      <div className="w-1/2 rounded-2xl p-8">
        <img src="/concept-of-website-recovery.svg" alt="Contact Us" className="w-full h-auto" />
      </div>

      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.name}
            placeholder="Name"
            onChange={(e) => onFormUpdate('name', e.target.value)}
            className="w-full p-2 border border-purple-200 rounded"
          />
          <input
            type="email"
            value={formData.email}
            placeholder="your@email.com"
            onChange={(e) => onFormUpdate('email', e.target.value)}
            className="w-full p-2 border border-purple-200 rounded"
          />
          <input
            type="tel"
            value={formData.phone}
            placeholder="Mobile Number"
            onChange={(e) => onFormUpdate('phone', e.target.value)}
            className="w-full p-2 border border-purple-200 rounded"
          />
          <textarea
            value={formData.message}
            placeholder="Enquiry"
            onChange={(e) => onFormUpdate('message', e.target.value)}
            className="w-full p-2 border border-purple-200 rounded h-32 resize-none"
          />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-500 text-sm md:text-base"
            >
              <span>{buttonText}</span>
            </button>
            {status.message && (
              <p className={`text-${status.success ? 'green' : 'red'}-500 text-sm`}>
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  </section>

  );
};

export default Contact;
