import Sidebar from "../components/Sidebar";
import SidebarGuru from "../components/SidebarGuru";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import apiService from "../utils/apiService";
import { useAuth } from "../context/AuthContextProvider"; // Import context Auth

const RiwayatGuru = () => {
  const { token, isRole } = useAuth(); // Ambil token dari AuthContext
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setError("Token tidak ditemukan. Silakan login ulang.");
        setLoading(false);
        return;
      }

      try {
        // Menggunakan token dari AuthContext untuk otorisasi
        const result = await apiService.get("History", {
          token: token,
        });

        console.log("Data fetched:", result.data);
        setData(result.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(
          err.response?.data?.message ||
            "Terjadi kesalahan saat mengambil data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="flex items-center justify-center w-full h-screen font-Ubuntu">
      {isRole == "Guru" ? <SidebarGuru /> : <Sidebar />}
      <div className="h-screen w-full bg-milk-blue">
        <div className="p-9">
          <div className="flex items-center justify-between w-full px-5 border-b-2 pb-3">
            <h1 className="text-xl font-medium">Muhammad Zidane Maulana</h1>
            <div className="flex items-center gap-6">
              <Link to="/">
                <TbLogout size={23} />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-around border-b-4 border-blue-200 w-full bg-white mt-5">
            <h1 className="py-4 text-xl font-bold pl-1">Nama Point Laporan</h1>
            <h1 className="py-4 mr-16 text-xl font-bold pl-[428px]">Status</h1>
          </div>
          <div className="overflow-auto h-[600px]">
            <div className="w-full bg-white p-5">
              {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
              ) : error ? (
                <p className="text-red-500 text-center">{error}</p>
              ) : data.length === 0 ? (
                <p className="text-center text-gray-500">Tidak ada data.</p>
              ) : (
                <table className="w-full text-lg">
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id} className="border-b-2 border-blue-100">
                        <td className="font-medium">
                          <span>{item.namaPoint}</span>
                          <br />
                          <span className="text-sm align-top text-font-gray">
                            Tanggal: {item.tanggal}
                          </span>
                        </td>
                        <td
                          className={`pl-[25vw] ${
                            item.status === "Di Terima"
                              ? "text-light-green"
                              : item.status === "Di Tolak"
                              ? "text-bright-red"
                              : "text-strong-blue"
                          }`}
                        >
                          {item.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiwayatGuru;
