import React from "react";
import { StyledInput } from "./Filter.styled";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { changeFilterInput } from "components/redux/actions";

export function Filter() {
  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    dispatch(changeFilterInput(value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <StyledInput
        type="text"
        name="query"
        // value={value}
        onChange={inputChangeHandler}
        id="query"
      />
    </>
  );
}

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };
