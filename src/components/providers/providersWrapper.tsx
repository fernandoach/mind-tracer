import { NextUIProvider } from '@nextui-org/react';
import { AuthProvider } from '../navbar/authContext';

export default function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className={`flex flex-col items-center justify-center`}>
      <AuthProvider>
        { children }
      </AuthProvider>
    </NextUIProvider>
  );
}