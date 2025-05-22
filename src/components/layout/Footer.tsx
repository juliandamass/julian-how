const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="text-center py-4 lg:py-8">
      <span className="text-gray-400">
        Copyright {year}. Built Julian Damas Suryawan
      </span>
    </footer>
  );
};

export default Footer;
