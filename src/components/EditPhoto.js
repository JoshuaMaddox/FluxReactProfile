import React from 'react';

const EditPhoto = props => {
    const { editFormButton } = props;

    return (
      <button onClick={() => editFormButton()} className="editPhotoButton">edit me</button>
    )
}

export default EditPhoto; 


// let photo = e.target.getElementByID('profileImage').getAttribute('src')
    // let name = e.target.getElementByID('profileName')
    // let desc = e.target.getElementById('desc')
    // let id = e.target.getElementById('')
    // console.log('I am the edit button: ', photo, name, desc)
    // this.props.editPhoto(photo, name, desc)