
import { FaRegBell } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

import SidebarAdmin from "../components/SidebarAdmin";
import { useState } from "react";

//admin

export default function DashboardAdmin() {

  const [showPopupDetail, setShowPopupDetail] = useState(false);
  const handlePopupDetail = () => {
    setShowPopupDetail(true); // Tampilkan pop-up
  };

  const closePopupDetail = () => {
    setShowPopupDetail(false); // Sembunyikan pop-up
  }
    
  const [showPopupDetailAdmin, setShowPopupDetailAdmin] = useState(false);
  const handlePopupDetailAdmin = () => {
    setShowPopupDetailAdmin(true); // Tampilkan pop-up
  };
  const closePopupDetailAdmin = () => {
    setShowPopupDetailAdmin(false); // Sembunyikan pop-up
  }
  return (
    <div>
      <div className="flex h-screen w-full font-Ubuntu">
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
            <div className="flex items-center justify-between border-b-4 border-blue-200  w-full bg-white mt-5">
              <table className="w-full">
                <tr>
                  <td className="py-4 text-xl font-bold pl-3">No</td>
                  <td className="py-4 text-xl font-bold text-center">Nama Point Laporan</td>
                  <td className="py-4 text-xl font-bold ml-40 text-center">Tanggal</td>
                  <td className="pr-3 text-xl font-bold text-center">Status</td>
                </tr>
              </table>
            </div>
            <div className="w-full bg-white p-5 overflow-y-scroll h-[500px]">
                <table className="text-lg">
                    <tbody>
                        <tr className="border-b-2 border-blue-100 ">
                            <td className="pr-3">1</td>
                            <td className="font-medium w-[60%]">
                                <span>Mengerjakan tugas selama satu semester</span>
                                <br />
                                <span className="text-sm align-top text-font-gray">
                                    Muh Xin Cung
                                </span>
                            </td>
                            <td className="text-center">Senin 2 Juni 2020</td>
                            <td className="text-light-green text-center"><button onClick={handlePopupDetail} className="bg-none border-2 rounded-3xl w-28">Di setujui</button></td>
                        </tr>
                        <tr className="border-b-2 border-blue-100 ">
                            <td className="pr-3">1</td>
                            <td className="font-medium w-[60%]">
                                <span>Mengerjakan tugas selama dua semester</span>
                                <br />
                                <span className="text-sm align-top text-font-gray">
                                    Muh Xin Cung
                                </span>
                            </td>
                            <td className="text-center">Senin 2 Juni 2020</td>
                            <td className="text-light-green text-center"><button onClick={handlePopupDetailAdmin} className="bg-none border-2 rounded-3xl w-28">Detail</button></td>
                        </tr>
                        <tr className="border-b-2 border-blue-100 ">
                            <td>2</td>
                            <td className="font-medium w-[60%]">
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae ad quae qui? Nesciunt, adipisci consequuntur mollitia sed enim accusantium. Est incidunt aspernatur assumenda ab commodi quidem sapiente velit neque!</span>
                                <br />
                                <span className="text-sm align-top text-font-gray">
                                    Muhammad Sumbul
                                </span>
                            </td>
                            <td className="text-center">Senin 2 Juni 2020</td>
                            <td className="text-bright-red text-center"><button className="bg-none border-2 rounded-3xl w-28">Ditolak</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
        {showPopupDetail && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-milk-blue w-[60%] flex flex-col justify-between h-auto p-4">
                <div className="w-full h-auto flex gap-4">
                  <div className="w-1/2">
                    <h1 className="py-3 w-full font-medium rounded-md text-center bg-strong-blue text-white shadow-md">Penyalahgunaan peralatan IT di lingkungan sekolah</h1>
                    <div className="p-3 mt-7 rounded bg-white shadow-md">
                      <h1 className="text-xl font-medium">Nama:Muhammad Rafli Asik Effendi</h1>
                      <h1 className="text-xl text-font-gray font-medium mt-1">Tanggal: 28-11-2024 09:13</h1>
                      <h1 className="text-xl text-font-gray font-medium mt-1">Point:-50</h1>
                      <h1 className="text-base text-font-gray mt-1">Deskripsi:</h1>
                      <h1 className="text-base text-font-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus, porro sit expedita nesciunt reiciendis incidunt exercitationem in. Atque dicta saepe totam sed dolorum quaerat odio aliquam accusantium harum nostrum!</h1>
                      <button onClick={closePopupDetail} className="font-medium text-xl mt-4 w-full border rounded-md border-strong-blue">Kembali</button>
                    </div>
                  </div>
                  <div className="w-1/2 h-auto bg-gray rounded-md shadow-md">dcdc</div>
                </div>
              </div>
          </div>
        )}
        {showPopupDetailAdmin && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-milk-blue w-[60%] flex flex-col justify-between h-auto p-4">
                <div className="w-full h-auto flex gap-4">
                  <div className="w-1/2">
                    <h1 className="py-3 w-full font-medium rounded-md text-center bg-strong-blue text-white shadow-md">Penyalahgunaan peralatan IT di lingkungan sekolah</h1>
                    <div className="p-3 mt-7 rounded bg-white shadow-md">
                      <h1 className="text-xl font-medium">Nama:Muhammad Rafli Asik Effendi</h1>
                      <h1 className="text-xl text-font-gray font-medium mt-1">Tanggal: 28-11-2024 09:13</h1>
                      <h1 className="text-xl text-font-gray font-medium mt-1">Point:-50</h1>
                      <h1 className="text-base text-font-gray mt-1">Deskripsi:</h1>
                      <h1 className="text-base text-font-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus, porro sit expedita nesciunt reiciendis incidunt exercitationem in. Atque dicta saepe totam sed dolorum quaerat odio aliquam accusantium harum nostrum!</h1>
                      <div className=" w-full flex justify-between gap-3">
                        <button onClick={closePopupDetailAdmin} className="w-full font-medium text-xl mt-4 border rounded-md border-strong-blue">Kembali</button>
                        <button onClick={closePopupDetailAdmin} className="w-full font-medium text-xl mt-4 border rounded-md border-bright-red">Tolak</button>
                        <button onClick={closePopupDetailAdmin} className="w-full font-medium text-xl mt-4 border rounded-md border-light-green">Setujui</button>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 h-auto bg-gray rounded-md shadow-md"></div>
                </div>
              </div>
          </div>
        )} 
      </div>
    </div>
  );
}
