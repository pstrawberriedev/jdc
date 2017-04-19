import UIEle from '../ui/elements'

const Errors = {

  clearTimer() {
    if(Errors.timer)
    clearTimeout(Errors.timer)
  },

  showError(text, append, transparent) {
    Errors.clearTimer()
    UIEle.errorText.html(text)
    if(transparent === true) {
      UIEle.error.css({'background':'transparent', 'color':'red', 'margin-bottom':'8px'})
    }
    if(append) {
      UIEle.error.detach().prependTo(append)
      UIEle.error.show()
      Errors.timer = setTimeout(function(){ Errors.hideError() },5000)
    } else {
      UIEle.error.show()
      Errors.timer = setTimeout(function(){ Errors.hideError() },5000)
    }
  },

  hideError() {
    UIEle.error.css({'background':'', 'color':'', 'margin-bottom':''})
    UIEle.errorText.html('')
    UIEle.error.hide()
    UIEle.error.detach().prependTo('.default-error')
  }

}

export default Errors
