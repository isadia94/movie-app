import "../../../styles/globals.css";

export default function TvLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body className="bg-gray-200">
        <div>{children}</div>
      </body>
    </html>
  );
}
