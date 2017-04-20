import $ from 'jquery'
import UIEle from './elements'
import moment from 'moment'

const singleThought = function(text, date) {
  let momentDate = moment.unix(date)
  momentDate = momentDate.from(moment())
  return (
    '<div class="card card--ib" data-date="' + date + '"><div class="card-date">' + momentDate + '</div>' + text +
    '<div class="card-delete"><span class="icon-cross"></span></div></div>'
  )
}

const Render = {

  status: {
    thoughts:false
  },

  renderThoughts(data) {
    if(!UIEle.thoughts_container.length) return
    console.log('--> Rendering Thoughts')
    UIEle.thoughts_container.html('')//not the best way to do this lol. time2react
    const dataArr = Object.keys(data)
    dataArr.forEach(function(child) {
      const date = child
      const text = data[child].text
      UIEle.thoughts_container.prepend(singleThought(text, date))//lol
    })
  }

}

export default Render
