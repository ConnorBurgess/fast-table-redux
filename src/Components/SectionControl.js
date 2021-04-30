import React from 'react';
import NewSectionForm from './NewSectionForm';
import SectionList from './SectionList';
import SectionDetail from './SectionDetail';
import SeatTableForm from './SeatTableForm';
class SectionControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      seatingFormVisible: false,
      sectionList: [],
      selectedSection: null
    };
  }

  handleClick = () => {
    if (this.state.selectedSection != null) {
      this.setState({
        formVisible: false,
        selectedSection: null
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  handleAddingNewSectionToList = (newSection) => {
    const newSectionList = this.state.sectionList.concat(newSection);
    this.setState({
      sectionList: newSectionList,
      formVisible: false
    });
  }

  handleSeatingTable = (updatedSection) => {
    if (updatedSection.tableCount > 0) {
      updatedSection.tableCount--;
    }
    const newSectionList = this.state.sectionList.filter(section => section.id !== updatedSection.id).concat(updatedSection).sort();
    this.setState({
      sectionList: newSectionList,
      seatingFormVisible: false
    });
  }
  handleChangingSelectedSection = (id) => {
    const selectedSection = this.state.sectionList.filter(section => section.id === id)[0];
    this.setState({ selectedSection: selectedSection });
  }

  handleDeletingSection = (id) => {
    const newSectionList = this.state.sectionList.filter(section => section.id !== id);
    this.setState({
      sectionList: newSectionList,
      selectedSection: null
    });
  }
  // handleSeatingSection = (id) => {
  //   const newSectionList = this.state.sectionList.filter(section => section.id !== id);
  //   this.section.setState({
  //     ...state,
  //     tableCount: tableCount - 1
  //   });
  // }
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedSection != null) {
      currentlyVisibleState = <SectionDetail section={this.state.selectedSection} onClickingSeat={this.handleSeatingTable} onClickingDelete={this.handleDeletingSection} />
      buttonText = "Return to Section List";
    } else if (this.state.formVisible) {
      console.log(this.state.sectionList);
      currentlyVisibleState = <NewSectionForm onNewSectionCreation={this.handleAddingNewSectionToList} />
      buttonText = "Return to Section List";
    } else {
      currentlyVisibleState = <SectionList sectionList={this.state.sectionList} onSectionSelection={this.handleChangingSelectedSection} />
      buttonText = "Add Section";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>

      </>
    )
  }
}

export default SectionControl;