import Promise from 'bluebird'
import $ from 'jquery'
import moment from 'moment'
import Util from './util/util'
import State from './util/state'
import Nav from './ui/nav'
import Menus from './components/menus'
import Modals from './components/modals'
import FB from './firebase/firebase'

// -----------------
// Soft Preload
// -----------------
$(window).on('load', () => {
  //get active page for nav
  Nav.getActivePage()

  //get current time
  const timeLoaded = new moment()
  const timeLoadedString = timeLoaded.format('hh:mm:ss a (MMM Do, YYYY)')

  //hide loader, print welcome message
  Util.loader({show:false})
  console.log('Josh.care - Loaded in at ' + timeLoadedString)
  console.log('Welcome to the console!')
  console.log('-----------------------------------------------------------')

  //initialize
  initialize()
})

// -----------------
// Initialize App
// -----------------
function initialize() {
  //check localStorage for info
  const currentUser = Util.LS('get', {key:'jdc'})
  const LSMessage = currentUser === null ? 'no local storage data found' : 'loaded local storage data:'
  console.log('-> App initialized - ' + LSMessage)

  if(currentUser === null) {
    return State.newState()
  } else {
    console.log(currentUser)
  }

  //initialize off page components
  Menus.init()
  Modals.init()

  //nav special page check
  Nav.getSpecialPage()

}
