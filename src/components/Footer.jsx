import React from "react";
import Logo from "../assets/img/Logo-chill.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-b-slate-50">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <img className="w-40" src={Logo} alt="" />
          <p className="text-sm mt-8">&copy;2023 Chill All Rights Reserved.</p>
        </div>
        <div className="w-full sm:w-auto flex flex-wrap justify-between space-y-8 sm:space-y-0 sm:space-x-16">
          <div className="w-1/2 sm:w-auto">
            <h2 className="font-semibold text-white mb-4">Genre</h2>
            <ul>
              <li>Aksi</li>
              <li>Anak-anak</li>
              <li>Anime</li>
              <li>Britania</li>
            </ul>
          </div>
          <div className="w-1/2 sm:w-auto">
            <h2 className="font-semibold text-white mb-4"> </h2>
            <ul>
              <li>Drama</li>
              <li>Fantasi Ilmiah & Fantasi</li>
              <li>Kejahatan</li>
              <li>KDrama</li>
              <li>Komedi</li>
            </ul>
          </div>
          <div className="w-1/2 sm:w-auto">
            <h2 className="font-semibold text-white mb-4"> </h2>
            <ul>
              <li>Perang</li>
              <li>Romantis</li>
              <li>Sains & Alam</li>
              <li>Thriller</li>
              <li>Petualangan</li>
            </ul>
          </div>
          <div className="w-1/2 sm:w-auto">
            <h2 className="font-semibold text-white mb-4"> </h2>
            <ul>
              <li>Thriller</li>
              <li>Petualangan</li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h2 className="font-semibold text-white mb-4">Bantuan</h2>
            <ul>
              <li>FAQ</li>
              <li>Kontak Kami</li>
              <li>Privasi</li>
              <li>Syarat & Ketentuan</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
