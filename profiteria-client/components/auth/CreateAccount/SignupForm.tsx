import {
  composeValidators,
  mustBeEmail,
  mustBeGreaterThan8,
  mustBeLettersOnly,
  mustContainSpecialChar,
  required,
} from "@utils/validation.util";
import { useState } from "react";
import { Field, Form } from "react-final-form";

const SignupForm = () => {
  const [show, setShow] = useState(false);
  const onSubmit = () => {};
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, invalid }) => (
        <form onSubmit={handleSubmit}>
          <div className="j-btw space-x-6 mt-8">
            <Field
              validate={composeValidators(required, mustBeLettersOnly)}
              name="firstname"
            >
              {({ input, meta }) => (
                <div className="w-full sm:w-1/2">
                  <label className="label" htmlFor="firstname">
                    First name
                  </label>
                  <input
                    className={`${
                      meta.error && meta.touched
                        ? "form-control-error"
                        : "form-control"
                    }  mt-2`}
                    {...input}
                    id="firstname"
                    type="text"
                    placeholder="First name"
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
              validate={composeValidators(required, mustBeLettersOnly)}
              name="lastname"
            >
              {({ input, meta }) => (
                <div className="w-full sm:w-1/2">
                  <label className="label" htmlFor="lastname">
                    First name
                  </label>
                  <input
                    className={`${
                      meta.error && meta.touched
                        ? "form-control-error"
                        : "form-control"
                    }  mt-2`}
                    {...input}
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                  />

                  {meta.error && meta.touched && (
                    <span className={meta.error ? "text-red" : "hidden"}>
                      {meta.error}
                    </span>
                  )}
                </div>
              )}
            </Field>
          </div>

          <Field
            validate={composeValidators(required, mustBeEmail)}
            name="email"
          >
            {({ input, meta }) => (
              <div className="w-full my-6">
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
              <div className="w-full">
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

          <button
            disabled={invalid}
            className="w-1/2 btn btn-orange mt-6 block text-center disabled:cursor-not-allowed disabled:bg-ash"
          >
            Create Account
          </button>
        </form>
      )}
    />
  );
};

export default SignupForm;
