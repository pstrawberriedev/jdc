import $ from 'jquery'
import UIEle from '../ui/elements'
import Util from '../util/util'
import Alerts from './alerts'
import Errors from './errors'
import FB from '../firebase/firebase'
import isLength from 'validator/lib/isLength'

const Admin = {

  init() {
    console.log('-> Admin activated')
    Admin.registerThoughts()
  },

  registerThoughts() {

    // Add thought
    UIEle.admin_thoughtForm.on('submit', function(e) {
      e.preventDefault()
      if(UIEle.admin_thoughtText.val() != '' && isLength(UIEle.admin_thoughtText.val(), {min:2,max:250})) {
        FB.newThought(UIEle.admin_thoughtText.val())
        .then(() => {
          Alerts.showAlert('Added new thought')
          UIEle.admin_thoughtText.val('')
        })
      } else {
        const appendClass = '[data-modal="login"] .jdc-modal__body'
        Errors.showError('Invalid thought content (2-250 characters, not blank)')
      }
    })

  }

}

export default Admin
