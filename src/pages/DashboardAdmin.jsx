
import { FaRegBell } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

import SidebarAdmin from "../components/SidebarAdmin";

//admin

export default function DashboardAdmin() {

    
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
                  <td className="py-4 mr-28 text-xl font-bold text-center">Status</td>
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
                            <td className="text-light-green text-center">Di terima</td>
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
                            <td className="text-bright-red text-center">Di tolak</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
