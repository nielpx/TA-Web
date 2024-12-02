import SidebarAdmin from "../components/SidebarAdmin";
import { TbLogout } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DataGuruAdmin(){

    const [showPopupUbahGuru, setShowPopupUbahGuru] = useState(false);
    const handlePopupUbahGuru = () => {
        setShowPopupUbahGuru(true); // Tampilkan pop-up
      };

      const closePopupUbahGuru = () => {
        setShowPopupUbahGuru(false); // Sembunyikan pop-up
      }

    const [showPopupTambahGuru, setShowPopupTambahGuru] = useState(false);
    const handlePopupTambahGuru = () => {
        setShowPopupTambahGuru(true); // Tampilkan pop-up
      };

      const closePopupTambahGuru = () => {
        setShowPopupTambahGuru(false); // Sembunyikan pop-up
      }

    return(
        <div className="flex items-center justify-center w-full font-Ubuntu" >
            <SidebarAdmin/>
            <div className="h-screen w-full bg-milk-blue">
                <div className="p-9">
                    <div className="flex items-center justify-between w-full px-5 border-b-2 pb-3">
                        <h1 className="text-xl font-medium">Admin</h1>
                        <div className=" flex items-center gap-6">                            
                            <Link to="/loginsiswa"><TbLogout size={23} /></Link>
                        </div>
                    </div>
                    <div className="w-full flex py-3 gap-2">
                        <div className="flex flex-col justify-between items-end">
                            <table>
                                <tr>
                                    <td>
                                        <div className="flex items-center w-[320px] justify-between bg-gray rounded-md border mt-2">
                                            <input type="text" placeholder="Cari" className="w-full rounded-md bg-gray pl-1 py-3 placeholder:text-slate-400"/>
                                            <Link to="#" className=" py-3 h-auto cursor-pointer border-none flex items-center justify-center">
                                                <button>
                                                    <IoIosSearch size={23}/>
                                                </button>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <button onClick={handlePopupTambahGuru} className="text-5xl mr-7 bg-strong-blue px-5 py-2 rounded-full text-white">+</button>
                        </div>
                        <div className="bg-white w-full h-[81vh] overflow-auto rounded-md">
                            <div className="p-3">
                                <table className="w-full border-b">
                                    <tr>
                                        <td className="text-center font-medium">Data Guru</td>
                                        <td className="text-center">Edit</td>
                                    </tr>
                                </table>
                                <table className="w-full">
                                    <tr>
                                        <td className="leading-4 py-2">James McArthur<br /><span className="text-slate-500 text-sm">Kode Guru : 153</span></td>
                                        <td className="text-center w-20">
                                            <button onClick={handlePopupUbahGuru}><BiSolidEdit size={23}/> </button>
                                        </td>
                                        <td className="text-center w-32">
                                            <button><RiDeleteBin6Line size={23}/></button>  
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {showPopupUbahGuru && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white w-1/3 text-center flex flex-col justify-between h-[50%]">
                            <h1 className="py-3 w-full bg-strong-blue text-white font-semibold">Ubah Guru</h1>
                            <form className="w-full h-full flex flex-col items-center justify-between">
                                <div className="h-full flex flex-col items-center justify-evenly w-[80%]">
                                    <select type="text" name="" id="" className="w-[80%] border-2 border-font-gray text-black bg-gray rounded-sm py-2 pl-2 placeholder:pl-2">
                                        <option value="" disabled selected className="text-font-gray">Role</option>
                                        <option value="" className="mt-3">Admin</option>
                                        <hr />
                                        <option value="">Headteacher</option>
                                    </select>
                                    <input type="number" name="" id="" placeholder="Kode Guru" className="w-[80%] border-2 border-font-gray text-black bg-gray rounded-sm py-2 pl-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:pl-2"/>
                                    <input type="text" name="" id="" placeholder="Nama" className="w-[80%] border-2 border-font-gray bg-gray rounded-sm py-1 pl-2 placeholder:pl-2" />
                                    <input type="password" name="" id="" placeholder="Password" className="border-2 border-font-gray bg-gray rounded-sm w-[80%] py-1 pl-2 placeholder:pl-2" />
                                </div>
                                <div className="w-[95%] flex items-center justify-between gap-5 pb-3">
                                    <button type="button" className="py-1 w-1/2 bg-none border-2 border-strong-blue rounded-md" onClick={closePopupUbahGuru}>Kembali</button>
                                    <button type="submit" className="py-1 w-1/2 bg-none border-2 border-light-green rounded-md">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}  
                {showPopupTambahGuru && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white w-1/3 text-center flex flex-col justify-between h-[50%]">
                            <h1 className="py-3 w-full bg-strong-blue text-white font-semibold">Tambah Guru</h1>
                            <form className="w-full h-full flex flex-col items-center justify-between">
                                <div className="h-full flex flex-col items-center justify-evenly w-[80%]">
                                    <select type="text" name="" id="" className="w-[80%] border-2 border-font-gray text-black bg-gray rounded-sm py-2 pl-2 placeholder:pl-2">
                                        <option value="" disabled selected className="text-font-gray">Role</option>
                                        <option value="" className="mt-3">Admin</option>
                                        <hr />
                                        <option value="">Headteacher</option>
                                    </select>
                                    <input type="number" name="" id="" placeholder="Kode Guru" className="w-[80%] border-2 border-font-gray text-black bg-gray rounded-sm py-2 pl-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:pl-2"/>
                                    <input type="text" name="" id="" placeholder="Nama" className="w-[80%] border-2 border-font-gray bg-gray rounded-sm py-1 pl-2 placeholder:pl-2" />
                                    <input type="password" name="" id="" placeholder="Password" className="border-2 border-font-gray bg-gray rounded-sm w-[80%] py-1 pl-2 placeholder:pl-2" />
                                </div>
                                <div className="w-[95%] flex items-center justify-between gap-5 pb-3">
                                    <button type="button" className="py-1 w-1/2 bg-none border-2 border-strong-blue rounded-md" onClick={closePopupTambahGuru}>Kembali</button>
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