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

      const [showPopupUbahKelas, setShowPopupUbahKelas] = useState(false);
      const [showPopupUbahJurusan, setShowPopupUbahJurusan] = useState(false);
      const [showPopupTambahKelas, setShowPopupTambahKelas] = useState(false);
      const [showPopupTambahJurusan, setShowPopupTambahJurusan] = useState(false);  
    
      const toggleDropdown = (key) => {
        setDropdownState((prevState) => ({
          ...prevState,
          [key]: !prevState[key], // Toggle dropdown sesuai key
        }));
      };

      const handlePopupUbahKelas = () => {
        setShowPopupUbahKelas(true); // Tampilkan pop-up
      };

      const closePopupUbahKelas = () => {
        setShowPopupUbahKelas(false); // Sembunyikan pop-up
      }

      const handlePopupUbahJurusan = () => {
        setShowPopupUbahJurusan(true); // Tampilkan pop-up
      };

      const closePopupUbahJurusan = () => {
        setShowPopupUbahJurusan(false);
      }

      const handlePopupTambahKelas = () => {
        setShowPopupTambahKelas(true);
      };

      const closePopupTambahKelas= () => {
        setShowPopupTambahKelas(false);
      }

      const handlePopupTambahJurusan = () => {
        setShowPopupTambahJurusan(true);
      };

      const closePopupTambahJurusan= () => {
        setShowPopupTambahJurusan(false);
      }
    return(
        <div className="flex items-center justify-center w-full font-Ubuntu" >
            <SidebarAdmin/>
            <div className="h-screen w-full bg-milk-blue">
                <div className="p-9">
                    <div className="flex items-center justify-between w-full px-5 border-b-2 pb-3">
                        <h1 className="text-xl font-medium">Admin</h1>
                        <div className=" flex items-center gap-6">
                            <div><TbLogout size={23} /></div>
                        </div>
                    </div> 
                    <div className="w-full p-5 overflow-y-scroll h-[85vh] bg-milk-blue">
                        <div className="flex gap-1">
                            <div className="w-1/2 flex flex-col py-3 gap-2">
                            {/* erpeel */}
                                <div className=" w-full flex flex-col justify-between bg-white">
                                    <div className="flex justify-between items-center p-4">
                                        <h3 className="font-semibold">Rekayasa Perangkat Lunak</h3>
                                        <div className="flex items-center justify-between w-14">
                                            <button onClick={handlePopupUbahJurusan}><BiSolidEdit size={23}/></button>
                                            <button className={`text-xl transform transition-transform cursor-pointer ${dropdownState.rpl ? "rotate-90" : ""}`}onClick={() => toggleDropdown("rpl")}><IoIosArrowForward/></button>
                                        </div>
                                    </div>
                                    <div className={`${dropdownState.rpl ? "block" : "hidden"}`}>
                                        <div>
                                            <div className="px-4 py-2 border-t flex items-center justify-between">
                                                <span className="flex-grow">XI RPL 1</span>
                                                <div className="space-x-2">
                                                    <button onClick={handlePopupUbahKelas}><BiSolidEdit size={23}/></button>
                                                    <button><RiDeleteBin6Line size={23}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="px-4 py-2 border-t flex items-center justify-between">
                                                <span className="flex-grow">XI RPL 2</span>
                                                <div className="space-x-2">
                                                    <button onClick={handlePopupUbahKelas}><BiSolidEdit size={23}/></button>
                                                    <button><RiDeleteBin6Line size={23}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={handlePopupTambahKelas} className="w-full px-4 py-2 border-t flex items-center justify-end">+</button>
                                    </div>
                                </div>
                            </div>
                            {/* kanan */}
                            <div className="w-1/2 flex flex-col py-3 gap-2">
                                <div className=" w-full flex flex-col justify-between bg-white">
                                    <div className="flex justify-between items-center p-4">
                                        <h3 className="font-semibold" onClick={() => toggleDropdown("ei")}>Elektronika Industri</h3>
                                        <div className="flex items-center justify-between w-14">
                                            <button onClick={handlePopupUbahJurusan}><BiSolidEdit size={23}/></button>
                                            <span className={`text-xl transform transition-transform cursor-pointer ${dropdownState.ei ? "rotate-90" : ""}`} onClick={() => toggleDropdown("ei")}><IoIosArrowForward/></span>
                                        </div>
                                    </div>
                                    <div className={`${dropdownState.ei ? "block" : "hidden"}`}>
                                        <div>
                                            <div className="px-4 py-2 border-t flex items-center justify-between">
                                                <span className="flex-grow">XI EI 1</span>
                                                <div className="space-x-2">
                                                    <button onClick={handlePopupUbahKelas}><BiSolidEdit size={23}/></button>
                                                    <button><RiDeleteBin6Line size={23}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="px-4 py-2 border-t flex items-center justify-between">
                                                <span className="flex-grow">XI EI 2</span>
                                                <div className="space-x-2">
                                                    <button onClick={handlePopupUbahKelas}><BiSolidEdit size={23}/></button>
                                                    <button><RiDeleteBin6Line size={23}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={handlePopupTambahKelas} className="w-full px-4 py-2 border-t flex items-center justify-end">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handlePopupTambahJurusan} className="fixed bottom-10 right-36 px-5 py-2 text-5xl bg-strong-blue rounded-full text-white">+</button> 
                {showPopupUbahKelas && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white w-1/3 text-center flex flex-col justify-between h-[35vh]">
                            <h1 className="py-3 w-full bg-strong-blue text-white font-semibold">Ubah Kelas</h1>
                            <form className="w-full h-[20vh] flex flex-col items-center justify-between">
                                <div className="w-[80%]">
                                    <input type="text" name="" id="" placeholder="Nama kelas" className=" border-2 border-font-gray bg-gray rounded-sm w-full py-1 pl-2 placeholder:pl-2" />
                                </div>
                                <div className="w-[95%] flex items-center justify-between gap-5 pb-3">
                                    <button type="button" className="py-1 w-1/2 bg-none border-2 border-strong-blue rounded-md" onClick={closePopupUbahKelas}>Kembali</button>
                                    <button type="submit" className="py-1 w-1/2 bg-none border-2 border-light-green rounded-md">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {showPopupUbahJurusan && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white w-1/3 text-center flex flex-col justify-between h-[35vh]">
                            <div className="py-3 w-full bg-strong-blue text-white font-semibold">Ubah Jurusan</div>
                            <form className="w-full h-[20vh] flex flex-col items-center justify-between">
                                <div className="w-[80%]">
                                    <input type="text" name="" id="" placeholder="Nama jurusan" className=" border-2 border-font-gray bg-gray rounded-sm w-full py-1 pl-2 placeholder:pl-2" />
                                </div>
                                <div className="w-[95%] flex items-center justify-between gap-5 pb-3">
                                    <button type="button" className="py-1 w-1/2 bg-none border-2 border-strong-blue rounded-md" onClick={closePopupUbahJurusan}>Kembali</button>
                                    <button type="submit" className="py-1 w-1/2 bg-none border-2 border-light-green rounded-md">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {showPopupTambahKelas && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white w-1/3 text-center flex flex-col justify-between h-[35vh]">
                            <div className="py-3 w-full bg-strong-blue text-white font-semibold">Tambah Kelas</div>
                            <form className="w-full h-[20vh] flex flex-col items-center justify-between">
                                <div className="w-[80%]">
                                    <input type="text" name="" id="" placeholder="Nama kelas" className=" border-2 border-font-gray bg-gray rounded-sm w-full py-1 pl-2 placeholder:pl-2" />
                                </div>
                                <div className="w-[95%] flex items-center justify-between gap-5 pb-3">
                                    <button type="button" className="py-1 w-1/2 bg-none border-2 border-strong-blue rounded-md" onClick={closePopupTambahKelas}>Kembali</button>
                                    <button type="submit" className="py-1 w-1/2 bg-none border-2 border-light-green rounded-md">Tambah</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {showPopupTambahJurusan && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white w-1/3 text-center flex flex-col justify-between h-[35vh]">
                            <div className="py-3 w-full bg-strong-blue text-white font-semibold">Tambah Jurusan</div>
                            <form className="w-full h-[20vh] flex flex-col items-center justify-between">
                                <div className="w-[80%]">
                                    <input type="text" name="" id="" placeholder="Nama kelas" className=" border-2 border-font-gray bg-gray rounded-sm w-full py-1 pl-2 placeholder:pl-2" />
                                </div>
                                <div className="w-[95%] flex items-center justify-between gap-5 pb-3">
                                    <button type="button" className="py-1 w-1/2 bg-none border-2 border-strong-blue rounded-md" onClick={closePopupTambahJurusan}>Kembali</button>
                                    <button type="submit" className="py-1 w-1/2 bg-none border-2 border-light-green rounded-md">Tambah</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
