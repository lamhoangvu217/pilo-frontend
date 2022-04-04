import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainDashboard from "./MainDashboard";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useUserDetail from "hooks/useUserDetail";
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const userId = loggedInUser.id;
  const { user, loading } = useUserDetail(userId);
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <>
        <div className="">
          <Sidebar
            setSidebarOpen={setSidebarOpen}
            classNames={classNames}
            sidebarOpen={sidebarOpen}
          />
          <div className="md:pl-64 flex flex-col flex-1">
            <Navbar
              setSidebarOpen={setSidebarOpen}
              classNames={classNames}
              userNavigation={userNavigation}
            />

            <MainDashboard user={user.data} loading={loading} />
          </div>
        </div>
      </>
    );
  }
}
