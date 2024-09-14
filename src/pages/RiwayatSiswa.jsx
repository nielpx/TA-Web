import Sidebar from "../components/Sidebar"
import { FaRegBell } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
//☆*: .｡. o(≧▽≦)o .｡.:*☆
//
const RiwayatSiswa = () =>{
    return(
        <div className="flex items-center justify-center w-full h-screen font-Ubuntu" >
            <Sidebar/>
            <div className="h-screen w-full bg-milk-blue">
                <div className="p-9">
                    <div className="flex items-center justify-between w-full px-5 border-b-2 pb-3">
                        <h1 className="text-xl font-medium">Muhammad Zidane Maulana</h1>
                        <div className=" flex items-center gap-6">
                            <FaRegBell size={23} />
                            <TbLogout size={23} />
                        </div>
                    </div>
                    <div className=" overflow-auto h-[600px]">
                        <div className="w-full h-screen bg-white"></div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default RiwayatSiswa