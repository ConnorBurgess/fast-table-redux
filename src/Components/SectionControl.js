import React from 'react';
import NewSectionForm from './NewSectionForm';
import SectionList from './SectionList';
import SectionDetail from './SectionDetail';
import UpdateSectionForm from './UpdateSectionForm'
import { connect } from 'react-redux'
import * as a from '../actions/index'
import PropTypes from 'prop-types';
class SectionControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateFormVisible: false,
      selectedSection: null
    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.state.selectedSection != null) {
      this.setState({
        formVisible: false,
        selectedSection: null
      });
    } else {
      const toggleForm = a.toggleForm();
      dispatch(toggleForm);
    }
  }

  handleAddingNewSectionToList = (newSection) => {
    const { dispatch } = this.props;
    const action = a.addSection(newSection)
    dispatch(action);
    const toggleFormAction = a.toggleForm();
    dispatch(toggleFormAction);
  }

  handleUpdatingSection = (updatedSection) => {
    const newSectionList = this.state.sectionList.filter(section => section.id !== updatedSection.id).concat(updatedSection);
    this.setState({
      sectionList: newSectionList,
      updateFormVisible: false,
      selectedSection: null
    })
  }

  handleSeatingTable = (updatedSection) => {
    if (updatedSection.tableCount > 0) {
      updatedSection.tableCount--;
    }
    const newSectionList = this.state.sectionList.filter(section => section.id !== updatedSection.id).concat(updatedSection);
    this.setState({
      sectionList: newSectionList,
    });
  }

  handleReleasingTable = (updatedSection) => {
    if (updatedSection.tableCount < updatedSection.originalCount) {
      updatedSection.tableCount++;
    }
    const newSectionList = this.state.sectionList.filter(section => section.id !== updatedSection.id).concat(updatedSection);
    this.setState({
      sectionList: newSectionList
    })
  }
  handleChangingSelectedSection = (id) => {
    const selectedSection = this.props.completeSectionList[id];
    this.setState({ selectedSection: selectedSection });
  }

  handleDisplayingUpdateForm = (id) => {
    const selectedSection = this.props.completeSectionList[id];
    this.setState({
      updateFormVisible: true,
      selectedSection: selectedSection
    })
  }

  handleDeletingSection = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteSection(id);
    dispatch(action);
    this.setState({
      selectedSection: null
    });
  }

  render() {
console.log(this.props)
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.updateFormVisible) {
      currentlyVisibleState = <UpdateSectionForm section={this.state.selectedSection.id} onSectionUpdate={this.handleUpdatingSection} />
      buttonText = "Return to section List"
    } else if (this.state.selectedSection != null) {
      currentlyVisibleState = <SectionDetail section={this.state.selectedSection}
        onClickingSeat={this.handleSeatingTable}
        onClickingDelete={this.handleDeletingSection}
        onClickingRelease={this.handleReleasingTable} />
      buttonText = "Return to Section List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewSectionForm onNewSectionCreation={this.handleAddingNewSectionToList} />
      buttonText = "Return to Section List";
    } else {
      currentlyVisibleState = <SectionList
        sectionList={this.props.completeSectionList}
        onSectionSelection={this.handleChangingSelectedSection}
        onUpdateSection={this.handleDisplayingUpdateForm} />
      buttonText = "Add a new server section";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}
SectionControl.propTypes = {
  completeSectionList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    completeSectionList: state.completeSectionList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

SectionControl = connect(mapStateToProps)(SectionControl);
export default SectionControl;