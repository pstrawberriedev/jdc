import $ from 'jquery'
import UIEle from '../ui/elements'
import Util from '../util/util'
import FB from '../firebase/firebase'
import isLength from 'validator/lib/isLength'

const Admin = {

  init() {
    console.log('-> Admin activated')
    Admin.registerThoughts()
  },

  registerThoughts() {

    UIEle.admin_thoughtSubmit.on('click', function() {
      if(UIEle.admin_thoughtText.val() != '' && isLength(UIEle.admin_thoughtText.val(), {min:2,max:250})) {
        console.log('can send m8!!')
      }
    })

  }

}

export default Admin
