import { Container } from "@components/ui";
import { FullLogo, MenuIcon, CloseIcon } from "@components/icons";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface DrawerProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Drawer: FC<DrawerProps> = ({ setIsOpen }) => {
  return (
    <aside className={`absolute w-full px-4 md:hidden bg-white z-50 ${styles.drawer}`}>
      <div className="a-center-j-btw py-4">
        <div className={styles.logo}>
          <Link href="/">
            <a onClick={() => setIsOpen(false)}>
              <FullLogo />
            </a>
          </Link>
        </div>
        <div onClick={() => setIsOpen(false)} arial-label="Close mobile menu" className="md:hidden cursor-pointer">
          <CloseIcon />
        </div>
      </div>
      <div className="">
        <div className="mb-20">
          <Link href="/">
            <a className="py-4 text-center block" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </Link>
          <Link href="/plans">
            <a className="py-4 text-center block" onClick={() => setIsOpen(false)}>
              Plans
            </a>
          </Link>
          <Link href="/about">
            <a className="py-4 text-center block" onClick={() => setIsOpen(false)}>
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="py-4 text-center block" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </Link>
        </div>
        <div className="flex min-w-28 justify-center mb-16">
          <Link href="/login">
            <a className="btn btn-ash-outlined mr-4" onClick={() => setIsOpen(false)}>
              Login
            </a>
          </Link>
          <Link href="/signup">
            <a className="btn btn-orange" onClick={() => setIsOpen(false)}>
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </aside>
  );
};

const NeutralNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div className={`relative`}>
          <Drawer setIsOpen={setIsOpen} />
        </div>
      ) : null}
      <Container>
        <nav className="py-4 a-center-j-btw">
          <div className={styles.logo}>
            <FullLogo />
          </div>
          <div onClick={() => setIsOpen(true)} arial-label="Open mobile menu" className="md:hidden cursor-pointer">
            <MenuIcon />
          </div>
          <div className={`md:flex md:items-center hidden`}>
            <div className="flex justify-between mr-12">
              <Link href="/">
                <a className="px-4 lg:px-8">Home</a>
              </Link>
              <Link href="/plans">
                <a className="px-4 lg:px-8">Plans</a>
              </Link>
              <Link href="/about">
                <a className="px-4 lg:px-8">About</a>
              </Link>
              <Link href="/contact">
                <a className="px-4 lg:px-8">Contact</a>
              </Link>
            </div>
            <div className="">
              <Link href="/login">
                <a className="btn btn-ash-outlined mr-4">Login</a>
              </Link>
              <Link href="/signup">
                <a className="btn btn-orange">Sign Up</a>
              </Link>
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default NeutralNav;
