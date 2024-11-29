
import { Link } from "react-router-dom";
import Logo from "../pictures/40logo+baru+smkn+2+stemdasi+copy+copy.png";
import { FaHome } from 'react-icons/fa';
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdClass } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";

const SidebarAdmin = () =>{
    return(
        <div className="flex h-screen flex-col bg-no-repeat bg-cover bg-splash items-center">
          <hr className=" border-4 border-white mt-10 w-full" />
          <div className=" flex flex-col gap-3 mt-6 text-lg text-white items-start">
            <div className=" hover:bg-hover-blue w-full py-1">
                <Link to="/dashboardadmin" className="flex items-center px-14">
                    <FaHome className="mr-2" size={25} />
                        Dashboard
                </Link>
            </div>
            <div className="hover:bg-hover-blue w-full py-1">
                <Link to="/datapointadmin" className="flex items-center px-14">
                    <LiaClipboardListSolid className="mr-2" size={25} />
                        Data point
                </Link>
            </div>
            <div className="hover:bg-hover-blue w-full py-1">
              <Link to="/datajurusandankelasadmin" className="flex items-center px-14">
                <MdClass className="mr-2" size={25} />
                    Data Kelas & Jurusan
              </Link>
            </div>
            <div className="hover:bg-hover-blue w-full py-1">
              <Link to="/datasiswaadmin" className="flex items-center px-14 w-full">
                <PiStudentFill className="mr-2" size={25}/>
                    Data Siswa
              </Link>
            </div>
            <div className="hover:bg-hover-blue w-full py-1">
              <Link to="/dataguruadmin" className="flex items-center px-14 w-full">
                <FaChalkboardTeacher className="mr-2" />
                    Data Guru
              </Link>
            </div>
          </div>
          <img src={Logo} alt="logo" className="w-20 mt-auto mb-7" />
        </div>
    )
}

export default SidebarAdmin