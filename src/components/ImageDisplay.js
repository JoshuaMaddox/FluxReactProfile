import React from 'react';
import EditForm from './EditForm';
import EditPhoto from './EditPhoto';

//delete to here
const ImageDisplay = props => {

  const { profile, editForm, addProfile , editFormButton } = props;

  return (
    <div className="continer">
      <div className="row">
        <div className="mainProfile">
          <div className='profileImg' id='image'>
            <img src={profile.photo} id="profileImage" /> 
          </div>
          <div className="profileName id" id="name">
            <h2 id="profileName">{profile.name}</h2>
          </div>
          <div className="profileDesc" id="descDiv">
            <p className="profileDesc" id="desc">{profile.desc}</p>
          </div>
          <div className="edit-button" id="">
            {editForm ? <EditForm editForm={editForm} addProfile={addProfile} profile={profile} /> : <EditPhoto editFormButton={editFormButton} />  }
          </div> 
          <div> 
           </div> 
          </div>
        </div>
      </div>

 // {this.state.editForm ? <ProfileForm
 //              profile={profile} 
 //              addProfile={this.addProfile} 
 //            /> : <div></div>}
     
  
  )
}

export default ImageDisplay;

