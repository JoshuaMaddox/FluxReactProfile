import React from 'react';
import ProfileForm from './ProfileForm';
import ImageDisplay from './ImageDisplay';
import ProfileActions from '../actions/ProfileActions';
import ProfileStore from '../stores/ProfileStore';
import EditForm from './EditForm';
import EditPhoto from './EditPhoto';

const App = React.createClass({
  getInitialState() {
    return {
      profile: ProfileStore.getAll(),
      editForm: true
    }
  },

  addProfile(photo, name, desc, id) {
    let profile = {photo, name, desc, id}
    ProfileActions.createProfile(profile)

    //Now we need to set up the show form
    this.setState({
      editForm: !this.state.editForm
    })
  },

  componentWillMount(){
    ProfileStore.startListening(this._onChange)
  },

  componentWillUnmount(){
    ProfileStore.stopListening(this._onChange)
  },

  _onChange(){
    this.setState({
      profile: ProfileStore.getAll()
    })
  },

  editPhoto() {
    let profile = {photo, name, desc, id}
    console.log("I am editPhoto in App.js: ", photo, name, desc, id)
    // reset state.
  },

  editFormButton(){
    this.setState({
      editForm: !this.state.editForm
    })
  },

  render() {
    const { profile, editForm } = this.state;

    return (
      <div className='container mainContainer'>
        <div className="row">
            <ImageDisplay 
              profile={profile} 
              addProfile={this.addProfile}
              editForm={editForm} 
              editFormButton={this.editFormButton}
            />
          </div>
        </div>
    )
  }
})

export default App;