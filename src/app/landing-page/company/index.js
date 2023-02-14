import styles from "./company.module.css";
import {COMPANY_IMAGES} from '../../constant';

function Company() {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_heading}>Backed By the Giants</div>
      <p className={styles.sub_heading}>
        They are not just the backers, but believers of what we do, and how we
        aim to change the ecosystem and become the part of the change.
      </p>
      <div className={styles.image_container}>
        <img
          alt="mesh"
          src={COMPANY_IMAGES.mesh}
          className={styles.image}
        />
        <img
          alt="tachyon"
          src={COMPANY_IMAGES.tachyon}
          className={styles.image}
        />
        <img
          alt="protocolLabs"
          src={COMPANY_IMAGES.protocolLabs}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default Company;
