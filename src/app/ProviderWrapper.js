"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";

export default function ProviderWrapper({ children, ...props }) {
  return <SessionProvider {...props}>{children}</SessionProvider>;
}
