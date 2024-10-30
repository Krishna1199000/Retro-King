import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Retro King™",
  description:
    " A retro game store to experience the classic gaming experience",
};

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside>
          <SideBar />
        </aside>
        <div className="flex-1 overflow-auto bg-primary p-4 lg:p-8 rounded-tl-xl">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
