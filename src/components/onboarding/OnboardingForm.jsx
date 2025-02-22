import React from "react";
import {
  Linkedin,
  Facebook,
  Twitter,
  Github,
  Globe,
  Link as LinkIcon,
  MessageCircle,
} from "lucide-react";

export const OnboardingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Complete Your Profile
          </h2>
          <p className="text-gray-600">
            Add your social media links to connect with others
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {[
              { icon: <Linkedin />, placeholder: "LinkedIn Profile" },
              { icon: <Facebook />, placeholder: "Facebook Profile" },
              { icon: <Twitter />, placeholder: "Twitter Profile" },
              { icon: <MessageCircle />, placeholder: "Threads Profile" },
              { icon: <Github />, placeholder: "GitHub Profile" },
              { icon: <Globe />, placeholder: "Portfolio Website" },
              { icon: <LinkIcon />, placeholder: "Additional Link" },
            ].map(({ icon, placeholder }, index) => (
              <div key={index} className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5">
                  {icon}
                </div>
                <input
                  type="url"
                  placeholder={placeholder}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};
