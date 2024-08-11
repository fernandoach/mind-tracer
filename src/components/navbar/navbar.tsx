'use client'

import React from "react";
import GuestNavbar from "./guestNavbar";
import UserNavbar from "./userNavbar";
import { useRouter } from "next/navigation";

function NavBar() {
  const [fullName, setFullName] = React.useState("")
  const [role, setRole] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        setEmail("")
        setFullName("")
        router.push('/login')
      }
    } catch (error) {
      return router.push('/login')
    }
  }

  const fetchData = async () => {
    try {
      const response = await fetch('/api/auth/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching user data');
      }

      return await response.json();
    } catch (err:any) {
      return <GuestNavbar />
    }
  };

  try {
    React.useEffect(() => {
      const loadData = async () => {
        const response = await fetchData();
        if (response) {
          setFullName(response.fullName);
          setRole(response.role);
          setEmail(response.email);
        }
      };
  
      loadData();
    }, []);
  } catch (error: any) {
    return <GuestNavbar />
  }

  if( role === "user") {
    return <UserNavbar fullName={fullName} email={email} handleLogout={handleLogout} />
  }

  return <GuestNavbar />

}

export default NavBar