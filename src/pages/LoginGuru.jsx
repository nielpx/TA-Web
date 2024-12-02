import { useState } from 'react'
import Logo from '../pictures/40logo+baru+smkn+2+stemdasi+copy+copy.png'
import { useNavigate } from 'react-router-dom'
import BaseURL, {BaseUrl} from "../utils/axios"



export default function LoginSiswa(){
    const [kodeGuru, setKodeGuru] = useState('')
    const [kataSandi, setKataSandi] = useState('')

    
    const navigate = useNavigate()
    const open = () =>{
        // var nisn = document.getElementById('nisn').value
        // if (nisn === "") {
        //     alert("harus di isi")
        //     return false;
        // }
        BaseURL.post("api/Auth/login-guru", {
            codeGuru: kodeGuru,
            password: kataSandi
        })
        .then(res => {
            
            // let sama = false
            // res.data.forEach(elemen => {
            //     if (elemen.email.includes(nisn)) {
            //         return sama = true
            //     }
            // });
            // if(sama){
            //     navigate('/dashboard')
            // }else{
            //     alert("tetot")
            // }
            // gak usah gae axios // terus fetch biasa?
            console.log(res);
            
            
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <div>
            <div className=" flex w-full h-screen font-Ubuntu">
                <div className=" flex h-screen w-full items-center justify-center bg-white">
                    <div className="w-[max-content] h-auto ">
                        <h1 className=" text-4xl font-bold">Masuk</h1>
                        <p className=" text-base text-gray-500">Selamat datang kembali,silahkan Berkontribusi</p>
                        <div className="mt-5">
                            <h1 className="font-bold">Kode Guru</h1>
                            <div>
                                <input type="text" name="" id="kode" placeholder="1********2" onChange={(e) => setKodeGuru(e.target.value)} value={kodeGuru} className="w-full p-2 bg-milk-blue rounded-md border-2 focus:outline-none"/>
                            </div>
                            <h1 className="font-bold">Kata Sandi</h1>
                            <div>
                                <input type="text" name="" id="Kata-Sandi" placeholder="Kata Sandi" onChange={(e) => setKataSandi(e.target.value)} value={kataSandi} className="w-full p-2 bg-milk-blue rounded-md border-2 focus:outline-none"/>
                            </div>
                            <button className="w-full bg-strong-blue py-2 text-white font-medium border-2 rounded-md mt-10" onClick={open}>Masuk</button>
                            <p className="text-gray-500 text-center mt-2">Masuk Sebagai Siswa <span><a href="/loginsiswa" className=" underline decoration-strong-blue text-strong-blue">Mampir disini</a></span></p>
                            
                        </div>
                    </div>
                    
                </div>
                <div className=" flex flex-col h-screen w-full items-center justify-center bg-splash bg-no-repeat bg-cover bg-[center]"  >
                    <img src={Logo} alt="logo" className='w-[35%]' />
                    <h1 className='text-5xl w-[80%] text-center font-bold text-white mt-11 '>Aplikasi Buku Poin Prestasi <span>SMKN 2 Singosari</span></h1>
                </div>
            </div>
        </div>
    )
}