import { SuccessIcon } from "@components/icons";
import { Container } from "@components/ui";
import Link from "next/link";

const VerifyEmail = () => {
  return (
    <Container style={{ minHeight: 450 }} className="w-full a-center">
      <div className="mx-auto max-w-md px-4 py-8 card relative">
        <h3 className="text-bold mb-6">Email verification successful </h3>
        <p className="mb-4">Your account has been successfully verified</p>
        <Link href="/login">
          <a className="fs-14-16 hover:underline text-orange-red">
            Continue to log in
          </a>
        </Link>
        <div className="absolute h-8 w-8 md:h-12 md:w-12 -right-3 -top-3 md:-right-6 md:-top-6 z-50 card rounded-full">
          <SuccessIcon />
        </div>
      </div>
    </Container>
  );
};

export default VerifyEmail;
