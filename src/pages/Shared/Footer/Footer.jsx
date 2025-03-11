const Footer = () => {
  return (
    <div className="bg-base-100 shadow-sm mt-8">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          © 2025 JobBoard. All rights reserved.
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
