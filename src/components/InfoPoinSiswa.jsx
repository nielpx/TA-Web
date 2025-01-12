import { useState, useEffect } from "react";
import {useAuth} from "../context/AuthContextProvider";
import apiService from "../utils/apiService";

const InfoSiswa = () =>{
  const {token} = useAuth()
  const [data, setData] = useState(null);

  useEffect(() => {
    apiService.get("dashboard", {
      token: token,
    }).then((response) => {
      setData(response.data)
    })
  }, []);
  
  return(
        <div className=" flex items-center justify-between w-full gap-7 pt-6">
            <div className="p-3 px-8 bg-white rounded-3xl w-full shadow-[0px_-8px_2px_1px_rgba(6,208,1)] flex-1">
                <p>Kebaikan</p>
                <div className="text-center p-7">
                  <h1 className="font-bold text-5xl text-light-green ">
                    {data?.pointKebaikan ?? 0}
                  </h1>
                </div>
              </div>
              <div className="p-3 px-8 bg-white rounded-3xl w-full shadow-[0px_-8px_2px_1px_rgba(255,0,0)] flex-1">
                <p>Keburukan</p>
                <div className="text-center p-7">
                  <h1 className="font-bold text-5xl text-bright-red">{data?.pointKeburukan ?? 0}</h1>
                </div>
              </div>
              <div className="p-3 px-8 bg-white rounded-3xl w-full shadow-[0px_-8px_2px_1px_rgba(175,71,210)] flex-1">
                <p>Jumlah Point</p>
                <div className="text-center p-7">
                  <h1 className="font-bold text-5xl text-nice-purple">{data?.totalData ?? 0}</h1>
                </div>
              </div>
              <div className="p-3 px-8 bg-white rounded-3xl w-full shadow-[0px_-8px_2px_1px_rgba(66,109,235)] flex-1">
                <p>Hasil Akhir</p>
                <div className="text-center p-7">
                  <h1 className="font-bold text-5xl text-strong-blue">{data?.hasilAkhir ?? 0}</h1>
                </div>
            </div>
        </div>
    )
}

export default InfoSiswa