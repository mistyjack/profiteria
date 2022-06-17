import { Container } from "@components/ui";
import styles from "../Home.module.css";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const CreateProfile = () => {
  return (
    <section className="ash-gradient">
      <Container className="justify-between md:items-center flex flex-wrap py-12">
        <Fade bottom>
          <div className="w-full md:w-5/12 pr-4">
            <h3 className="text-orange-red">Create a Free Profile</h3>
            <p className={`mb-12 mt-4 max-w-sm ${styles.body1}`}>
              Unfortunately, at the moment, we are limited by the laws of how
              many investors can join a plan(a limited company). This means that
              the amount invested receives limited ROI of 20%.
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="w-full md:w-7/12">
            <Image
              src="https://ik.imagekit.io/o79mipqfj/create_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653604224362"
              alt="leading_bit"
              width={705}
              height={436}
              layout="responsive"
            />
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default CreateProfile;
