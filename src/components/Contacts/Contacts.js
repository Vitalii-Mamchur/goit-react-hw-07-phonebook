import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/Phonebook/phonebook-actions";
import PropTypes from "prop-types";
import styles from "./Contacts.module.css";

const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={styles.contacts}>
      {contacts.map((contact) => (
        <li className={styles.contacts_item} key={contact.id}>
          {contact.name + " : " + contact.number}
          {
            <div>
              <button
                className={styles.contacts_button}
                type="button"
                name="delete"
                onClick={() => {
                  onRemoveContact(contact.id);
                }}
              >
                delete
              </button>
            </div>
          }
        </li>
      ))}
    </ul>
  );
};

Contacts.prototype = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveContact: (id) => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
