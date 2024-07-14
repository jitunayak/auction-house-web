import { useAuthSlice } from "@/hooks/useAuthSlice";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function DashBoardNavbar() {
  const { user, setUser } = useAuthSlice();
  
  const handleLogout = () => {
    console.log("Logout");
    setUser({
      ...user,
      isAuthenticated: false,
    });

  };
  return (
    <header className="fixed top-0 right-0 left-0 w-full flex items-center justify-between  px-4 py-2 z-[100] backdrop-blur-lg">
      <Link to="/">
        <div className="text-xl font-semibold">Auction House</div>
      </Link>
      <nav className="absolute left-[50%] transform translate-x-[-50%] hidden md:block">
        <Input placeholder="Search" className="w-[400px]" />
      </nav>
      <span className="flex gap-2">
        <Button variant={"destructive"} onClick={handleLogout}>
          Logout
        </Button>
      </span>
    </header>
  );
}

export default DashBoardNavbar;
