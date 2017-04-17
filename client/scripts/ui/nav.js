import $ from 'jquery'
import UIEle from './elements'

const Nav = {

  getActivePage() {
    UIEle.navLink_a.each(function() {
      if(window.location.href.indexOf($(this).text().toLowerCase()) > -1) {
        const currentLink = $(this).text().toLowerCase()
        $('.jdc-nav__link a[href="/' + currentLink + '"]')
          .parent().addClass('jdc-nav__link--active')
      }
    })
  }

}

export default Nav
