import AuthWrapper from '@/components/AuthWrapper';
import { UserProvider } from '../context/UserContext';
import './globals.css';
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <AuthWrapper>
            <Header />
            {children}
          </AuthWrapper>
        </UserProvider>
      </body>
    </html>
  );
}
