import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 w-full flex items-center justify-between  px-4 py-2 z-[100] backdrop-blur-lg">
      <Link to="/">
        <div className="text-xl font-semibold">Auction House</div>
      </Link>
      <nav className="absolute left-[50%] transform translate-x-[-50%] hidden md:block">
        <ul className="list-none flex gap-4 items-center ">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </nav>
      <span className="flex gap-2">
        <Link to="/onboard">
          <Button variant="ghost">Sign Up</Button>
        </Link>
        <Button>Sign In</Button>
      </span>
    </header>
  );
}

export default Navbar;
