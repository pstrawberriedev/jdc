import Promise from 'bluebird'
import * as firebase from 'firebase'
import Util from '../util/util'
import State from '../util/state'
import Modals from '../components/modals'
import Alerts from '../components/alerts'
import Errors from '../components/errors'
import Admin from '../components/admin'
import Render from '../ui/render'

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
        return user
      } else {
        return false
      }
    })
  },

  newThought(text, picture) {
    return new Promise(function(resolve, reject) {

      Util.loader({show:true, message:'Adding thought'})
      let newThought = {
        text: text
      }
      if(picture) {
        newThought.picture = picture
      }
      firebase.database().ref('thoughts/' + Util.unixTimestamp()).set(newThought)
      .then(function() {
        Util.loader({show:false})
        resolve()
      })
      .catch(function(error) {
        Util.loader({show:false})
        Errors.showError(error.message)
        reject(
          new Error(error.message)
        )
      })

    })
  },

  attachListeners() {
    // Thoughts
    const thoughtsRef = firebase.database().ref('thoughts/')
    thoughtsRef.once('value', function(snapshot) {
      Render.renderThoughts(snapshot.val())
    })
  }

}

export default FB
