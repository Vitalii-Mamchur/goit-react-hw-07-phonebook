import React, { Component } from "react";
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

export default App;
