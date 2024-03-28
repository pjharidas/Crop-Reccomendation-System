
const Footer = () => {
    return (
      <footer className="bg-green-900 py-4">
        <div className="container mx-auto text-white text-center">
          <p className="text-sm">
            Crop Recommendation &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    );
  };
  
export default Footer;