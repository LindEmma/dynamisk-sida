import Form from "../components/Form";

export default function Contact() {
  return (
    <div className="contact-form">
      <h1>Kontakt</h1>
      <p>Vänligen fyll i uppgifterna nedan och skicka så återkommer jag!</p>
      <Form></Form>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      ></script>
    </div>
  );
}
