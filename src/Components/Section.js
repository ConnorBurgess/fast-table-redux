  
import React from 'react';
import PropTypes from 'prop-types';

function Section(props) {
  return (
    <>
      <div onClick = {() => props.whenSectionClicked(props.id)}>
        <h3>{props.name} - {props.tableCount} tables remaining</h3>
        <hr/>
      </div>
    </>
  );
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  tableCount: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenSectionClicked: PropTypes.func,
};

export default Section;