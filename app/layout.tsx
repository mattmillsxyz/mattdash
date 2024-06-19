import { Open_Sans } from 'next/font/google';

import AuthWrapper from '@/components/AuthWrapper';
import { UserProvider } from '@/context/UserContext';
import Header from '@/components/Header';
import BootstrapClient from '@/components/BootstrapClient';

import '@/styles/customBootstrap.scss';
import './globals.css';

const opensans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={opensans.className}>
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
