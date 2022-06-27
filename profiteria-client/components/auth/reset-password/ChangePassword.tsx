import { Container } from "@components/ui";
import {
  composeValidators,
  mustBeGreaterThan8,
  mustContainSpecialChar,
  required,
} from "@utils/validation.util";
import Link from "next/link";
import { useState } from "react";
import { Field, Form } from "react-final-form";

const ChangePassword = () => {
  const [show, setShow] = useState(false);
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
              <Field
                validate={composeValidators(
                  required,
                  mustBeGreaterThan8,
                  mustContainSpecialChar
                )}
                name="password"
              >
                {({ input, meta }) => (
                  <div className="my-6">
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
                disabled={invalid}
                className="w-full btn btn-orange bg-orange-red disabled:bg-ash disabled:cursor-not-allowed"
              >
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
