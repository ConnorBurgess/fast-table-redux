import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function UpdateSectionForm(props) {
  function handleUpdateSectionFormSubmission(event) {
    event.preventDefault();
    props.onSectionUpdate({
      name: event.target.name.value,
      tableCount: parseInt(event.target.tableCount.value),
      originalCount: parseInt(event.target.tableCount.value),
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
UpdateSectionForm.propTypes = {
  section: PropTypes.object.isRequired,
  onSectionUpdate: PropTypes.func
};
export default UpdateSectionForm;