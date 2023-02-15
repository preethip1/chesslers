import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
