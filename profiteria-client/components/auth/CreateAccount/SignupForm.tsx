import { Loading } from "@components/ui";
import { signup } from "@lib/api";
import { SignupData } from "@types";
import {
  composeValidators,
  mustBeEmail,
  mustBeGreaterThan8,
  mustBeLettersOnly,
  mustContainSpecialChar,
  required,
} from "@utils/validation.util";
import { useRouter } from "next/router";
import { useState } from "react";
import { Field, Form } from "react-final-form";

const SignupForm = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const onSubmit = async (values: SignupData) => {
    try {
      await signup(values);
      router.push("/signup/check-email");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, invalid, submitting }) => (
        <form onSubmit={handleSubmit}>
          <div className="md:flex md:space-x-6 mt-8">
            <Field
              validate={composeValidators(required, mustBeLettersOnly)}
              name="first_name"
            >
              {({ input, meta }) => (
                <div className="w-full md:w-1/2">
                  <label className="label" htmlFor="first_name">
                    First name
                  </label>
                  <input
                    className={`${
                      meta.error && meta.touched
                        ? "form-control-error"
                        : "form-control"
                    }  mt-2`}
                    {...input}
                    id="first_name"
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
              name="last_name"
            >
              {({ input, meta }) => (
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                  <label className="label" htmlFor="last_name">
                    Last name
                  </label>
                  <input
                    className={`${
                      meta.error && meta.touched
                        ? "form-control-error"
                        : "form-control"
                    }  mt-2`}
                    {...input}
                    id="last_name"
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
            type="submit"
            disabled={invalid || submitting}
            className="w-1/2 btn btn-orange bg-orange-red mt-6 block text-center disabled:cursor-not-allowed disabled:bg-ash"
          >
            Create Account&nbsp;&nbsp;
            <Loading loading={submitting} />
          </button>
        </form>
      )}
    />
  );
};

export default SignupForm;
