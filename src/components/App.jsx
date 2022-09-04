import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
// import { useState, useEffect } from "react";

export default function App() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem("contacts"))
  //     ? [...JSON.parse(localStorage.getItem("contacts"))]
  //     : []
  // );
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
}
