import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../pages/Main/Layout"
import Home from "../pages/Main/Home";
import Service from "../pages/Main/Service";
import Shop from "../pages/Main/Shop";
import User from "../pages/Main/User";
import City from "../pages/City";
import Search from "../pages/Search"
import BottomNav from "../components/BottomNav"
import Details from "../pages/Details"
import Login from "../pages/Login"
import Order from "../pages/Order"
import { orderBy } from "lodash";

const AppRouter = () => {
    return (
        <Router>
            <BottomNav />
            <Routes>
                <Route path="/city" element={<City />}></Route>
                <Route path="/search/:keywords" element={<Search />}></Route>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/service" element={<Service />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
                <Route path="/user" element={<User />}></Route>
                <Route path="/details/:id" element={<Details />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/Order" element={<Order />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter