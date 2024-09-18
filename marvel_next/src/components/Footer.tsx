
const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 relative bottom-0 w-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap mb-4 mt-3">
          <div className="flex justify-center w-full sm:w-1/2 md:w-1/4 mb-4">
            <svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100" height="100">
              <rect fill="#EC1D24" width="100%" height="100%"></rect>
              <path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path>
            </svg>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 text-center mb-4">
            <h5 className="text-lg font-semibold">About Marvel</h5>
            <ul className="space-y-1">
              <li>
                <a href="#!" className="text-white hover:underline">Help/FAQs</a>
              </li>
              <li>
                <a href="#!" className="text-white hover:underline">Careers</a>
              </li>
              <li>
                <a href="#!" className="text-white hover:underline">Internships</a>
              </li>
              <li>
                <a href="#!" className="text-white hover:underline">Advertising</a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 text-center">
            <h5 className="text-lg font-semibold">Follow Marvel</h5>
            <nav className="flex flex-col space-y-1">
              <a href="#!" className="text-white hover:underline">Facebook</a>
              <a href="#!" className="text-white hover:underline">Twitter</a>
              <a href="#!" className="text-white hover:underline">Instagram</a>
              <a href="#!" className="text-white hover:underline">YouTube</a>
            </nav>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 text-center">
            <h5 className="text-lg font-semibold">Marvel Insider</h5>
            <p>Get Rewarded for Being a Marvel Fan</p>
            <ul className="space-y-1">
              <li>
                <a href="#!" className="text-white hover:underline">Redeem Digital Comics</a>
              </li>
              <li>
                <a href="#!" className="text-white hover:underline">Marvel Insider Logo</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-3 text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Marvel Entertainment, LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
