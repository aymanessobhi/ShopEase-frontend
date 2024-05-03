import React from "react";
import { Navigate } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";
import Dashboard from "../pages/Dashboard";
import ProductPage from "../pages/Product";
import ProductForm from "../pages/Product/ProductForm";
import CustomerPage from "../pages/Customer";
import CustomerForm from "../pages/Customer/CustomerForm";
import FournisseurPage from "../pages/Fournisseur";
import FournisseurForm from "../pages/Fournisseur/FournisseurForm";
import LocationForm from "../pages/Location/LocationForm";
import LocationPage from "../pages/Location";
import StaffPage from "../pages/Staff";
import StaffForm from "../pages/Staff/StaffForm";
import DiscountPage from "../pages/Discount";
import PercentageForm from "../pages/Discount/PercentageForm";
import BuyXGetYForm from "../pages/Discount/BuyXGetYForm";
import AmountOffProductForm from "../pages/Discount/AmountOffProductForm";
import DiscountForm from "../pages/Discount/DiscountFrom";


const authProtectedRoutes = [
	{ path: "/main/dashboard", component: <Dashboard /> },
	{ path: "/base/location", component: <LocationPage /> },
	{ path: "/base/location/new", component: <LocationForm /> },
	{ path: "/base/product", component: <ProductPage /> },
	{ path: "/base/staff", component: <StaffPage /> },
	{ path: "/base/discount", component: <DiscountPage /> },
	{ path: "/base/discount/new/:type", component: <DiscountForm /> },	
	{ path: "/base/staff/new", component: <StaffForm /> },
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
	{ path: "/lock-screen", component: <AuthLockScreen /> },
];

export { authProtectedRoutes, publicRoutes };
