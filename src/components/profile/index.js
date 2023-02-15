import { useSession } from "next-auth/react";
import Navbar from "../navbar";
import styles from "./profile.module.css";

function Profile() {
  const { data: session } = useSession();
  return (
    <div className={styles.profile_container}>
      <Navbar />
      <div className={styles.subheader}>
        {session ? (
          <h1 className={styles.text}>
            Welcome to Chesslers! You are successfully Logged In.
          </h1>
        ) : (
          <h1 className={styles.text}>Access Denied!</h1>
        )}
      </div>
    </div>
  );
}

export default Profile;
