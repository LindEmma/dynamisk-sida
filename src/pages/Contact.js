import Form from "../components/Contact-form/Form";

{
  /* The contact page - imports a form from Form.js */
}
export default function Contact() {
  return (
    <>
      <h1 id="contact-h1">Kontakt</h1>
      <div className="contact-container">
        <Form></Form>
      </div>
    </>
  );
}
