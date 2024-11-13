import styles from "./Header.module.scss";

interface Props {
  imgUrl: string;
}

const Header = ({ imgUrl }: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imgUrl} alt="" />
    </div>
  );
};

export default Header;
