import React from 'react';
import Section from './Section';
import PropTypes from 'prop-types';

function SectionList(props) {
  return (
    <>
      <hr/>
      {props.sectionList.map((section) => 
        <Section 
          whenSectionClicked={props.onSectionSelection}
          name={section.name}
          tableCount={section.tableCount}
          id={section.id}
          key={section.id}
        />
      )}
    </>
  );
}

SectionList.propTypes = {
  sectionList: PropTypes.array,
  onSectionSelection: PropTypes.func
};

export default SectionList;