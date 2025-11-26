const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Left */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">MyStore</h2>
          <p className="text-gray-400 text-sm">
            © 2025 MyStore. All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-8">

          <a
            href="mailto:contact@mystore.com"
            className="hover:text-gray-300"
          >
            Contact Us
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            className="hover:text-green-400 flex items-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
            WhatsApp
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            className="hover:text-blue-400 flex items-center gap-2"
          >
            <i className="fa-brands fa-x-twitter text-xl"></i>
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
