import Scan from '../pictures/barcode.png'

const ScanSiswa = () =>{
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen font-Ubuntu">
            <div>
                <h1 className="text-3xl">scan your barcode</h1>
            </div>
            <div>
                <img src={Scan} alt="barcode"/>
            </div>
            <div>
                <button className='bg-light-green py-3 px-12'>Scan QR Code</button>
            </div>
        </div>
    )
}

export default ScanSiswa