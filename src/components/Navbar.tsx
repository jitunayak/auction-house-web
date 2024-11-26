import logo from "@/assets/logo_black.png";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 w-full flex items-center justify-between  px-4 py-2 z-[100] backdrop-blur-lg">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className=" aspect-auto h-[2.6rem] rounded"
        />
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
        <a href="https://partner.ahouse.in" target="_blank">
          <Button variant="secondary">Partner Login</Button>
        </a>

        <Link to="/onboard">
          <Button> User Login</Button>
        </Link>
      </span>
    </header>
  );
}

export default Navbar;
