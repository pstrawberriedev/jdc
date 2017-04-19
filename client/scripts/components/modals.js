import $ from 'jquery'
import UIEle from '../ui/elements'

const Modals = {

  init() {
    Modals.currentModal = ''
    Modals.registerModals()
  },

  registerModals() {

    UIEle.modalLink.on('click', function() {
      if(Modals.currentModal === $(this).attr('data-open-modal')) {
        $('.modal-open').hide()
        $('[data-modal="' + Modals.currentModal + '"]').removeClass('modal-open')
        Modals.currentModal = ''
        return
      }
      if(Modals.currentModal === '') {
        Modals.currentModal = $(this).attr('data-open-modal')
        $('[data-modal="' + Modals.currentModal + '"]').addClass('modal-open')
        $('[data-modal="' + Modals.currentModal + '"]').show()
        return
      }
      if(Modals.currentModal != '' && $('.modal-open').length) {
        $('[data-modal="' + Modals.currentModal + '"]').hide()
        $('[data-modal="' + Modals.currentModal + '"]').removeClass('modal-open')
        Modals.currentModal = $(this).attr('data-open-modal')
        $('[data-modal="' + Modals.currentModal + '"]').addClass('modal-open')
        $('[data-modal="' + Modals.currentModal + '"]').show()
        return
      }
    })

    //Menu document click-offs
    $(document).on('click', function(e) {
      let currentModalEle = $('[data-modal="' + Modals.currentModal + '"]')
      let currentModalEleBody = $('[data-modal="' + Modals.currentModal + '"] .jdc-modal__body')
      let currentmodalLink = $('[data-open-modal="' + Modals.currentModal + '"]')
      if(!$(e.target).closest(currentModalEleBody).length && !$(e.target).closest(currentmodalLink).length && currentModalEle.hasClass('modal-open')) {
        $('.modal-open').hide()
        $('[data-modal="' + Modals.currentModal + '"]').removeClass('modal-open')
        Modals.currentModal = ''
      }
    })

    $(document).on('keyup', function(e) {
      let currentModalEle = $('[data-modal="' + Modals.currentModal + '"]')
      if(e.which === 27 && currentModalEle.hasClass('modal-open')) {
        $('.modal-open').hide()
        $('[data-modal="' + Modals.currentModal + '"]').removeClass('modal-open')
        Modals.currentModal = ''
      }
    })

    // Log for dev
    console.log('-> Modals Loaded')

  },

  openModal(name) {
    Modals.currentModal = name
    $('[data-modal="' + name + '"]').addClass('modal-open')
    $('[data-modal="' + name + '"]').show()
  },

  closeModal() {
    $('[data-modal]').removeClass('modal-open')
    $('[data-modal]').hide()
  }

}

export default Modals
