import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FlipperX - Ultimate Hardware Hacking Tool',
  description: 'FlipperX is the ultimate multi-tool device for pentesters, hardware hackers, and security researchers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}