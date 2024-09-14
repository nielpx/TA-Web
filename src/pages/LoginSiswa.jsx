import { useState } from "react";
import Logo from "../pictures/40logo+baru+smkn+2+stemdasi+copy+copy.png";
import BaseURL from "../utils/axios";
import { useNavigate } from 'react-router-dom';

export default function LoginSiswa() {
  const navigate = useNavigate()
  const [nisn, setNisn] = useState();

  const getCode = async () => {
    try {
      const response = await BaseURL.post("api/Auth/login-siswa", {nisn});
      
      if (response.status == 200) {
        alert(`Hallo, ${response.data.nama}`)
        window.localStorage.setItem("token", response.data.token) 
        navigate("/dashboard")
      }     
    } catch(e) {
      alert(e.response.data.message)
    }
  };

  return (
    <div>
      <div className=" flex w-full h-screen font-Ubuntu">
        <div className=" flex h-screen w-full items-center justify-center bg-white">
          <div className="w-[max-content] h-auto ">
            <h1 className=" text-4xl font-bold">Masuk</h1>
            <p className=" text-base text-gray-500">
              Selamat datang kembali, silahkan mengisi kembali
            </p>
            <div className="mt-5">
              <h1 className="font-bold">NISN</h1>
              <div>
                <input
                  type="text"
                  placeholder="NISN"
                  onChange={(e) => setNisn(e.target.value)}
                  className="w-full p-2 bg-milk-blue rounded-md border-2 focus:outline-none"
                />
                <button onClick={getCode} className="w-full bg-strong-blue py-2 text-white font-medium border-2 rounded-md mt-10">
                  Masuk
                </button>
                <p className="text-gray-500 text-center mt-2">
                  Masuk sebagai guru?{" "}
                  <span>
                    <a
                      href="/loginguru"
                      className=" underline decoration-strong-blue text-strong-blue"
                    >
                      Mampir disini
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col h-screen w-full items-center justify-center bg-Splash bg-no-repeat bg-cover bg-[center]">
          <img src={Logo} alt="logo" className="w-[35%]" />
          <h1 className="text-5xl w-[80%] text-center font-bold text-white mt-11 ">
            Aplikasi Buku Poin Prestasi <span>SMKN 2 Singosari</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
