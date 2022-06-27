import WhiteLogo from "@components/icons/WhiteLogo";
import { Container } from "@components/ui";
import Link from "next/link";
import SignupForm from "./SignupForm";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <Container className={`${styles.signup} a-center-j-btw`}>
      <div className="mx-auto md:mx-0 w-full md:w-6/12">
        <h3>
          Set up your <span className="text-orange-red">Profit</span>eria
          account
        </h3>
        <p className="my-4">
          Already have an account?{" "}
          <Link href="/login">
            <a className="text-orange-red ml-1 hover:underline"> Log in</a>
          </Link>
        </p>
        <SignupForm />
      </div>
      <div className="bg-orange-red h-full text-white w-5/12 px-10 hidden md:block">
        <div className="my-14">
          <WhiteLogo />
        </div>
        <p className={`fs-30-44 font-bold`}>
          The most profitable Bitcoin Farming platform.
        </p>
        <p className={`fs-18-30 mt-6 pr-4`}>
          Get started with <span className="text-black font-bold">profit</span>
          eria to have access to the best strategies for great returns.
        </p>
      </div>
    </Container>
  );
};

export default Signup;
