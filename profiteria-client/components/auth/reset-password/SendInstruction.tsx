import { Container } from "@components/ui";
import Link from "next/link";
import { Field, Form } from "react-final-form";

const SendIstruction = () => {
  const onSubmit = () => {};
  return (
    <Container style={{ minHeight: 450 }} className="w-full a-center">
      <div className="w-full mx-auto max-w-sm">
        <h3 className="text-bold">Forgot password</h3>
        <p className="my-4">
          Please provide your email. A link with instructions on how to reset
          your password will be sent.
        </p>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, invalid }) => (
            <form onSubmit={handleSubmit}>
              <div className="my-6">
                <label>Email</label>
                <Field
                  className="form-control  mt-2"
                  name="email"
                  component="input"
                  placeholder="Email"
                />
              </div>
              <button className="w-full  btn btn-orange">
                Send instructions
              </button>
            </form>
          )}
        />
        <Link href="/login">
          <a className="hover:underline text-center mt-6 block">
            Go back to Login
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default SendIstruction;
