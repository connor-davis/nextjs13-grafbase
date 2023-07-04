import "./globals.css";

export const metadata = {
  title: "GrafBase",
  description: "GrafBase demo/sample application using Next.Js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
