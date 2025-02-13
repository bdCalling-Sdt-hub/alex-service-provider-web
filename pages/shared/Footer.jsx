export default function Footer() {
  return (
    <footer className="bg-[#23313F] text-white py-8 px-6 text-center">
      {/* Logo */}
      <h2 className="text-2xl font-bold">
        <span className="text-[#00BFB3]">i</span>Badi
      </h2>

      {/* Navigation Links */}
      <nav className="mt-4">
        <ul className="flex flex-wrap justify-center gap-6 text-[#FFFFFF] text-sm md:text-base">
          <li>
            <a href="#" className="hover:text-white transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Favourites
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Inbox
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Profile
            </a>
          </li>
        </ul>
      </nav>

      {/* Divider Line */}
      <hr className="border-gray-500 my-6 mx-auto w-3/4" />

      {/* Copyright */}
      <p className="text-gray-400 text-sm">Copyright iBadi</p>
    </footer>
  );
}

