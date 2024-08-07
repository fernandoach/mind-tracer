import { NextUIProvider } from '@nextui-org/react';

export default function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className={`flex flex-col items-center justify-center`}>
      { children }
    </NextUIProvider>
  );
}