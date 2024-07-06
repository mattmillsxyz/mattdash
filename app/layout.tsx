import { Open_Sans } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import cx from 'classnames';

import AuthWrapper from '@/components/AuthWrapper';
import { UserProvider } from '@/context/UserContext';

import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './globals.css';
import MenuBar from '@/components/MenuBar/MenuBar';

const opensans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(opensans.className, 'min-h-screen', 'text-foreground', 'bg-background', 'dark')}
      suppressHydrationWarning
    >
      <body>
        <UserProvider>
          <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
              <main className="min-h-screen">
                <AuthWrapper>
                  {children}
                  <MenuBar />
                </AuthWrapper>
              </main>
            </NextThemesProvider>
          </NextUIProvider>
        </UserProvider>
      </body>
    </html>
  );
}
