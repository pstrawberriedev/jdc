import * as firebase from 'firebase'
import Util from '../util/util'
import State from '../util/state'
import Modals from '../components/modals'
import Alerts from '../components/alerts'
import Errors from '../components/errors'
import Admin from '../components/admin'

const FBconfig = {
  apiKey: "AIzaSyCAa9u5A4jVbyHSrX0_jzhQug3t0uIrABI",
  authDomain: "joshdotcare.firebaseapp.com",
  databaseURL: "https://joshdotcare.firebaseio.com",
  projectId: "joshdotcare",
  storageBucket: "joshdotcare.appspot.com",
  messagingSenderId: "665773175772"
}
firebase.initializeApp(FBconfig)

const FB = {

  modalLogin(email, password) {
    Util.loader({show:true,message:'Authenticating'})
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user) {
      State.update('user', user)
      Util.loader({show:false})
      Modals.closeModal()
      Alerts.showAlert('Signed in as ' + user.email)
      console.log('-> Signed in as ' + user.email)
      Admin.init()
    })
    .catch(function(error) {
      Errors.showError(error.message, '[data-modal="login"] .jdc-modal__body', true)
      Util.loader({show:false})
      return
    })
  },

  getCurrentUser() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return user.email
      } else {
        return false
      }
    })
  },

  setThought(uid, text, picture) {
    let newThought = {
      uid: Util.uid(),
      date: Util.unixTimestamp(),
      text: text
    }
    if(picture) {
      newThought.picture = picture
    }
    firebase.database().ref('thoughts/' + newThought.uid).set(newThought)
  }

}

export default FB
