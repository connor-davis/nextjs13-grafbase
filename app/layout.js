import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "GrafBase",
  description: "GrafBase demo/sample application using Next.Js 13",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex flex-col w-screen h-screen">
          <Navbar />
          <main className="w-full h-full overflow-y-auto">
            <div className="p-5">{children}</div>
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
