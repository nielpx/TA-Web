import SidebarAdmin from "../components/SidebarAdmin";
import { FaRegBell } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";


export default function DataPointAdmin(){
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
                    <div className="w-full flex py-3 gap-2">
                        <div className="flex flex-col justify-between items-end">
                            <table>
                                <tr>
                                    <td>
                                        <select name="" id="" className="w-full py-3 bg-gray rounded-md border">
                                            <option value="" className="text-font-gray">Point Prestasi</option>
                                            <option value="" className="text-font-gray">Point Pelanggaran</option>
                                        </select> 
                                        <td>
                                            <div className="flex items-center w-[320px] justify-between bg-gray rounded-md border">
                                                <input type="text" placeholder="Search" className="w-full py-3 rounded-md bg-gray pl-1 placeholder:text-black"/>
                                                <button className="bg-transparent cursor-pointer border-none">
                                                    <IoIosSearch size={23}/>
                                                </button>
                                            </div>
                                        </td>
                                        
                                    </td>
                                </tr>
                            </table>
                            <button className="text-5xl mr-7 bg-strong-blue px-5 py-2 rounded-full text-white">+</button>
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
                                            <button><BiSolidEdit size={23}/> </button>
                                        </td>
                                        <td className="text-center w-32">
                                            <button><RiDeleteBin6Line size={23}/></button>  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="leading-4 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur quod impedit neque tempore iusto nobis veniam dignissimos aliquid quam unde alias, quibusdam id ipsa iure commodi libero facere sint? <br /><span className="text-slate-500 text-sm">Point : 15</span></td>
                                        <td className="text-center w-20">
                                            <button><BiSolidEdit size={23}/> </button>
                                        </td>
                                        <td className="text-center w-32">
                                            <button><RiDeleteBin6Line size={23}/></button>  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="leading-4 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur quod impedit neque tempore iusto nobis veniam dignissimos aliquid quam unde alias, quibusdam id ipsa iure commodi libero facere sint? <br /><span className="text-slate-500 text-sm">Point : 15</span></td>
                                        <td className="text-center w-20">
                                            <button><BiSolidEdit size={23}/> </button>
                                        </td>
                                        <td className="text-center w-32">
                                            <button><RiDeleteBin6Line size={23}/></button>  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="leading-4 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur quod impedit neque tempore iusto nobis veniam dignissimos aliquid quam unde alias, quibusdam id ipsa iure commodi libero facere sint? <br /><span className="text-slate-500 text-sm">Point : 15</span></td>
                                        <td className="text-center w-20">
                                            <button><BiSolidEdit size={23}/> </button>
                                        </td>
                                        <td className="text-center w-32">
                                            <button><RiDeleteBin6Line size={23}/></button>  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="leading-4 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur quod impedit neque tempore iusto nobis veniam dignissimos aliquid quam unde alias, quibusdam id ipsa iure commodi libero facere sint? <br /><span className="text-slate-500 text-sm">Point : 15</span></td>
                                        <td className="text-center w-20">
                                            <button><BiSolidEdit size={23}/> </button>
                                        </td>
                                        <td className="text-center w-32">
                                            <button><RiDeleteBin6Line size={23}/></button>  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="leading-4 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur quod impedit neque tempore iusto nobis veniam dignissimos aliquid quam unde alias, quibusdam id ipsa iure commodi libero facere sint? <br /><span className="text-slate-500 text-sm">Point : 15</span></td>
                                        <td className="text-center w-20">
                                            <button><BiSolidEdit size={23}/> </button>
                                        </td>
                                        <td className="text-center w-32">
                                            <button><RiDeleteBin6Line size={23}/></button>  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="leading-4 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur quod impedit neque tempore iusto nobis veniam dignissimos aliquid quam unde alias, quibusdam id ipsa iure commodi libero facere sint? <br /><span className="text-slate-500 text-sm">Point : 15</span></td>
                                        <td className="text-center w-20">
                                            <button><BiSolidEdit size={23}/> </button>
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
            </div>
        </div>
    )
}