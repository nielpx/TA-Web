import Logo from "../pictures/40logo+baru+smkn+2+stemdasi+copy+copy.png";
import { Form, Formik } from "formik";
import { useAuth } from "../context/AuthContextProvider";
import { Link, Navigate } from "react-router-dom";
import apiService from "../utils/apiService";
import Toast from "../utils/toast";

export default function LoginSiswa() {
  const { token, login } = useAuth();

  if (token != null) return <Navigate to={"/dashboard"} />;

  return (
    <div>
      <div className=" flex w-full h-screen font-Ubuntu">
        <div className=" flex h-screen w-full items-center justify-center bg-white">
          <div className="w-[max-content] h-auto ">
            <h1 className=" text-4xl font-bold">Masuk</h1>
            <p className=" text-base text-gray-500">
              Selamat datang kembali, silahkan mengisi kembali
            </p>
            <Formik
              initialValues={{ nisn: "" }}
              onSubmit={(values, { setSubmitting }) => {
                apiService
                  .post(
                    "Auth/login-siswa",
                    { nisn: values.nisn.toString() },
                    {
                      isBasePath: true,
                    }
                  )
                  .then((response) => {
                    Toast.fire({
                      title: `Berhasil Login (${response.data.nama})`,
                      icon: "success",
                    });
                    login(response.data.token, "Siswa");
                  })
                  .catch((error) => {
                    Toast.fire({
                      title: error.response.data.message,
                      icon: "error",
                    });
                  })
                  .finally(() => {
                    setSubmitting(false);
                  });
              }}
            >
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="mt-5">
                    <h1 className="font-bold">NISN</h1>
                    <div>
                      <input
                        type={"number"}
                        placeholder="NISN"
                        name="nisn"
                        onChange={handleChange}
                        className="w-full p-2 bg-milk-blue rounded-md border-2 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        required
                        value={values.nisn}
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-strong-blue py-2 text-white font-medium border-2 rounded-md mt-10"
                      >
                        Masuk
                      </button>
                      <p className="text-gray-500 text-center mt-2">
                        Masuk sebagai guru?{" "}
                        <span>
                          <Link
                            to="/loginguru"
                            className=" underline decoration-strong-blue text-strong-blue"
                          >
                            Mampir disini
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className=" flex flex-col h-screen w-full items-center justify-center bg-splash bg-no-repeat bg-cover bg-[center]">
          <img src={Logo} alt="logo" className="w-[35%]" />
          <h1 className="text-5xl w-[80%] text-center font-bold text-white mt-11 ">
            Aplikasi Buku Poin Prestasi <span>SMKN 2 Singosari</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
