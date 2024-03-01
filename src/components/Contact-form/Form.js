import "./Form.css";

export default function Form() {
  return (
    <>
      {/* A simple contact-form, no backend yet.*/}
      <form id="contact-form">
        <p>Vänligen fyll i uppgifterna nedan och skicka så återkommer jag!</p>
        <label>Namn</label>
        <input
          type="text"
          name="user_name"
        />
        <br></br>
        <label>Email</label>
        <input
          type="email"
          name="user_email"
        />
        <br></br>
        <label>Meddelande</label>
        <textarea
          name="message"
          type="message"
        />
        <br></br>
        <label for="urgent"> Kryssa i om ärendet är brådskande</label>
        <input
          type="checkbox"
          id="urgent"
          name="urgent"
          value="urgent"
        />
        <br />
        <br />
        <br />
        <input
          type="submit"
          value="Skicka"
        />
      </form>
      <script></script>
    </>
  );
}
