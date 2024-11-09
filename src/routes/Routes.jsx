import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginSiswa from '../pages/LoginSiswa'
import DashboardSiswa from '../pages/DashboardSiswa'
import ScanSiswa from '../pages/ScanSiswa'
import LoginGuru from '../pages/LoginGuru'
import LaporanSiswa from '../pages/LaporanSiswa'
import DashboardGuru from '../pages/DashboardGuru'

export default function App (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LoginSiswa/>} />
                <Route path="/loginguru" element={<LoginGuru/>} />
                <Route path="/dashboard" element={<DashboardSiswa/>}/>
                <Route path="/dashboardguru" element={<DashboardGuru/>} />
                <Route path='/scan' element={<ScanSiswa/>}/>
                <Route path="/laporansiswa" element={<LaporanSiswa/>}/>
            </Routes> 
        </Router>
    )
}