import $ from 'jquery'
import UIEle from '../ui/elements'

const Menus = {

  init() {
    Menus.currentMenu = ''
    Menus.registerMenus()
  },

  registerMenus() {

    UIEle.menuLink.on('click', function() {
      if(Menus.currentMenu === $(this).attr('data-open-menu')) {
        $('.menu-open').hide()
        $('[data-menu="' + Menus.currentMenu + '"]').removeClass('menu-open')
        Menus.currentMenu = ''
        return
      }
      if(Menus.currentMenu === '') {
        Menus.currentMenu = $(this).attr('data-open-menu')
        $('[data-menu="' + Menus.currentMenu + '"]').addClass('menu-open')
        $('[data-menu="' + Menus.currentMenu + '"]').show()
        return
      }
      if(Menus.currentMenu != '' && $('.menu-open').length) {
        $('[data-menu="' + Menus.currentMenu + '"]').hide()
        $('[data-menu="' + Menus.currentMenu + '"]').removeClass('menu-open')
        Menus.currentMenu = $(this).attr('data-open-menu')
        $('[data-menu="' + Menus.currentMenu + '"]').addClass('menu-open')
        $('[data-menu="' + Menus.currentMenu + '"]').show()
        return
      }
    })

    //Menu document click-offs
    $(document).on('click', function(e) {
      let currentMenuEle = $('[data-menu="' + Menus.currentMenu + '"]')
      let currentMenuLink = $('[data-open-menu="' + Menus.currentMenu + '"]')
      if(!$(e.target).closest(currentMenuEle).length && !$(e.target).closest(currentMenuLink).length && currentMenuEle.hasClass('menu-open')) {
        $('.menu-open').hide()
        $('[data-menu="' + Menus.currentMenu + '"]').removeClass('menu-open')
        Menus.currentMenu = ''
      }
    })

    // Log for dev
    console.log('-> Menus Loaded')

  },

  openMenu(name) {
    Menus.currentMenu = name
    $('[data-menu="' + name + '"]').addClass('menu-open')
    $('[data-menu="' + name + '"]').show()
  },

  closeMenus() {
    $('[data-menu]').removeClass('menu-open')
    $('[data-menu]').hide()
  }

}

export default Menus
