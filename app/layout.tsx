import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OKONSKI Performance | Protocol Library',
  description: 'Professional treatment and performance protocol library.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
