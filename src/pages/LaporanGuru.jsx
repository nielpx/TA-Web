
import { TbLogout } from "react-icons/tb";
import SidebarGuru from "../components/SidebarGuru";
import { IoCameraSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
//☆*: .｡. o(≧▽≦)o .｡.:*☆
//
const LaporanGuru = () =>{
    function previewImage(event) {
        const file = event.target.files[0];
        const imagePreview = document.getElementById("imagePreview");
        const placeholderText = document.getElementById("placeholderText");
    
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            imagePreview.src = e.target.result; // Set the image preview source
            imagePreview.classList.remove("hidden"); // Show the preview
            placeholderText.classList.add("hidden"); // Hide the placeholder text
          };
          reader.readAsDataURL(file); // Read the file
        }
      }
    return(
        <div className="flex items-center justify-center w-full h-screen font-Ubuntu" >
            <SidebarGuru/>
            <div className="h-screen w-full bg-milk-blue">
                <div className="p-9">
                    <div className="flex items-center justify-between w-full px-5 border-b-2 pb-3">
                        <h1 className="text-xl font-medium">Tesese</h1>
                        <div className=" flex items-center gap-6">
                            <Link to="/loginsiswa"><TbLogout size={23} /></Link>
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
                                        <div className="relative w-[320px] h-[200px] bg-gray rounded-md border flex items-center justify-center">
                                        <img 
                                            id="imagePreview" 
                                            className="hidden w-full h-full object-cover" 
                                            alt="Preview" 
                                        />
                                        <div id="placeholderText" className="flex flex-col h-auto w-full items-center justify-center">
                                            <IoCameraSharp size={40}/>
                                            <span className="text-gray-500">
                                                Drop your image here or click to upload
                                            </span>
                                        </div>
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" 
                                            onChange={previewImage}
                                        />
                                        </div>
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