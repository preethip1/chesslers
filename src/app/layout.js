"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProviderWrapper from "./ProviderWrapper";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ProviderWrapper session={session}>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
