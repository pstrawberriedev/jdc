import Util from './util'
import moment from 'moment'

let State = {

  update(key, value) {
    return new Promise((resolve,reject) => {
      const currentState = Util.LS('get', {key:'jdc'})
      if(currentState === null) {
        reject(
          new Error('Local storage key "jdc" does not exist: can\'t update.')
        )
      }
      if(key && value) {
        currentState[key] = value
        console.log('Local State "' + key + '" updated')
        Util.LS('set', {key:'jdc', value:currentState})
        resolve()
      } else {
        reject(
          new Error('Expected key/value pair for State.update().')
        )
      }
    })
  },

  newState() {
    return new Promise((resolve, reject) => {
      let newMoment = moment()
      newMoment = newMoment.format('MMM-DD-YYYY hh:mm a')
      const currentState = {
        created: newMoment
      }
      Util.LS('set', {key:'jdc', value:currentState})
      console.log('-> Created new local storage State for josh.care')
      resolve()
    })
  }

}

export default State
