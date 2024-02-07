import styles from "./AuthNav.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Logout from "../Logout/Logout";
import Button from "../Button/Button";

const AuthNav = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav>
      {session?.user ? (
        <Logout type={session.user.type} />
      ) : (
        <div className={styles.buttons}>
          <Button variant="outlined" component="a" href="/sign-in">
            Login
          </Button>
          <Button variant="filled" component="a" href="/sign-up">
            Signup
          </Button>
        </div>
      )}
    </nav>
  );
};

export default AuthNav;
