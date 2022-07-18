import { Container } from "@components/ui";
import styles from "./Home.module.css";

const Input = () => {
  return (
    <Container className="py-20 md:py-40">
      <div className="mx-auto flex flex-wrap md:items-center md:max-w-2xl">
        <p className="font-bold mb-4 md:mb-0 mr-6">Get Latest Updates</p>
        <div className="flex w-full md:w-3/5 rounded-md border-4 bg-black ">
          <button className="p-2 btn-ash">Subscribe</button>
          <input
            className={`px-6 md:px-8 w-full rounded-md focus:outline-none  focus-within:shadow-xl ${styles.placeholder}`}
            type="text"
            placeholder="Enter your e-mail to subscribe"
          />
        </div>
      </div>
    </Container>
  );
};

export default Input;
