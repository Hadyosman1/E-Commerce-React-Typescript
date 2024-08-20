import styles from "./styles.module.css";
const { entry_suspense_fallback, loader } = styles;

const PageSuspenseFallback = () => {
  return (
    <div className={`${entry_suspense_fallback}`}>
      <div className={`${loader}`}></div>
    </div>
  );
};

export default PageSuspenseFallback;
