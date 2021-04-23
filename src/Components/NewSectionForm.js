import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewSectionForm(props) {
  function handleNewSectionFormSubmission(event) {
    event.preventDefault();
    props.onNewSectionCreation({
      name: event.target.name.value,
      tableCount: event.target.tableCount.value,
      id: v4()
    });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewSectionFormSubmission}
        buttonText="Create Section"
        headerText="New Section"
      />
    </>
  )
}

export default NewSectionForm;