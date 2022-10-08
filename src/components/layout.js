import Header from "./header";
import Footer from "./footer";
import Hero from "./heroslider/hero";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
