import React from 'react';
import EditForm from './EditForm'

const ProfileForm = React.createClass({

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
    this.props.addProfile(photo, name, desc, id);
  },



  render() {

    const { profile } = this.props

    return (
      <form onSubmit={this.submitForm}>
        <div className="form-group">
          <label htmlFor="name">Edit Name:</label>
          <input defaultValue={profile.name} className="form-control" ref='nameInput' type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Edit Photo:</label>
          <input defaultValue={profile.photo} className="form-control" ref='photoInput' type='url' />
        </div>
        <div className="form-group">
          <label htmlFor="description">Edit Descriotion:</label>
          <input defaultValue={profile.desc} className="form-control" ref='descInput' type='text' /> 
         </div>
        <button onClick={this.submitForm} >Start Profile</button>
      </form>
    )
  }
})

export default ProfileForm;
