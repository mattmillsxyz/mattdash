import { Open_Sans } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';
import cx from 'classnames';

import AuthWrapper from '@/components/AuthWrapper';
import { UserProvider } from '@/context/UserContext';
import Header from '@/components/Header';

import './globals.css';

const opensans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          opensans.className,
          'min-h-screen',
          'dark',
          'text-foreground',
          'bg-background'
        )}
      >
        <UserProvider>
          <NextUIProvider>
            <main className="min-h-screen">
              <AuthWrapper>
                <Header />
                {children}
              </AuthWrapper>
            </main>
          </NextUIProvider>
        </UserProvider>
      </body>
    </html>
  );
}
