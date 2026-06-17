import UtilityBar from "./UtilityBar";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <UtilityBar />
      <header className="sticky top-0 z-50 bg-white shadow-sm shadow-rose-100 dark:bg-[#241016] dark:shadow-black/40">
        <TopBar />
        <Navbar />
      </header>
    </>
  );
}
