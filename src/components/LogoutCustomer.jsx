import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogoutCustomer = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("Customerlogin");
    toast.success("Successfully signed out!");
    navigate("/");
    location.reload();
  };

  return (
    <>
      <div className="center">
        <button type="button" className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default LogoutCustomer;
