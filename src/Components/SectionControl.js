import React from 'react';
import NewSectionForm from './NewSectionForm';


class SectionControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      sectionList: [],
      selectedSection: null
    };
  }

  handleAddingNewSectionToList = (newSection) => {
    const newSectionList = this.state.sectionList.concat(newSection);
    this.setState({
      sectionList: newSectionList, 
      formVisibleOnPage: false
    });
    console.log(this.state.sectionList);
  }
    render() {

    return (
      <>
      <NewSectionForm onNewSectionCreation={this.handleAddingNewSectionToList}/>
      </>
    )
  }
}

export default SectionControl;