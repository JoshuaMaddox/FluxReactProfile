import AppDispatcher from '../AppDispatcher'
import { EventEmitter } from 'events'

let _profile = {
      photo: '',
      name: '',
      desc: ''
  };

const ProfileStore = Object.assign({}, EventEmitter.prototype,{

  startListening(callback) {
    this.on('CHANGE', callback);
  },

  stopListening(callback){
    this.removeListener('CHANGE', calback)
  },

  getAll(){
    return _profile;
  }
});

AppDispatcher.register(action => {

const { type, payload } = action;
switch(type) {
  case 'CREATE_PROFILE':
    const { profile } = payload;
    _profile = profile
    ProfileStore.emit('CHANGE')
    break;
}
});

export default ProfileStore;