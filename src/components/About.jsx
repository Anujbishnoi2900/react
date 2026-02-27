import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-16">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 rounded-lg p-8 shadow-lg">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Our Store
          </h1>
          <p className="text-gray-600 mb-4">
            Welcome to our e-commerce platform! We aim to bring you the best products with a seamless shopping experience. Our mission is to provide high-quality products at competitive prices while ensuring excellent customer service.
          </p>
          <p className="text-gray-600">
            Whether you’re looking for the latest gadgets, trendy fashion, or everyday essentials, we’ve got you covered. Our team works hard to curate top products that you’ll love.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/500x300.png?text=About+Us"
            alt="About Us"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Our Values Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Products</h3>
            <p className="text-gray-600">
              We carefully select our products to ensure top-notch quality for our customers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600">
              Our logistics ensure your orders reach you quickly and safely.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Customer Support</h3>
            <p className="text-gray-600">
              Our friendly support team is always ready to help you with any queries.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Mission</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          To create an enjoyable, convenient, and trustworthy shopping experience for everyone. We strive to constantly innovate and improve our platform to meet your expectations and bring joy to your shopping journey.
        </p>
      </div>

    </div>
  );
};

export default About;