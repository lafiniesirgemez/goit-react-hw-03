import s from "./Contact.module.css";
const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={s.card}>
      <div className={s.info}>
        <p className={s.text}>👤 {name}</p>
        <p className={s.text}>📞 {number}</p>
      </div>
      <button className={s.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
