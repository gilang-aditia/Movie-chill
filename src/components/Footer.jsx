import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 text-gray-500">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Genre</h2>
            <ul className="mt-4">
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  CHILL
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  Aks
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  Drama
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  Komedi
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  Sains & Alam
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Bantuan</h2>
            <ul className="mt-4">
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  FAQ
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  Kontak Kami
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  Privasi
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Lainnya</h2>
            <ul className="mt-4">
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  Anime
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  Kejahatan
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  Perang
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  Britania
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  KDrama
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-white">© 2023 Civil All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
