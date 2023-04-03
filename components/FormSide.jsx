import Image from 'next/image';
import styles from '../css/login.module.css';
import logo from '../images/Logo_icon.svg';

export default function FormSide({
  title,
  paragraph1,
  paragraph2 = null,
  paragraph3 = null,
  button = null,
}) {
  return (
    <div className={styles.sideContainer}>
      <Image
        className=" self-start"
        src={logo}
        width={180}
        alt="code circle icon"
      />
      <div className={styles.sideTitle}>{title}</div>
      <p className={styles.description}>{paragraph1}</p>
      <p className={styles.description}>{paragraph2}</p>
      <p className={styles.description}>{paragraph3}</p>

      <div className={styles.side_btn}>{button}</div>
    </div>
  );
}
