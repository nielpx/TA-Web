import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Barcode from "../pictures/V-Card 2.png"

const ScanSiswa = () =>{
    return (
        <div className="flex flex-col items-center justify-evenly w-full h-screen font-Ubuntu bg-black text-white">
            <Link to="/dashboard" className="absolute top-5 left-5">
                <IoClose size={40}/>
            </Link>
            <div>
                <h1 className="text-3xl">scan your barcode</h1>
            </div>
            <div className="border-2 p-3 border-dashed">
                <div className="p-2 bg-white">
                    <img src={Barcode} alt="barcode"/>      
                </div>
            </div>
            <div>
                <button className='bg-light-green py-3 px-12'>Scan QR Code</button>
            </div>
        </div>
    )
}

export default ScanSiswa