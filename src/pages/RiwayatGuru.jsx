
import { TbLogout } from "react-icons/tb";
import SidebarGuru from "../components/SidebarGuru";
import { Link } from "react-router-dom";


export default function RiwayatGuru() {

    
  return (
    <div>
      <div className="flex h-screen w-full font-Ubuntu">
        <SidebarGuru/>
        <div className="h-screen w-full bg-milk-blue">
          <div className="p-9">
            <div className="flex items-center justify-between w-full px-5 border-b-2 pb-3">
              <h1 className="text-xl font-medium">tes</h1>
              <div className=" flex items-center gap-6">
                <Link to="/loginsiswa"><TbLogout size={23} /></Link>
              </div>
            </div>
            <div className="flex items-center justify-around border-b-4 border-blue-200  w-full bg-white mt-5">
              <h1 className="py-4 text-xl font-bold pl-1">Nama Point Laporan</h1>
              <h1 className="py-4 mr-16 text-xl font-bold pl-[428px]">Status</h1>
            </div>
            <div className="w-full bg-white p-5 overflow-y-scroll h-[400px]">
                <table className="w-full text-lg">
                    <tbody>
                        <tr className="border-b-2 border-blue-100 ">
                            <td className="font-medium ">
                                <span>Mengerjakan tugas selama satu semester</span>
                                <br />
                                <span className="text-sm align-top text-font-gray">
                                    Tanggal : 10-10-24 09:30
                                </span>
                            </td>
                            <td className="text-light-green pl-[25vw]">Di terima</td>
                        </tr>
                        <tr className="border-b-2 border-blue-100 ">
                            <td className="font-medium w-1/2 ">
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae ad quae qui? Nesciunt, adipisci consequuntur mollitia sed enim accusantium. Est incidunt aspernatur assumenda ab commodi quidem sapiente velit neque!</span>
                                <br />
                                <span className="text-sm align-top text-font-gray">
                                    Tanggal : 10-10-24 09:30
                                </span>
                            </td>
                            <td className="text-bright-red pl-[25vw]">Di tolak</td>
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
