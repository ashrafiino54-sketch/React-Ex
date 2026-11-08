
import useForm from "./hooks/useForm";

function App() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`
    );

    resetForm();
  };

  return (
    <div>
      <h2>Custom Hook</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />

        <br />

        <label>Message:</label>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
