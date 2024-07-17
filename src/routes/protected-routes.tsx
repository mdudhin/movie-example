import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  //untuk mengambil value path pada url yang sudah di definisikan pada routes
  const { pathname } = useLocation();

  // untuk pengambil value token dari localstorage mengunakan getItem
  const token = localStorage.getItem("token");

  // definisikan halaman apa saja yang ingin di protected
  const tokenProtected = ["/", "/detail/:id", "/movie", "/tv-show"];
  // definisikan halaman apa saja yang ingin di public
  const publicProtected = ["/login"];

  // validasi untuk proteksi halaman
  if (tokenProtected.includes(pathname)) {
    if (!token) {
      return <Navigate to={"/login"} />;
    }
  }

  if (publicProtected.includes(pathname)) {
    if (token) {
      return <Navigate to={"/"} />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
