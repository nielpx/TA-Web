import { Link, useLocation } from "react-router-dom";
import Logo from "../pictures/40logo+baru+smkn+2+stemdasi+copy+copy.png";
import { FaHome, FaBarcode, FaFile, FaHistory } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation(); // Dapatkan rute saat ini

  // Fungsi untuk menentukan apakah path sedang aktif
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen flex-col bg-splash bg-no-repeat bg-cover items-center">
      <hr className="border-4 border-white mt-10 w-full" />
      <div className="flex flex-col gap-3 mt-6 text-lg text-white items-start w-60">
        <div className={`hover:bg-hover-blue w-full ${isActive("/dashboard") ? "bg-hover-blue" : ""}`}>
          <Link to="/dashboard" className="flex items-center pl-5 py-1 w-full">
            <FaHome className="mr-2" />
            <h1>Beranda</h1>
          </Link>
        </div>
        <div className={`hover:bg-hover-blue w-full ${isActive("/scan") ? "bg-hover-blue" : ""}`}>
          <Link to="/scan" className="flex items-center pl-5 py-1 w-full">
            <FaBarcode className="mr-2" />
            <h1>Buat QR Poin</h1>
          </Link>
        </div>
        <div className={`hover:bg-hover-blue w-full ${isActive("/laporansiswa") ? "bg-hover-blue" : ""}`}>
          <Link to="/laporansiswa" className="flex items-center pl-5 py-1 w-full">
            <FaFile className="mr-2" />
            <h1>Laporan</h1>
          </Link>
        </div>
        <div className={`hover:bg-hover-blue w-full ${isActive("/riwayatsiswa") ? "bg-hover-blue" : ""}`}>
          <Link to="/riwayat" className="flex items-center pl-5 py-1 w-full">
            <FaHistory className="mr-2" />
            <h1>Riwayat</h1>
          </Link>
        </div>
      </div>
      <img src={Logo} alt="logo" className="w-20 mt-auto mb-7" />
    </div>
  );
};

export default Sidebar;
