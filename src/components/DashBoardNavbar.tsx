import logo from "@/assets/logo_black.png";
import { useAuthSlice } from "@/hooks/useAuthSlice";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ModeToggle } from "./ui/mode-toggle";

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
    <header className="fixed top-0 right-0 left-0 w-full bg-black flex items-center justify-between px-x py-2 z-[100] backdrop-blur-lg shadow-sm">
      <Link to="/" className="">
        <img
          src={logo}
          alt="logo"
          className=" aspect-auto h-[1.6rem] md:h-[2.6rem]"
        />
      </Link>
      <nav className="absolute left-[50%] transform translate-x-[-50%] hidden md:block bg-accent rounded">
        <Input placeholder="Search" className="w-[400px] bg-accent " />
      </nav>
      <span className="flex gap-2">
        <ModeToggle />
        <Button variant={"default"} onClick={handleLogout}>
          Logout
        </Button>
      </span>
    </header>
  );
}

export default DashBoardNavbar;
