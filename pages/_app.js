import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./templates/header";
// import Footer from "./templates/footer";
export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    {/* <Footer/> */}
    </>
  );
}
