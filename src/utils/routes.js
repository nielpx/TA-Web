import { createBrowserRouter } from "react-router-dom";
import LoginSiswa from "../pages/LoginSiswa";
import DashboardSiswa from "../pages/DashboardSiswa";
import ScanSiswa from "../pages/ScanSiswa";
import LoginGuru from "../pages/LoginGuru";
import LaporanSiswa from "../pages/LaporanSiswa";
import RiwayatSiswa from "../pages/RiwayatSiswa";
import DashboardGuru from "../pages/DashboardGuru";
import ScanGuru from "../pages/ScanGuru";
import LaporanGuru from "../pages/LaporanGuru";
import RiwayatGuru from "../pages/RiwayatGuru";
import DashboardAdmin from "../pages/DashboardAdmin";
import DataPointAdmin from "../pages/DataPointAdmin";
import DataJurusanDanKelasAdmin from "../pages/DataKelasdanJurusanAdmin.jsx";
import DataSiswaAdmin from "../pages/DataSiswaAdmin.jsx";
import DataPointSiswaAdmin from "../pages/DataPointSiswaAdmin.jsx";
import DataGuruAdmin from "../pages/DataGuruAdmin.jsx";
import LihatPointGuru from "../pages/LihatPointGuru.jsx";
import Authorize from "../context/AuthorizeComponent";
import WithRoleBasedComponent from "../context/WithRoleBasedComponent";

const route = createBrowserRouter([
  {
    path: "/",
    element: <LoginSiswa />,
  },
  {
    path: "/loginguru",
    element: <LoginGuru />,
  },
  {
    path: "/dashboard",
    element: (
      <Authorize>
        <WithRoleBasedComponent
          route={[
            {
              role: "Siswa",
              components: <DashboardSiswa />,
            },
            {
              role: "Admin",
              components: <DashboardAdmin />,
            },
            {
              role: "Guru",
              components: <DashboardGuru />,
            },
          ]}
        />
      </Authorize>
    ),
  },
  {
    path: "/scan",
    element: (
      <Authorize>
        <WithRoleBasedComponent
          route={[
            {
              role: "Siswa",
              components: <ScanSiswa />,
            },
            {
              role: "Guru",
              components: <ScanGuru />,
            },
          ]}
        />
      </Authorize>
    ),
  },
  {
    path: "/laporansiswa",
    element: <LaporanSiswa />,
  },
  {
    path: "/laporanguru",
    element: <LaporanGuru />,
  },
  {
    path: "/riwayat",
    element: (
      <Authorize>
        <WithRoleBasedComponent
          route={[
            {
              role: "Siswa",
              components: <RiwayatSiswa />,
            },
            {
              role: "Guru",
              components: <RiwayatGuru />,
            },
          ]}
        />
      </Authorize>
    ),
  },
  {
    path: "/datapointadmin",
    element: <DataPointAdmin />,
  },
  {
    path: "/datajurusandankelasadmin",
    element: <DataJurusanDanKelasAdmin />,
  },
  {
    path: "/datasiswaadmin",
    element: <DataSiswaAdmin />,
  },
  {
    path: "/datapointsiswaadmin",
    element: <DataPointSiswaAdmin />,
  },
  {
    path: "/dataguruadmin",
    element: <DataGuruAdmin />,
  },
  {
    path: "/lihatpointguru",
    element: <LihatPointGuru />,
  },
]);

export default route;
