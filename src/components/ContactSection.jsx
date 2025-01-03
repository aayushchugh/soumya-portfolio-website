"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import { toast } from "react-toastify";
import config from "@/lib/config";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        const { message } = await response.json();
        toast.error(`Error: ${message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="py-16 bg-white dark:bg-[#2C2D33] transition-colors duration-300 md:px-10"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-orange-500 text-4xl font-semibold">
            {config.contact.title}
          </h2>
          <h3 className="text-xl font-bold mt-2 text-gray-400">
            {config.contact.description}
          </h3>
          <p className="text-gray-500 text-lg mt-4 dark:text-slate-50">
            {config.contact.about}
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info (Right Side Section) */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-800 rounded-full transition-colors duration-300">
                <FaGithub
                  size={25}
                  className="dark:fill-white hover:text-gray-700 transition-colors"
                />
              </div>
              <div>
                <a
                  href={config.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-xl font-bold dark:text-slate-50">Github</p>
                  <p className="text-gray-500 dark:text-slate-300">
                    {config.socials.github}
                  </p>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-800 rounded-full transition-colors duration-300">
                <IoMdMail
                  size={25}
                  className="dark:fill-white hover:text-red-500 transition-colors"
                />
              </div>
              <div>
                <a href={`mailto:${config.socials.mail}`}>
                  <p className="text-xl font-bold dark:text-slate-50">Email</p>
                  <p className="text-gray-500 dark:text-slate-300">
                    {config.socials.mail}
                  </p>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-800 rounded-full transition-colors duration-300">
                <FaLinkedinIn
                  size={25}
                  className="dark:fill-white hover:text-blue-500 transition-colors"
                />
              </div>
              <div>
                <a
                  href={config.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-xl font-bold dark:text-slate-50">
                    LinkedIn
                  </p>
                  <p className="text-gray-500 dark:text-slate-300">
                    {config.socials.linkedin}
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Left Side Section) */}
          <div className="bg-gray-800 dark:bg-white rounded-lg p-8 shadow-md transition-colors duration-300">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="border border-gray-300 dark:border-gray-600 bg-gray-900 dark:bg-gray-50 rounded-lg px-4 py-3 text-gray-50 dark:text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300 placeholder-gray-400 dark:placeholder-gray-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="border border-gray-300 dark:border-gray-600 bg-gray-900 dark:bg-gray-50 rounded-lg px-4 py-3 text-gray-50 dark:text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300 placeholder-gray-400 dark:placeholder-gray-500"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="border border-gray-300 dark:border-gray-600 bg-gray-900 dark:bg-gray-50 rounded-lg px-4 py-3 text-gray-50 dark:text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300 placeholder-gray-400 dark:placeholder-gray-500"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="border border-gray-300 dark:border-gray-600 bg-gray-900 dark:bg-gray-50 rounded-lg px-4 py-3 text-gray-50 dark:text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300 placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message here"
                className="border border-gray-300 dark:border-gray-600 bg-gray-900 dark:bg-gray-50 rounded-lg px-4 py-3 text-gray-50 dark:text-gray-700 w-full mt-6 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300 placeholder-gray-400 dark:placeholder-gray-500"
                required
              ></textarea>
              <Button sx="w-full duration-300 mt-4" disabled={isLoading}>
                {isLoading ? "Sending..." : "Submit Now"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
