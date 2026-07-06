import s from "./SearchBox.module.css";
const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.container}>
      <p className={s.label}>Find Contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};
export default SearchBox;
