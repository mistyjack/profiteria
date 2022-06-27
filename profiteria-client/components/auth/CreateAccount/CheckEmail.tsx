import { MailIcon } from "@components/icons";
import { Container } from "@components/ui";

const CheckEmail = () => {
  return (
    <Container style={{ minHeight: 450 }} className="w-full a-center">
      <div className="mx-auto max-w-md px-4 py-8 card relative">
        <h3 className="text-bold mb-4">Check your email</h3>
        <p className="mb-4">
          We have sent a link to verify your account to your email. Please check
          your inbox.
        </p>
        <p className="fs-14-16">
          Didn’t get an email? Please check your spam folder, might be there.
        </p>
        <div className="absolute h-12 w-12 sm:h-14 sm:w-14 -right-3 -top-3 sm:-right-6 sm:-top-6 z-50 card rounded-full">
          <MailIcon />
        </div>
      </div>
    </Container>
  );
};

export default CheckEmail;
