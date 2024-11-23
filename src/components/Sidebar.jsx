
import { Link } from "react-router-dom";
import Logo from "../pictures/40logo+baru+smkn+2+stemdasi+copy+copy.png";
import { FaHome } from 'react-icons/fa';
import { FaBarcode } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import DashboardSiswa from "../pages/DashboardSiswa";

const Sidebar = () =>{
    return(
        <div className="flex h-screen flex-col bg-splash bg-no-repeat bg-cover items-center">
          <hr className=" border-4 border-white mt-10 w-full" />
          <div className=" flex flex-col gap-3 mt-6 text-lg text-white items-start">
            <div className=" hover:bg-hover-blue">
            <Link to="/dashboard" className="flex items-center px-14 w-full">
                <FaHome className="mr-2" />
                    Dashboard
                </Link>
            </div>
            <div className=" hover:bg-hover-blue">
                <Link to="/scan" className="flex items-center px-14">
                    <FaBarcode className="mr-2" />
                        Scan
                </Link>
            </div>
            <div className="hover:bg-hover-blue w-full">
              <Link to="/laporansiswa" className="flex items-center px-14 w-full">
                <FaFile className="mr-2" />
                    Laporan
              </Link>
            </div>
            <div className="hover:bg-hover-blue w-full">
              <Link to="/riwayatsiswa" className="flex items-center px-14 w-full">
                <FaHistory className="mr-2" />
                    Riwayat
              </Link>
            </div>
          </div>
          <img src={Logo} alt="logo" className="w-20 mt-auto mb-7" />
        </div>
    )
}
//tes
export default Sidebar