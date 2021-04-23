import React from "react";
import PropTypes from 'prop-types';
import Section from "./Section";

function SectionDetail (props) {
  const { section, onClickingDelete } = props;
  return (
  <> 
    <h1>Section Detail</h1>
    <h2>{section.name} - {section.tableCount}</h2>
    <button onClick={() => onClickingDelete(section.id)}>Delete server section</button>
  </>
)

}

SectionDetail.propTypes = {
  section: PropTypes.object,
  onClickingDelete: PropTypes.func
}
export default SectionDetail;