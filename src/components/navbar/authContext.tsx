'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Crear el contexto
const AuthContext = createContext<{
  user: { fullname: string; email: string; role: string } | null;
  handleLogout: () => Promise<void>; 
  loading: boolean;
  handleLogin: (email: string, password: string) => Promise<{ fullname: string; email: string; role: string } | null>;
}>({
  user: null,
  handleLogout: async () => {}, 
  loading: true,
  handleLogin: async (email: string, password: string) => null,
});


// Hook para usar el contexto
export const useAuth = () => useContext(AuthContext);

// Proveedor de autenticación
export const AuthProvider = ({ children } : { children: React.ReactNode }) => {
  const [user, setUser] = useState<{fullname: string, email: string, role: string} | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      const loginResponse = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (loginResponse.ok) {
        const userData = await loginResponse.json();
        setUser(userData); // Actualizar el estado del usuario en el contexto
        return userData;
      }

      throw new Error("Error de inicio de sesión");
    } catch (error) {
      throw error;
    }
  };

  const handleLogout = async (): Promise<void> => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setUser(null);
        router.push('/login');
      }
    } catch (error) {
      router.push('/login');
    }
  };

  const fetchData = async () : Promise<{ fullname: string; email: string; role: string } | null> => {
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

      const data = await response.json();
      setUser(data);
      return data;
    } catch (err) {
      setError("Failed to load user data");
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Cargar datos del usuario al montar el componente
    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, handleLogout, loading, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
