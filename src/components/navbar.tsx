import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex flex-row w-full justify-between px-5 py-4 shadow-md">
      <h2 className="text-base text-regal-blue">Name</h2>
      <div className="flex flex-row gap-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/movie"}>Movie</Link>
        <Link to={"/tv-show"}>TV Show</Link>
        <div onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
};

export default Navbar;
