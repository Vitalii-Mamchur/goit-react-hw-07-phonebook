import React from "react";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/Phonebook/phonebook-actions";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => (
  <label className={styles.filter_label}>
    Find contacts by name
    <input
      className={styles.filter_input}
      type="text"
      value={value}
      onChange={onChangeFilter}
    />
  </label>
);

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
