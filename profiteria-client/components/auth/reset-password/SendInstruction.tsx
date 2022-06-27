import { Container } from "@components/ui";
import {
  composeValidators,
  mustBeEmail,
  required,
} from "@utils/validation.util";
import Link from "next/link";
import { Field, Form } from "react-final-form";

const SendIstruction = () => {
  const onSubmit = () => {};
  return (
    <Container style={{ minHeight: 450 }} className="w-full a-center">
      <div className="w-full mx-auto max-w-sm">
        <h3 className="text-bold">Forgot password</h3>
        <p className="mt-4">
          Please provide your email. A link with instructions on how to reset
          your password will be sent.
        </p>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, invalid }) => (
            <form onSubmit={handleSubmit}>
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
              <button
                type="submit"
                disabled={invalid}
                className="w-full btn btn-orange bg-orange-red disabled:cursor-not-allowed disabled:bg-ash"
              >
                Send instructions
              </button>
            </form>
          )}
        />
        <Link href="/login">
          <a className="hover:underline text-orange-red text-center mt-6 block">
            Go back to Login
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default SendIstruction;
