import { composeValidators, mustBeEmail, required } from "@utils/validation.util";
import Link from "next/link";
import { Field, Form } from "react-final-form";

const LoginForm = () => {
  const onSubmit = () => {};
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, invalid }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <Field name="email" className="form-control mt-2 " component="input" placeholder="Email" />
          </div>
          <div className="my-6">
            <label>Password</label>
            <Field className="form-control  mt-2" name="password" component="input" placeholder="Password" />
          </div>
          <Link href="/reset-password/send-instruction">
            <a className="hover:underline text-orange-red">Forgot password?</a>
          </Link>
          <button className="w-full mt-6 btn btn-orange">Login</button>
        </form>
      )}
    />
  );
};

export default LoginForm;

{
  /* <Field
                    name="username"
                    validate={composeValidators(required, mustBeEmail)}
                  >
                    {({ input, meta }) => (
                      <div>
                        <label className="label" htmlFor="username">
                          Email
                        </label>
                        <input
                          error={meta.error && meta.touched ? true : false}
                          {...input}
                          id="username"
                          type="username"
                          placeholder="Email"
                        />
                        {meta.error && meta.touched && (
                          <span error={meta.error ? true : false}>
                            {meta.error}
                          </span>
                        )}
                      </div>
                    )}
                  </Field>
             */
}
