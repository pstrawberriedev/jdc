import Promise from 'bluebird'
import uuidV1 from 'uuid/v1'
import moment from 'moment'
import UIEle from '../ui/elements'
import State from './state'

const Util = {

  LS(directive, options) {
      if(directive === 'get') {
        if(options.key) {
          return JSON.parse(window.localStorage.getItem(options.key))
        } else {
          new Error('Invalid key provided for Util.LS("get"). Expecting key: Util.LS("get", {key:"keyname"})')
        }
      }
      if(directive === 'set') {
        if(options.key && options.value) {
          const stringValue = JSON.stringify(options.value)
          window.localStorage.setItem(options.key, stringValue)
        } else {
          new Error('Invalid value(s) provided for Util.LS("set"). Expecting key/value pair: Util.LS("set", {key:"somekey", value:{some:"object"}}).')
        }
      }
  },

  loader(options) {
    if(options.show === true) {
      if(options.message) {
        UIEle.loaderMessage.html('')
        UIEle.loaderMessage.html(options.message)
      }
      UIEle.loader.show()
    }
    if(options.show === false) {
      UIEle.loader.hide()
    }
    if(options.show != true && options.show != false) {
      new Error('Expected {show:true} or {show:false} to be passed in to Util.loader function.')
    }
  },

  uid() {
    return uuidV1()
  },

  unixTimestamp() {
    return moment().unix()
  }

}

export default Util
