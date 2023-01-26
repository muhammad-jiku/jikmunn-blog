//  internal imports
import '../styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
