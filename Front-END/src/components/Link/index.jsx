import styles from "./link.module.css";
import { Link as HouterLink } from "react-router";

export const Link = ({ children, href, ...props }) => {
  const className = props.className || "";
  return (
    <HouterLink to={href} {...props} className={`${styles.link} ${className}`}>
      {children}
    </HouterLink>
  );
};
