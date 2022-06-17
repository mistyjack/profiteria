import { DarkLogo, Facebook, Instagram, Twitter } from "@components/icons";
import { Container } from "@components/ui";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-pink">
      <Container className="py-8 ">
        <div className={`mb-12 mx-auto w-full ${styles.logo_container}`}>
          <div className={`pb-4 mx-auto ${styles.darkLogo}`}>
            <DarkLogo />
          </div>
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="w-1/2 md:w-fit text-left mb-4 md:mb-0">
            <h4 className="mb-4">What we offer</h4>
            <ul className="text-left">
              <li>Plans</li>
              <li>Hire A Trader</li>
              <li>Trade</li>
              <li>Wallet</li>
              <li>Invest</li>
            </ul>
          </div>
          <div className="w-1/2 md:w-fit flex-wrap text-left ">
            <h4 className="mb-4">Our Links</h4>
            <ul className="text-left">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-1/2 md:w-fit flex-wrap text-left">
            <h4 className="mb-4">Contact Us</h4>
            <ul className="text-left">
              <li>info@profiteria.com</li>
            </ul>
          </div>
          <div className="w-1/2 md:w-fit flex-wrap text-left">
            <h4 className="mb-4">Support</h4>
            <ul className="text-left">
              <li>FAQ</li>
              <li>Account information</li>
              <li>Send/receive bitcoin</li>
              <div className="flex md:justify-between mt-6">
                <Link href="/facebook">
                  <a className="pr-2">
                    <Facebook />
                  </a>
                </Link>
                <Link href="/twitter">
                  <a className="pr-2">
                    <Twitter />
                  </a>
                </Link>
                <Link href="/instagram">
                  <a className="pr-2">
                    <Instagram />
                  </a>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
