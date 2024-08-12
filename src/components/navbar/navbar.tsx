'use client'

import GuestNavbar from "./guestNavbar";
import UserNavbar from "./userNavbar";
import { useAuth } from "./authContext";
import SkeletonNavbar from "./skeletonNavbar";

function NavBar() {
  const { user, handleLogout, loading } = useAuth();

  if (loading && !user) {
    return <SkeletonNavbar />;
  }

  if (!user) {
    return <GuestNavbar />;
  }

  return <UserNavbar fullName={user.fullname} email={user.email} handleLogout={handleLogout} />;
}

export default NavBar;
