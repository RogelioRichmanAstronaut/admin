
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { Layout } from "./components/Layout";
import { useSelector } from "react-redux";


const App = () => {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <BrowserRouter>
          <Routes>
            {admin && (
            <>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route exact path="/users" element={<UserList />} />
                <Route path="/user/:userId" element={<User />} />
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/newproduct" element={<NewProduct />} />
              </Route>
            </>)}
              <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
