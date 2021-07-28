import React, { Component } from "react";
import PropTypes from "prop-types";
import "modern-normalize/modern-normalize.css";
import Section from "./components/Section";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";

class App extends Component {
  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <Filter />
          <Contacts />
        </Section>
      </>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default App;
