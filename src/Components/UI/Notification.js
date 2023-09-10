import classes from "./Notification.module.css";

const Notification = ({ res }) => {
  let specialClasses = "";

  if (res.status === "error") {
    specialClasses = classes.error;
  }
  if (res.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <p>{res.message}</p>
    </section>
  );
};

export default Notification;
