import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full opacity-80 py-2 text-xs">
      <div className="max-w-screen mx-auto px-6 flex flex-col md:grid md:grid-cols-3 items-center space-y-6 md:space-y-0">
        
        <div className="text-center md:text-left">
          <p>© {new Date().getFullYear()} Yarnsana. All rights reserved.</p>
        </div>
        
        <nav className="flex items-center justify-center space-x-6 ">
          <Link to="/terms" className="hover:opacity-70 transition-opacity">Terms</Link>
          <Link to="/privacy" className="hover:opacity-70 transition-opacity">Privacy</Link>
          <a href="https://buymeacoffee.com/samcab" target="_blank" rel="noopener noreferrer">Donate</a>
        </nav>

        <div className="text-center md:text-right">
          <p>
            Made by <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 hover:italic transition-all">Sam Cabrera</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
