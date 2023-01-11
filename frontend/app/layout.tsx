import "../styles/globals.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="bg-gray-200 flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Header />
          <div className="bg-white">{children}</div>
        </div>
      </body>
    </html>
  );
}
