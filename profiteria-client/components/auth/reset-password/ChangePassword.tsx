import { Container } from "@components/ui";
import Link from "next/link";
import { Field, Form } from "react-final-form";

const ChangePassword = () => {
  const onSubmit = () => {};
  return (
    <Container style={{ minHeight: 450 }} className="w-full a-center">
      <div className="w-full mx-auto max-w-sm">
        <h3 className="text-bold">Forgot password</h3>
        <p className="my-4">Input a new password</p>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, invalid }) => (
            <form onSubmit={handleSubmit}>
              <div className="my-6">
                <label>Password</label>
                <Field
                  className="form-control  mt-2"
                  name="password"
                  component="input"
                  placeholder="Password"
                />
              </div>
              <button className="w-full  btn btn-orange">
                Change Password
              </button>
            </form>
          )}
        />
        <Link href="/login">
          <a className="text-center hover:underline block mt-6">
            Go back to Login
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default ChangePassword;
