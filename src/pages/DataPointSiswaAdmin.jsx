import SidebarAdmin from "../components/SidebarAdmin";
import { TbLogout } from "react-icons/tb";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

export default function DataPointSiswaAdmin(){
    const [showPopupUbahPoint, setShowPopupUbahPoint] = useState(false);
    const handlePopupUbahPoint = () => {
        setShowPopupUbahPoint(true); // Tampilkan pop-up
      };

      const closePopupUbahPoint = () => {
        setShowPopupUbahPoint(false); // Sembunyikan pop-up
      }

    const [showPopupTambahSiswa, setShowPopupTambahSiswa] = useState(false);
    const handlePopupTambahSiswa = () => {
        setShowPopupTambahSiswa(true); // Tampilkan pop-up
    };
  
    const closePopupTambahSiswa = () => {
        setShowPopupTambahSiswa(false); // Sembunyikan pop-up
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
                    <div className="w-full flex py-3 gap-2">
                        <div className="flex w-[40%] flex-col justify-between items-end">
                            <div className="w-full">
                                <h1 className="w-full py-3 bg-gray rounded-md rounded-b-none border">Nama:</h1>
                                <h1 className="w-full py-3 bg-gray border">Point Kebaikan:</h1>
                                <h1 className="w-full py-3 bg-gray rounded-md rounded-t-none border">Point Keburukan:</h1>
                                
                            </div>
                            <button onClick={handlePopupTambahSiswa} className="text-5xl mr-7 bg-strong-blue px-5 py-2 rounded-full text-white">+</button>
                        </div>
                        <div className="bg-white w-full h-[81vh] overflow-auto rounded-md">
                            <div className="p-3">
                                <table className="w-full border-b">
                                    <tr>
                                        <td className="text-center font-medium">Data Point</td>
                                        <td className="text-center">Edit</td>
                                    </tr>
                                </table>
                                <table className="w-full">
                                    <tr>
                                        <td className="leading-4 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur quod impedit neque tempore iusto nobis veniam dignissimos aliquid quam unde alias, quibusdam id ipsa iure commodi libero facere sint? <br /><span className="text-slate-500 text-sm">Point : 15</span></td>
                                        <td className="text-center w-20">
                                            <button onClick={handlePopupUbahPoint}><BiSolidEdit size={23}/> </button>
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
                {showPopupUbahPoint && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white w-1/3 text-center flex flex-col justify-between h-[35vh]">
                            <h1 className="py-3 w-full bg-strong-blue text-white font-semibold">Ubah Point</h1>
                            <form className="w-full h-full flex flex-col items-center justify-between">
                                <div className="h-full flex flex-col items-center justify-evenly w-[80%]">
                                    <select type="text" name="" id="" className="w-[80%] border-2 border-font-gray text-black bg-gray rounded-sm py-2 pl-2 placeholder:pl-2">
                                        <option value="" disabled selected hidden className="text-font-gray">Tipe Point</option>
                                        <option value="" className="mt-3">Prestasi</option>
                                        <hr />
                                        <option value="">Pelanggaran</option>
                                    </select>
                                    <input type="text" name="" id="" placeholder="Nama point" className="w-[80%] border-2 border-font-gray bg-gray rounded-sm py-1 pl-2 placeholder:pl-2" />
                                    <input type="number" name="" id="" placeholder="Point" className="border-2 border-font-gray bg-gray rounded-sm w-[80%] py-1 pl-2 placeholder:pl-2" />
                                </div>
                                <div className="w-[95%] flex items-center justify-between gap-5 pb-3">
                                    <button type="button" className="py-1 w-1/2 bg-none border-2 border-strong-blue rounded-md" onClick={closePopupUbahPoint}>Kembali</button>
                                    <button type="submit" className="py-1 w-1/2 bg-none border-2 border-light-green rounded-md">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}  
                {showPopupTambahSiswa && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white w-1/3 text-center flex flex-col justify-between h-[50%]">
                            <h1 className="py-3 w-full bg-strong-blue text-white font-semibold">Tambah Siswa</h1>
                            <form className="w-full h-full flex flex-col items-center justify-between">
                                <div className="h-full flex flex-col items-center justify-evenly w-[80%]">
                                    <select type="text" name="" id="" className="w-[80%] border-2 border-font-gray text-black bg-gray rounded-sm py-2 pl-2 placeholder:pl-2">
                                        <option value="" disabled selected className="text-font-gray">Jurusan</option>
                                        <option value="" className="mt-3">Rekayasa Perangka Lunak</option>
                                        <hr />
                                        <option value="">Teknik Komputer dan Jaringan</option>
                                    </select>
                                    <select type="text" name="" id="" className="w-[80%] border-2 border-font-gray text-black bg-gray rounded-sm py-2 pl-2 placeholder:pl-2">
                                        <option value="" disabled selected className="text-font-gray">Kelas</option>
                                        <option value="" className="mt-3">XII RPL 2</option>
                                        <hr />
                                        <option value="">XII TKJ</option>
                                    </select>
                                    <input type="text" name="" id="" placeholder="Nama" className="w-[80%] border-2 border-font-gray bg-gray rounded-sm py-1 pl-2 placeholder:pl-2" />
                                    <input type="number" name="" id="" placeholder="NISN" className="border-2 border-font-gray bg-gray rounded-sm w-[80%] py-1 pl-2 placeholder:pl-2" />
                                </div>
                                <div className="w-[95%] flex items-center justify-between gap-5 pb-3">
                                    <button type="button" className="py-1 w-1/2 bg-none border-2 border-strong-blue rounded-md" onClick={closePopupTambahSiswa}>Kembali</button>
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