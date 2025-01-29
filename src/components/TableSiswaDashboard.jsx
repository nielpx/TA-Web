import { useState, useEffect } from "react";
import apiService from "../utils/apiService";
import {useAuth} from "../context/AuthContextProvider";

const TableSiswa = () => {
  const {token} = useAuth()
  const [data, setData] = useState([]);
  
  useEffect(() => {
    apiService.get("Point", {
      token:token
    }).then((response) => {
      setData(response.data)
    })
  }, []);

 
  // ayo main
  //ngenteni back front end e mari sek baru back end e tak push
  //
  
  return (
    <div className="w-full bg-white p-5 overflow-y-scroll h-[400px]">
      <table className="w-full text-lg">
        <tbody>
          {data.map((item, index) => (
            <tr className="border-b-2 border-blue-100 ">
              <td className="font-medium align-top">
                {index + 1 < 9 ? "0" + (index + 1) : index + 1}
              </td>
              <td className="font-medium ">
                <span>{item.nama}</span>
                <br />
                <span className="text-sm align-top text-gray-400">
                  Di Setujui Oleh {item.namaGuru}
                </span>
              </td>
              <td
                className={`text-end ${
                item.typePoint !== "Point Keburukan" ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.typePoint !== "Point Keburukan"
                  ? "+" + item.point
                  : "-" + item.point}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSiswa;
