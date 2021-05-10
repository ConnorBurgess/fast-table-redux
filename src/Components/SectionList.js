import React from 'react';
import Section from './Section';
import PropTypes from 'prop-types';

function SectionList(props) {
  const { onSectionSelection, onUpdateSection, sectionList } = props;
  return (
    <>
      <hr />
      {Object.values(sectionList).map((section) =>
        <Section
          whenSectionClicked={onSectionSelection}
          whenUpdateSectionClicked={onUpdateSection}
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
  sectionList: PropTypes.object,
  onSectionSelection: PropTypes.func,
  onUpdateSection: PropTypes.func
};

export default SectionList;