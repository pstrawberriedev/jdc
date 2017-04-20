import $ from 'jquery'
import Util from '../util/util'
import UIEle from './elements'
import FB from '../firebase/firebase'
import moment from 'moment'

const singleThought = function(text, date) {
  let momentDate = moment.unix(date)
  momentDate = momentDate.from(moment())
  return (
    '<div class="card" data-date="' + date + '"><div class="card-date">' + momentDate + '</div>' + text +
    '<div class="card-delete"><span class="icon-cross"></span></div></div>'
  )
}

const Render = {

  status: {
    thoughts:false
  },

  renderThoughts(data) {
    if(!UIEle.thoughts_container.length) return
    Util.loader({show:true,message:'Loading thoughts'})
    console.log('--> Rendering Thoughts')
    UIEle.thoughts_container.html('')//not the best way to do this lol. time2react
    const dataArr = Object.keys(data)
    dataArr.forEach(function(child) {
      const date = child
      const text = data[child].text
      UIEle.thoughts_container.prepend(singleThought(text, date))
    })
    if(FB.getCurrentUser()) {allowDelete()}
    // Delete thoughts
    function allowDelete() {
      console.log('deleting allowed')
      $('.jdc-thoughts [data-date] .card-delete').on('click', function() {
        const thoughtID = $(this).parent().attr('data-date')
        console.log('ding ' + thoughtID)
      })
    }
    Util.loader({show:false})
  }

}

export default Render
