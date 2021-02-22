import PropTypes from "prop-types";

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import style from "./contact.module.css";



const Contacts = ({ persons, onDelete }) => (
  <TransitionGroup component="ul">
    {persons.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={250} classNames="style" >
          <li  className={style.contactItem} id={id}>
        <p>
          {name} {number}
        </p>
        <button
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </li>
    </CSSTransition>
    ))}
</TransitionGroup>
);

Contacts.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;