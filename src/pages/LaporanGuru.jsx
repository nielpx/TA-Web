
import { FaRegBell } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import SidebarGuru from "../components/SidebarGuru";
//☆*: .｡. o(≧▽≦)o .｡.:*☆
//
const LaporanGuru = () =>{
    return(
        <div className="flex items-center justify-center w-full h-screen font-Ubuntu" >
            <SidebarGuru/>
            <div className="h-screen w-full bg-milk-blue">
                <div className="p-9">
                    <div className="flex items-center justify-between w-full px-5 border-b-2 pb-3">
                        <h1 className="text-xl font-medium">Rr</h1>
                        <div className=" flex items-center gap-6">
                            <FaRegBell size={23} />
                            <TbLogout size={23} />
                        </div>
                    </div>
                    <div className="flex align-center justify-center w-full mt-[1%]">
                        <div className="flex items-center  flex-col w-[fit-content]">
                            <table className="border-spacing-6 border-separate">
                                <tr>
                                    <td>
                                        <select name="" id="" className="w-[320px] py-3 bg-gray rounded-md border">
                                            <option value="" className="text-font-gray">Tipe Point</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name="" id="" className="w-[320px] py-3 bg-gray rounded-md border">
                                            <option value="" className="text-font-gray">Jurusan</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="number" name="" id="" placeholder="Point" className="w-[320px] py-3 bg-gray rounded-md border placeholder:text-black pl-1"/>
                                    </td>
                                    <td>
                                        <select name="" id="" className="w-[320px] py-3 bg-gray rounded-md border">
                                            <option value="" className="text-font-gray">Nama</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <select name="" id="" className="w-[320px] py-3 bg-gray rounded-md border">
                                            <option value="" className="text-font-gray">Kelas</option>
                                        </select>
                                    </td>
                                    <td rowSpan={3}>
                                        <input type="file" className="w-[320px] py-3 bg-gray rounded-md border h-[200px]" accept="image/*"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" name="" id="" placeholder="Deskripsi" className="w-[320px] py-3 bg-gray rounded-md border pl-1 placeholder:text-black" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <select name="" id="" className="w-[320px] py-3 bg-gray rounded-md border">
                                            <option value="" className="text-font-gray">Nama Point</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                            <button className="bg-strong-blue text-white w-full py-2 rounded-md">Kirim</button>
                        </div>
                    </div>
                </div>   
            </div>
            <p></p>
        </div>
    )
}

export default LaporanGuru