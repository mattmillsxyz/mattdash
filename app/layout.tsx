import AuthWrapper from '@/components/AuthWrapper';
import { UserProvider } from '@/context/UserContext';

import Header from '@/components/Header';
import BootstrapClient from '@/components/BootstrapClient';

import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body>
        <UserProvider>
          <AuthWrapper>
            <Header />
            {children}
            <BootstrapClient />
          </AuthWrapper>
        </UserProvider>
      </body>
    </html>
  );
}
