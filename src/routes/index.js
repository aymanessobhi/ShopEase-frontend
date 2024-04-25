import React from "react";
import { Navigate } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";
import Dashboard from "../pages/Dashboard";
import ProductPage from "../pages/Product";
import ProductForm from "../pages/Product/ProductForm";
import CustomerPage from "../pages/Customer";
import CustomerForm from "../pages/Customer/CustomerForm";
import FournisseurPage from "../pages/Fournisseur";
import FournisseurForm from "../pages/Fournisseur/FournisseurForm";

const authProtectedRoutes = [
	{ path: "/dashboard", component: <Dashboard /> },
	{ path: "/base/product", component: <ProductPage /> },
	{ path: "/base/product/new", component: <ProductForm /> },
	{ path: "/base/customer", component: <CustomerPage /> },
	{ path: "/base/customer/new", component: <CustomerForm /> },
	{ path: "/base/fournisseur", component: <FournisseurPage /> },
	{ path: "/base/fournisseur/new", component: <FournisseurForm /> },
	{ path: "/", exact: true, component: <Navigate to="/login" /> },
];

const publicRoutes = [
	{ path: "/logout", component: <Logout /> },
	{ path: "/login", component: <Login /> },
	{ path: "/forgot-password", component: <ForgetPwd /> },
	{ path: "/register", component: <Register /> },
	{ path: "/lock-screen", component: <AuthLockScreen /> },
];

export { authProtectedRoutes, publicRoutes };
