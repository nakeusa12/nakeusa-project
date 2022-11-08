import { ThemeProvider } from "next-themes";
import AuthStateChangeProvider from "context/auth";
import "../styles/globals.css";
import { UserProvider } from "context/user";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <UserProvider>
        <AuthStateChangeProvider>
          <Component {...pageProps} />
        </AuthStateChangeProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
