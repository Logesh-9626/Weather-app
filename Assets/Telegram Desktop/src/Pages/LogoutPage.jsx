import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogoutPage = () => {
  const navigate = useNavigate();

  const LogoutUrl = "http://localhost:3000/api/user/logout";
  const handleLogout = async () => {
    try {
      const response = await axios.post(LogoutUrl);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button className="btn btn-info" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutPage;
