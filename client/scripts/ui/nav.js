import $ from 'jquery'
import UIEle from './elements'

const Nav = {

  init() {
    Nav.registerMenus()
  },

  getActivePage() {
    UIEle.navLink_a.each(function() {
      if(window.location.href.indexOf($(this).text().toLowerCase()) > -1) {
        const currentLink = $(this).text().toLowerCase()
        $('.jdc-nav__link a[href="/' + currentLink + '"]')
          .parent().addClass('jdc-nav__link--active')
      }
    })
  },

  registerMenus() {
    //prototype only - modify this to be universal!!

    // Settings menu
    UIEle.navLinkSettings.on('click', function() {
      if(UIEle.menuSettings.hasClass('js-active')) {
        UIEle.menuSettings.removeClass('js-active')
        UIEle.menuSettings.hide()
        UIEle.navLinkSettings.parent().removeClass('jdc-nav__icon--active')
      } else {
        UIEle.menuSettings.addClass('js-active')
        UIEle.menuSettings.show()
        UIEle.menuMessages.removeClass('js-active')
        UIEle.menuMessages.hide()
        UIEle.navLinkSettings.parent().addClass('jdc-nav__icon--active')
      }
    })
    // Messages menu
    UIEle.navLinkMessages.on('click', function() {
      if(UIEle.menuMessages.hasClass('js-active')) {
        UIEle.menuMessages.removeClass('js-active')
        UIEle.menuMessages.hide()
        UIEle.navLinkMessages.parent().removeClass('jdc-nav__icon--active')
      } else {
        UIEle.menuMessages.addClass('js-active')
        UIEle.menuMessages.show()
        UIEle.menuSettings.removeClass('js-active')
        UIEle.menuSettings.hide()
        UIEle.navLinkMessages.parent().addClass('jdc-nav__icon--active')
      }
    })


    // Menu document click-offs
    $(document).on('click', function(e) {
      //settings
      if(!$(e.target).closest(UIEle.navLinkSettings).length && !$(e.target).closest(UIEle.menuSettings).length && UIEle.menuSettings.hasClass('js-active')) {
        $('.menu-right').removeClass('js-active').hide()
        $('.jdc-nav__icon').removeClass('jdc-nav__icon--active')
      }
      //messages
      if(!$(e.target).closest(UIEle.navLinkMessages).length && !$(e.target).closest(UIEle.menuMessages).length && UIEle.menuMessages.hasClass('js-active')) {
        $('.menu-right').removeClass('js-active').hide()
        $('.jdc-nav__icon').removeClass('jdc-nav__icon--active')
      }
    })

  }

}

Nav.init()
export default Nav
