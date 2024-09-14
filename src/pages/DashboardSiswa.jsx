import { useState, useEffect } from "react";
import { FaRegBell } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import TableSiswa from "../components/TableSiswaDashboard";
import InfoSiswa from "../components/InfoPoinSiswa";
import Sidebar from "../components/Sidebar";
import BaseURL from "../utils/axios";

export default function DashboardSiswa() {
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
        <Sidebar/>
        <div className="h-screen w-full bg-milk-blue">
          <div className="p-9">
            <div className="flex items-center justify-between w-full px-5 border-b-2 pb-3">
              <h1 className="text-xl font-medium">{data?.nama ?? "Annonymous"}</h1>
              <div className=" flex items-center gap-6">
                <FaRegBell size={23} />
                <TbLogout size={23} />
              </div>
            </div>
            <InfoSiswa/>
            <div className="flex items-center justify-between border-b-4 border-blue-200  w-full bg-white mt-5">
              <h1 className="py-4 ml-5 text-xl font-bold">No</h1>
              <h1 className="py-4 text-xl font-bold">Nama Point Laporan</h1>
              <h1 className="py-4 mr-16 text-xl font-bold">Poin</h1>
            </div>
            <TableSiswa/>
          </div>
        </div>
      </div>
    </div>
  );
}
