import $ from 'jquery'
import UIEle from './elements'
import Util from '../util/util'
import Modals from '../components/modals'
import Login from './login'
import FB from '../firebase/firebase'

const Nav = {

  getActivePage() {
    UIEle.navLink_a.each(function() {
      if(window.location.href.indexOf($(this).text().toLowerCase()) > -1) {
        const currentLink = $(this).text().toLowerCase()
        $('.jdc-nav__link a[href="/' + currentLink + '"]')
          .parent().addClass('jdc-nav__link--active')
      }
    })
  },

  getSpecialPage() {
    //Admin
    if(window.location.href.indexOf('/admin') > -1) {
        Login.init()
        Modals.openModal('login')

        // If the user has local data, pre-fill the login form
        const localData = Util.LS('get', {key:'jdc'})
        if(localData.user.email) {
          UIEle.modalLoginEmail.val(localData.user.email)
          UIEle.modalLoginPassword.focus()
        }
    }
  }

}

export default Nav
