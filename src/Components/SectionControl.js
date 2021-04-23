import React from 'react';
import NewSectionForm from './NewSectionForm';
import SectionList from './SectionList';


class SectionControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
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
    console.log(this.state.sectionList);
  }
  handleChangingSelectedSection = (id) => {
    const selectedSection = this.state.sectionList.filter(section => section.id === id)[0];
    this.setState({selectedSection: selectedSection});
  }
    render() {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.selectedSection != null) {
        // currentlyVisibleState = <SectionDetail ticket={this.state.selectedTicket} onClickingDelete={this.handleDeletingTicket} />
        // buttonText = "Return to Ticket List";
      } else if (this.state.formVisible) {
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