import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Register | AI Durian | International Durian Association",
  description: "Register | AI Durian | International Durian Association",
};

const RegisterLayout = ({ children }) => {
  return (
    <div className="lg:min-h-screen lg:flex lg:flex-col lg:justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RegisterLayout;
