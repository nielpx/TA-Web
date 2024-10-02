
import { Link } from "react-router-dom";
import Logo from "../pictures/40logo+baru+smkn+2+stemdasi+copy+copy.png";
import { FaHome } from 'react-icons/fa';
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdClass } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";

const SidebarAdmin = () =>{
    return(
        <div className="flex h-screen flex-col bg-Splash bg-no-repeat bg-cover items-center">
          <hr className=" border-4 border-white mt-10 w-full" />
          <div className=" flex flex-col gap-3 mt-6 text-lg text-white items-start">
            <div className=" hover:bg-hover-blue w-full py-1">
                <Link to="" className="flex items-center px-14">
                    <FaHome className="mr-2" size={25} />
                        Dashboard
                </Link>
            </div>
            <div className="hover:bg-hover-blue w-full py-1">
                <Link to="" className="flex items-center px-14">
                    <LiaClipboardListSolid className="mr-2" size={25} />
                        Data point
                </Link>
            </div>
            <div className="hover:bg-hover-blue w-full py-1">
              <a href="" className="flex items-center px-14 w-full">
                <MdClass className="mr-2" size={25} />
                    Data Kelas & Jurusan
              </a>
            </div>
            <div className="hover:bg-hover-blue w-full py-1">
              <a href="#" className="flex items-center px-14 w-full">
                <PiStudentFill className="mr-2" size={25}/>
                    Data Siswa
              </a>
            </div>
            <div className="hover:bg-hover-blue w-full py-1">
              <a href="#" className="flex items-center px-14 w-full">
                <FaChalkboardTeacher className="mr-2" />
                    Data Guru
              </a>
            </div>
          </div>
          <img src={Logo} alt="logo" className="w-20 mt-auto mb-7" />
        </div>
    )
}

export default SidebarAdmin