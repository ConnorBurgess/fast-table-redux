import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewSectionForm(props) {
  const {onNewSectionCreation} = props;
  function handleNewSectionFormSubmission(event) {
    event.preventDefault();
    onNewSectionCreation({
      name: event.target.name.value,
      tableCount: parseInt(event.target.tableCount.value),
      originalCount: parseInt(event.target.tableCount.value),
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

NewSectionForm.propTypes = {
  currentlyVisibleState: PropTypes.func,
  onNewSectionCreation: PropTypes.func
};
export default NewSectionForm;