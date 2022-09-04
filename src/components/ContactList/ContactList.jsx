import React from "react";
import { StyledUl } from "./ContactList.styled";
import { ContactItem } from "../ContactItem";
import { useSelector } from "react-redux";

export function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <StyledUl>
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </StyledUl>
  );
}
