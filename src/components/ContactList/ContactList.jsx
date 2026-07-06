import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={s.list}>
      {contacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </div>
  );
};

export default ContactList;
