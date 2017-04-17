import $ from 'jquery'
const UIEle = {}

// Nav
UIEle.nav = $('.jdc-nav')
UIEle.navLink_li = $('.jdc-nav__link')
UIEle.navLink_a = $('.jdc-nav__link a')
UIEle.navIcon_li = $('.jdc-nav__icon')

// Menus
UIEle.menuLink = $('[data-open-menu]')
UIEle.menu = $('[data-menu]')

// Components
UIEle.loader = $('.jdc-loader')
UIEle.loaderMessage = $('.jdc-loader__message')
UIEle.modal = $('.jdc-modal')
UIEle.modal = $('.jdc-error')


export default UIEle
