import { FC } from "react";

interface ContainerProps {
  maxWidth?: string;
  disableGutters?: boolean;
  children: any;
  className?: string;
  [others: string]: any;
}

const Container: FC<ContainerProps> = ({
  maxWidth = "lg",
  disableGutters = false,
  children,
  className = "",
  ...others
}) => {
  let classList = `${className} mx-auto ${
    !disableGutters ? "px-4 xl:px-6" : ""
  } `;
  classList += maxWidth === "xl" ? " max-w-screen-xl" : "";
  classList += maxWidth === "lg" ? " max-w-screen-lg" : "";
  classList += maxWidth === "md" ? " max-w-screen-md" : "";
  classList += maxWidth === "sm" ? " max-w-screen-sm" : "";
  console.log(others);
  return (
    <div className={classList} {...others}>
      {children}
    </div>
  );
};

export default Container;
