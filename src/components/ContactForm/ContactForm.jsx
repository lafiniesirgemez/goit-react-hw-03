import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  //initial Values -> form ilk açıldığında içindeki kutuların hangi değerlerle ve hangi isimlerle başlayacağı
  //onSubmit -> add contact butonuna basıldığında verilerin nereye gideceği

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    //App.jsx'den gelecek olan ekleme fonksiyonunu çağıracağız
    //values: formun içindeki veriler
    //actions: Formik'in bize sunduğu yardımcı araçlar (reset)
    onAdd({
      id: Date.now().toString(),
      ...values,
    });

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.inputGroup}>
          <label className={s.label}>Name</label>
          <Field className={s.field} type="text" name="name" />
          <ErrorMessage className={s.error} name="name" component="span" />
        </div>

        <div className={s.inputGroup}>
          <label className={s.label}>Number</label>
          <Field className={s.field} type="text" name="number" />
          <ErrorMessage className={s.error} name="number" component="span" />
        </div>

        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
