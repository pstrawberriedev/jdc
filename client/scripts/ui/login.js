import FB from '../firebase/firebase'
import UIEle from './elements'
import Util from '../util/util'
import Errors from '../components/errors'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'

const Login = {

  init() {

    // Login Modal Submit
    UIEle.modalLoginForm.on('submit', function(e) {
      e.preventDefault()
      Login.doLogin()
    })

  },

  doLogin() {
    const appendClass = '[data-modal="login"] .jdc-modal__body'
    if(!isEmail(UIEle.modalLoginEmail.val())) {
      Errors.showError('Invalid email address', appendClass, true)
      return
    } else if(!isLength(UIEle.modalLoginPassword.val(), {min:3,max:20})) {
      Errors.showError('Passwords must be 3-20 characters', appendClass, true)
      return
    } else {
      FB.modalLogin(UIEle.modalLoginEmail.val(), UIEle.modalLoginPassword.val())
    }

  }

}

export default Login
