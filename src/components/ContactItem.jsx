import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContactAction } from "components/redux/actions";

export function ContactItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const deleteButtonClickHandler = () => {
    dispatch(deleteContactAction(id));
  };

  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button id={id} type="button" onClick={deleteButtonClickHandler}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
