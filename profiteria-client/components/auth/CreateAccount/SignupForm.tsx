import Link from "next/link";
import { Field, Form } from "react-final-form";

const SignupForm = () => {
  const onSubmit = () => {};
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, invalid }) => (
        <form onSubmit={handleSubmit}>
          <div className="j-btw space-x-6 mt-8">
            <div className="w-full sm:w-1/2">
              <label>Firstname</label>
              <Field
                name="firstname"
                className="form-control mt-2"
                component="input"
                placeholder="Firstname"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label>Lastname</label>
              <Field
                className="form-control mt-2"
                name="lastname"
                component="input"
                placeholder="Lastname"
              />
            </div>
          </div>
          <div className="my-6">
            <label>Email</label>
            <Field
              name="email"
              className="form-control mt-2"
              component="input"
              placeholder="Walterscoff@gmail.com"
            />
          </div>
          <div>
            <label>Password</label>
            <Field
              className="form-control mt-2"
              name="password"
              component="input"
              placeholder="Password"
            />
          </div>

          <button className="w-1/2 btn btn-orange mt-6 block text-center">
            Create Account
          </button>
        </form>
      )}
    />
  );
};

export default SignupForm;
