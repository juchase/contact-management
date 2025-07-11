import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import UserRegister from "./components/Users/UserRegister";
import UserLogin from "./components/Users/UserLogin";
import DashboardLayout from "./components/DashboardLayout";
import UserProfile from "./components/Users/UserProfile";
import UserLogout from "./components/Users/UserLogout";
import ContactCreate from "./components/Contact/ContactCreate";
import ContactList from "./components/Contact/ContactList";
import ContactEdit from "./components/Contact/ContactEdit";
import ContactDetail from "./components/Contact/ContactDetail";
import AddressCreate from "./components/address/AddressCreate";
import AdressEdit from "./components/address/AddressEdit";
import Index from "./Index";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route element={<Layout />}>
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="users">
            <Route path="profile" element={<UserProfile />} />
            <Route path="logout" element={<UserLogout />} />
          </Route>

          <Route path="contacts">
            <Route index element={<ContactList />} />
            <Route path="create" element={<ContactCreate />} />
            <Route path=":id">
              <Route index element={<ContactDetail />} />
              <Route path="edit" element={<ContactEdit />} />
              <Route path="addresses">
                <Route path="create" element={<AddressCreate />} />
                <Route path=":addressId/edit" element={<AdressEdit />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
