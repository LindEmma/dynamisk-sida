import "./Form.css";

export default function Form() {
  return (
    <div className="contact-form">
      <form>
        <p>Vänligen fyll i uppgifterna nedan och skicka så återkommer jag!</p>
        <br></br>
        <label>Name</label>
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
        <label>Message</label>
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
          value="Send"
        />
      </form>
      <script></script>
    </div>
  );
}
