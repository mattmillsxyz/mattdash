import { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import cx from 'classnames';

import Sidebar from '@/components/Sidebar';

import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Matt Mills',
    default: 'Matt Mills',
  },
};

const quicksand = Quicksand({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(quicksand.className, 'min-h-screen', 'text-foreground', 'bg-zinc-900', 'dark')}
      suppressHydrationWarning
    >
      <body>
        <NextUIProvider>
          <NextThemesProvider attribute="class" enableSystem>
            <main className="min-h-screen dark:bg-zinc-900 bg-slate-100 flex">
              <Sidebar />
              {children}
            </main>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
