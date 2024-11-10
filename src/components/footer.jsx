import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Moosa Al Noor</h4>
            <p>Your trusted partner for all technical services.</p>
            <p className="mt-2">Contact us: info@moosalnoor.com</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Our Services</h4>
            <ul className="list-none space-y-1">
              <li>Floor Ceiling Installation</li>
              <li>Plumbing Services</li>
              <li>Air Conditioning Solutions</li>
              <li>Painting Contracting</li>
              <li>Wall Tiling Works</li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-xl hover:text-gray-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl hover:text-gray-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-gray-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Moosa Al Noor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
