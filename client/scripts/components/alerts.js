import UIEle from '../ui/elements'

const Alerts = {

  clearTimer() {
    if(Alerts.timer)
    clearTimeout(Alerts.timer)
  },

  showAlert(text, append, transparent) {
    Alerts.clearTimer()
    UIEle.alertText.html(text)
    if(transparent === true) {
      UIEle.alert.css({'background':'transparent', 'margin-bottom':'8px'})
    }
    if(append) {
      UIEle.alert.detach().prependTo(append)
      UIEle.alert.show()
      Alerts.timer = setTimeout(function(){ Alerts.hideAlert() },5000)
    } else {
      UIEle.alert.show()
      Alerts.timer = setTimeout(function(){ Alerts.hideAlert() },5000)
    }
  },

  hideAlert() {
    UIEle.alert.css({'background':'', 'margin-bottom':''})
    UIEle.alertText.html('')
    UIEle.alert.hide()
    UIEle.alert.detach().prependTo('.default-alert')
  }

}

export default Alerts
