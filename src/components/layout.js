import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <meta http-equiv="refresh" content="0; url=https://bookviking.com"></meta>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
