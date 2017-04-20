import $ from 'jquery'
const UIEle = {}

// ++
// Nav
UIEle.nav = $('.jdc-nav')
UIEle.navLink_li = $('.jdc-nav__link')
UIEle.navLink_a = $('.jdc-nav__link a')
UIEle.navIcon_li = $('.jdc-nav__icon')

// ++
// Components
//alert
UIEle.alert = $('.jdc-alert')
UIEle.alertText = $('.jdc-alert__text')
//error
UIEle.error = $('.jdc-error')
UIEle.errorText = $('.jdc-error__text')
//loader
UIEle.loader = $('.jdc-loader')
UIEle.loaderMessage = $('.jdc-loader__message')
//menus
UIEle.menuLink = $('[data-open-menu]')
UIEle.menu = $('[data-menu]')
//modals
UIEle.modalLink = $('[data-open-modal]')
UIEle.modal = $('[data-modal]')
UIEle.modalLoginForm = $('#login-form')
UIEle.modalLoginEmail = $('#login-email')
UIEle.modalLoginPassword = $('#login-password')
UIEle.modalLoginButton = $('#login-submit')
//admin
UIEle.admin_thoughtForm = $('#admin-thoughts')
UIEle.admin_thoughtText = $('#admin-thoughts-text')
UIEle.admin_thoughtSubmit = $('#admin-thoughts-submit')

// ++
// Thoughts
UIEle.thoughts_container = $('.jdc-thoughts')

export default UIEle
