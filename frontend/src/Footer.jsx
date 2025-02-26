import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full opacity-80 mt-20 py-4">
      <div className="max-w-screen mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="text-center md:text-left">
          <p className="text-sm">© {new Date().getFullYear()} Yarnsana. All rights reserved.</p>
        </div>
        
        <nav className="flex space-x-6 text-sm">
          <Link to="/" className="hover:opacity-70 transition-opacity">Donate</Link>
          <Link to="/" className="hover:opacity-70 transition-opacity">Feedback</Link>
          <Link to="/" className="hover:opacity-70 transition-opacity">Terms</Link>
          <Link to="/" className="hover:opacity-70 transition-opacity">Privacy</Link>
        </nav>

        <div className="text-center md:text-right">
          <p className="text-sm">
            Made by <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 hover:italic transition-all">Sam Cabrera</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
