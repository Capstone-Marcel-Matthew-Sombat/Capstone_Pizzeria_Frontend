import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AllMenus = ({ addToCart }) => {
  const navigate = useNavigate();
  const [menus, setMenus] = useState([]);
  const isAdminLoggedIn = Cookies.get("Adminlogin");

  const getAllMenus = async () => {
    try {
      const result = await axios.get("http://localhost:8080/menu/menuitems");
      // console.log(result.data);
      setMenus(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMenus();
  }, []);

  const handleEdit = (id) => {
    navigate(`/menu/${id}`);
  };

  const onClick = () => {
    
  }
  return (
    <>
      <div>
        <h1 id="form-padding">Menus</h1>

        <div className="menu-page">
          <div className="menu-items">
            {menus.map((menu) => (
              <div key={menu.item_id} className="menu-item">
                {isAdminLoggedIn && (
                  <button
                    onClick={() => handleEdit(menu.item_id)}
                    type="button"
                    className="btn btn-link"
                  >
                    Edit Menus
                  </button>
                )}
                <h5 className="item-name">{menu.name}</h5>
                <p className="item-description">{menu.description}</p>
                <p className="item-price">${menu.price}</p>
                <button onClick={() => addToCart(menu)} className="btn btn-warning" id="add-to-cart">Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMenus;
