import SidebarAdmin from "../components/SidebarAdmin";
import { FaRegBell } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";


export default function DataJurusanDanKelasAdmin(){
    const [dropdownState, setDropdownState] = useState({
        rpl: false, // Untuk dropdown RPL
        tkj: false, // Untuk dropdown TKJ
        mt: false,
        dkv: false,
        ei: false,
        bc: false,
        an:false
      });
    
      const toggleDropdown = (key) => {
        setDropdownState((prevState) => ({
          ...prevState,
          [key]: !prevState[key], // Toggle dropdown sesuai key
        }));
      };
    return(
        <div className="flex items-center justify-center w-full font-Ubuntu" >
            <SidebarAdmin/>
            <div className="h-screen w-full bg-milk-blue">
                <div className="p-9">
                    <div className="flex items-center justify-between w-full px-5 border-b-2 pb-3">
                        <h1 className="text-xl font-medium">Admin</h1>
                        <div className=" flex items-center gap-6">
                            <FaRegBell size={23} />
                            <TbLogout size={23} />
                        </div>
                    </div> 
                    <div className="flex gap-1">
                        <div className="w-1/2 flex flex-col py-3 gap-2">
                        {/* erpeel */}
                            <div className=" w-full flex flex-col justify-between bg-white">
                                <div className="flex justify-between items-center cursor-pointer p-4" onClick={() => toggleDropdown("rpl")}>
                                    <h3 className="font-semibold">Rekayasa Perangkat Lunak</h3>
                                    <span className={`text-xl transform transition-transform ${dropdownState.rpl ? "rotate-90" : ""}`}><IoIosArrowForward/></span>
                                </div>
                                <div className={`${dropdownState.rpl ? "block" : "hidden"}`}>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI RPL 1</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI RPL 2</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full px-4 py-2 border-t flex items-center justify-end">+</button>
                                </div>
                            </div>
                            {/* tkj */}
                            <div className=" w-full flex flex-col justify-between bg-white">
                                <div className="flex justify-between items-center cursor-pointer p-4" onClick={() => toggleDropdown("tkj")}>
                                    <h3 className="font-semibold">Teknik Komputer Jaringan</h3>
                                    <span className={`text-xl transform transition-transform ${dropdownState.tkj ? "rotate-90" : ""}`}><IoIosArrowForward/></span>
                                </div>
                                <div className={`${dropdownState.tkj ? "block" : "hidden"}`}>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI TKJ 1</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI TKJ 2</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full px-4 py-2 border-t flex items-center justify-end">+</button>
                                </div>
                            </div>
                            {/* dekave */}
                            <div className=" w-full flex flex-col justify-between bg-white">
                                <div className="flex justify-between items-center cursor-pointer p-4" onClick={() => toggleDropdown("dkv")}>
                                    <h3 className="font-semibold">Desain Komunikasi Visual</h3>
                                    <span className={`text-xl transform transition-transform ${dropdownState.dkv ? "rotate-90" : ""}`}><IoIosArrowForward/></span>
                                </div>
                                <div className={`${dropdownState.dkv ? "block" : "hidden"}`}>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI DKV 1</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI DKV 2</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full px-4 py-2 border-t flex items-center justify-end">+</button>
                                </div>
                            </div>
                            <div className=" w-full flex flex-col justify-between bg-white">
                                <div className="flex justify-between items-center cursor-pointer p-4" onClick={() => toggleDropdown("mt")}>
                                    <h3 className="font-semibold">Mekatronika</h3>
                                    <span className={`text-xl transform transition-transform ${dropdownState.mt ? "rotate-90" : ""}`}><IoIosArrowForward/></span>
                                </div>
                                <div className={`${dropdownState.mt ? "block" : "hidden"}`}>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI MT 1</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI MT 2</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full px-4 py-2 border-t flex items-center justify-end">+</button>
                                </div>
                            </div>
                        </div>
                        {/* kanan */}
                        <div className="w-1/2 flex flex-col py-3 gap-2">
                            <div className=" w-full flex flex-col justify-between bg-white">
                                <div className="flex justify-between items-center cursor-pointer p-4" onClick={() => toggleDropdown("ei")}>
                                    <h3 className="font-semibold">Elektronika Industri</h3>
                                    <span className={`text-xl transform transition-transform ${dropdownState.ei ? "rotate-90" : ""}`}><IoIosArrowForward/></span>
                                </div>
                                <div className={`${dropdownState.ei ? "block" : "hidden"}`}>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI EI 1</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI EI 2</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full px-4 py-2 border-t flex items-center justify-end">+</button>
                                </div>
                            </div>
                            {/* brodkesting */}
                            <div className=" w-full flex flex-col justify-between bg-white">
                                <div className="flex justify-between items-center cursor-pointer p-4" onClick={() => toggleDropdown("bc")}>
                                    <h3 className="font-semibold">Brodcasting</h3>
                                    <span className={`text-xl transform transition-transform ${dropdownState.bc ? "rotate-90" : ""}`}><IoIosArrowForward/></span>
                                </div>
                                <div className={`${dropdownState.bc ? "block" : "hidden"}`}>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI BC 1</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI BC 2</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full px-4 py-2 border-t flex items-center justify-end">+</button>
                                </div>
                            </div>
                            {/* animasi */}
                            <div className=" w-full flex flex-col justify-between bg-white">
                                <div className="flex justify-between items-center cursor-pointer p-4" onClick={() => toggleDropdown("an")}>
                                    <h3 className="font-semibold">Animasi</h3>
                                    <span className={`text-xl transform transition-transform ${dropdownState.an ? "rotate-90" : ""}`}><IoIosArrowForward/></span>
                                </div>
                                <div className={`${dropdownState.an ? "block" : "hidden"}`}>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI AN 1</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="px-4 py-2 border-t flex items-center justify-between">
                                            <span className="flex-grow">XI AN 2</span>
                                            <div className="space-x-2">
                                                <button><BiSolidEdit size={23}/></button>
                                                <button><RiDeleteBin6Line size={23}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full px-4 py-2 border-t flex items-center justify-end">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}
