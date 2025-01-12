import { useState, useEffect } from "react";
import { TbLogout } from "react-icons/tb";
import SidebarGuru from "../components/SidebarGuru";
import TableGuru from "../components/TableGuruDashboard";
import { Link } from "react-router-dom";
import apiService from "../utils/apiService";
import {useAuth} from "../context/AuthContextProvider";

export default function DashboardGuru() {
  const {token} = useAuth();
  const [data, setData] = useState()

  useEffect(() => {
    apiService.get("Auth/me", {
      isBasePath: true,
      token:token
    }).then((response) => {
      setData(response.data)
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
                <Link to="/loginsiswa"><TbLogout size={23} /></Link>
              </div>
            </div>
            <div className="flex items-center justify-between border-b-4 border-blue-200  w-full bg-white mt-5">
              <h1 className="py-4 ml-5 text-xl font-bold">No</h1>
              <h1 className="py-4 text-xl font-bold">Nama Point Laporan</h1>
              <h1 className="py-4 mr-16 text-xl font-bold">Tanggal</h1>
            </div>
            <TableGuru/>
          </div>
        </div>
      </div>
    </div>
  );
}
