import {
  composeValidators,
  mustBeEmail,
  mustBeGreaterThan8,
  mustContainSpecialChar,
  required,
} from "@utils/validation.util";
import Link from "next/link";
import { useState } from "react";
import { Field, Form } from "react-final-form";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const onSubmit = () => {};
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, invalid }) => (
        <form onSubmit={handleSubmit}>
          <Field
            validate={composeValidators(required, mustBeEmail)}
            name="email"
          >
            {({ input, meta }) => (
              <div className="w-full mb-6">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  className={`${
                    meta.error && meta.touched
                      ? "form-control-error"
                      : "form-control"
                  }  mt-2`}
                  {...input}
                  id="email"
                  type="text"
                  placeholder="Email"
                />

                {meta.error && meta.touched && (
                  <span className={meta.error ? "text-red" : "hidden"}>
                    {meta.error}
                  </span>
                )}
              </div>
            )}
          </Field>
          <Field
            validate={composeValidators(
              required,
              mustBeGreaterThan8,
              mustContainSpecialChar
            )}
            name="password"
          >
            {({ input, meta }) => (
              <div className="mb-6">
                <label className="label" htmlFor="password">
                  Password
                </label>

                <div className="relative">
                  <input
                    className={`${
                      meta.error && meta.touched
                        ? "form-control-error"
                        : "form-control"
                    }  mt-2`}
                    {...input}
                    id="password"
                    type={show ? "text" : "password"}
                    placeholder="Password"
                  />

                  <span
                    style={{ top: "12px" }}
                    className="absolute fs-14-16 right-2 cursor-pointer text-orange-red"
                    onClick={() => setShow(!show)}
                  >
                    {show ? "Hide" : "Show"}
                  </span>
                </div>

                {meta.error && meta.touched && (
                  <span className={meta.error ? "text-red" : "hidden"}>
                    {meta.error}
                  </span>
                )}
              </div>
            )}
          </Field>
          <Link href="/reset-password/send-instruction">
            <a className="hover:underline text-orange-red">Forgot password?</a>
          </Link>
          <button
            disabled={invalid}
            className="w-full mt-6 btn btn-orange disabled:bg-ash"
          >
            Login
          </button>
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
