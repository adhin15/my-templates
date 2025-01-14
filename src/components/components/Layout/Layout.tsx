import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[1200px] pt-[60px] md:pt-[80px]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
