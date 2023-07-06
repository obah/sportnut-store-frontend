import Footer from "@/components/footer";
import Header from "@/components/header";

export default function layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
