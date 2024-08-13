'use client'

import GuestNavbar from "./guestNavbar";
import UserNavbar from "./userNavbar";
import { useAuth } from "./authContext";
import dynamic from "next/dynamic";
function NavBar() {
  const { user, handleLogout, loading } = useAuth();

  const LazySkeletonNavbar = dynamic(() => import("@/components/navbar/skeletonNavbar"));
  if (loading && !user) {
    return <LazySkeletonNavbar />;
  }

  if (!user) {
    return <GuestNavbar />;
  }

  return <UserNavbar fullName={user.fullname} email={user.email} handleLogout={handleLogout} />;
}

export default NavBar;
