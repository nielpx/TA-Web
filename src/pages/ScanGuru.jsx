import { useState, useEffect } from "react";
import { TbLogout } from "react-icons/tb";
import BaseURL from "../utils/axios";
import SidebarGuru from "../components/SidebarGuru";
import Barcode from "../pictures/V-Card 2.png"

export default function ScanGuru() {
  const [data, setData] = useState()

  useEffect(() => {
    BaseURL.get("api/Auth/me")
      .then((response) => {
        setData(response.data)
      })
      .catch((e) => {

      })
  }, [])
    
  return (
    <div>
      <div className="flex h-screen w-full font-Ubuntu">
        <SidebarGuru/>
        <div className="h-screen w-full bg-milk-blue">
          <div className="p-9">
            <div className="flex items-center justify-between w-full px-5 border-b-2 pb-3">
              <h1 className="text-xl font-medium">{data?.nama ?? "Annonymous"}</h1>
              <div className=" flex items-center gap-6">
                <button><TbLogout size={23} /></button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between w-full bg-white mt-5 h-[640px]">
              <div className="flex w-full items-center justify-center">
                <h1 className="text-xl mt-4">Buat Scan Poin</h1>
              </div>
              <div className="flex w-full items-center justify-around">
                <div>
                    <table className="border-spacing-6 border-separate">
                        <tr>
                            <td>
                                <select name="" id="" className="w-[320px] py-3 bg-gray rounded-md border">
                                    <option value="" className="text-font-gray">Tipe Point</option>
                                </select> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select name="" id="" className="w-[320px] py-3 bg-gray rounded-md border">
                                    <option value="" className="text-font-gray">Kode Point</option>
                                </select> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <textarea name="" id="" className="w-[320px] py-3 bg-gray rounded-md border pl-1 h-[340px] resize-none placeholder:text-black" placeholder="Keterangan"></textarea> 
                            </td>
                        </tr>
                    </table>
                    <button className="bg-strong-blue text-white w-full mb-2 rounded-md py-2">Kirim</button>
                </div>
                <div>
                    <img src={Barcode} alt="barcode" className="w-[90%]"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
