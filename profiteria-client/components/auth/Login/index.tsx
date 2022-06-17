import { Container } from "@components/ui";
import Link from "next/link";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Container style={{ minHeight: 450 }} className="w-full a-center">
      <div className="w-full mx-auto max-w-sm">
        <h3 className="text-bold">Log in to your dashboard</h3>
        <p className="my-4">
          New to Profiteria?
          <Link href="/signup">
            <a className="text-orange-red ml-2 hover:underline">
              Create an account
            </a>
          </Link>
        </p>
        <LoginForm />
      </div>
    </Container>
  );
};

export default Login;
