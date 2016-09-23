import React from 'react';

const EditForm = React.createClass({

  getInitialState(){
    return{
      editedForm: false,
      buttonName: 'Start Your Profile'
    }
  },

submitForm(e) {
    e.preventDefault();
    const { nameInput, photoInput, descInput } = this.refs;
    let photo = photoInput.value,
        name = nameInput.value,
        desc = descInput.value,
        id = Date.now();
    nameInput.value = '';
    photoInput.value = '';
    descInput.value = '';
    nameInput.focus();
    this.setState({
        buttonName: 'Edit Your Profile'
      })
    this.props.addProfile(photo, name, desc, id);
  },

  render(){

    const { profile, addProfile, editForm } = this.props

    return(
      <form onSubmit={this.submitForm}>
        <div className="form-group">
          <label htmlFor="name">A NAME FOR YOUR PROFILE:</label>
          <input defaultValue={profile.name} className="form-control" ref='nameInput' type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="photo">PROFILE PHOTO URL:</label>
          <input defaultValue={profile.photo} className="form-control" ref='photoInput' type='url' />
        </div>
        <div className="form-group">
          <label htmlFor="description">TELL US ABOUT YOURSELF:</label>
          <input defaultValue={profile.desc} className="form-control" ref='descInput' type='text' /> 
         </div>
        <button onClick={this.submitForm} >SUBMIT</button>
      </form>
    )
  }
})

export default EditForm