import React from "react";
import PropTypes from 'prop-types';
import Section from "./Section";

function SectionDetail (props) {
  const { section, onClickingDelete, onClickingSeat, onClickingRelease } = props;
  return (
      <> 
    <h1>Section Detail</h1>
    <h2>{section.name} - {section.tableCount} of {section.originalCount} tables left</h2>
    <hr/>
    <button onClick={() => onClickingSeat(section)}>Seat table</button>
    <button onClick ={() => onClickingRelease(section)}>Release table</button>
    <br></br>
    <br></br>
    <button onClick={() => onClickingDelete(section.id)}>Delete server section</button>
  </>
)

}

SectionDetail.propTypes = {
  section: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingSeat: PropTypes.func,
  onClickingrelease: PropTypes.func
}
export default SectionDetail;