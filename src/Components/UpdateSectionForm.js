import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function UpdateSectionForm(props) {
  function handleUpdateSectionFormSubmission(event) {
    event.preventDefault();
    props.onSectionUpdate({
      name: event.target.name.value,
      tableCount: event.target.tableCount.value,
      originalCount: event.target.tableCount.value,
      id: props.section
    });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleUpdateSectionFormSubmission}
        buttonText="Update"
        headerText="Edit Section"
      />
    </>
  )
}

export default UpdateSectionForm;