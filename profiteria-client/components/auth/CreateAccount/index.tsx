import WhiteLogo from "@components/icons/WhiteLogo";
import { Container } from "@components/ui";
import Link from "next/link";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <div className=" j-btw">
      <Container className="mx-auto md:mx-0 px-4 py-14 w-full md:w-6/12">
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
      </Container>
      <div className="bg-orange-red text-white w-5/12 px-10 hidden md:block">
        <div className="my-14">
          <WhiteLogo />
        </div>
        <p className={`signup_title font-bold`}>
          The most profitable Bitcoin Farming platform.
        </p>
        <p className=" signup_body mt-6 pr-4">
          Get started with <span className="text-black font-bold">profit</span>
          eria to have access to the best strategies for great returns.
        </p>
      </div>
    </div>
  );
};

export default Signup;
