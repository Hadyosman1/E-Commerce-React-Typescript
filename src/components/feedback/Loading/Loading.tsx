import styles from "./styles.module.css";
const { loader, dot } = styles;

const Loading = () => {
  return (
    <div className="position-relative p-5 my-5">
      <div className={loader}>
        <div className={dot}></div>
        <div className={dot}></div>
        <div className={dot}></div>
        <div className={dot}></div>
        <div className={dot}></div>
        <div className={dot}></div>
        <div className={dot}></div>
        <div className={dot}></div>
      </div>
    </div>
  );
};

export default Loading;
