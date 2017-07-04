/**
 * Screen push reducer
 */

import t from '../actions/actionTypes'

import { miscColors } from '../colors'
import { catImages } from '../images'

function generateRandomColors () {
  let randomColors = []
  let maxVal = miscColors.length-1
  let minVal = 0
  Array(3).fill().map((item, index) => {
    let randomValue = Math.round((Math.random() * (maxVal - minVal) + minVal))
    randomColors.push(miscColors[randomValue])
  })
  return randomColors
}

function pickRandomImage () {
  let maxVal = catImages.length-1
  let minVal = 0
  let randomValue = Math.round((Math.random() * (maxVal - minVal) + minVal))
  return catImages[randomValue]
}

const defaultState = {
  screens: [{
    colors: generateRandomColors (),
    image: pickRandomImage ()
  }]
}

const pushReducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.UPDATE_SCREENS:
    {
      // 1) Pull out the list of existing screens
      let screens = state.screens
      screens.map((screen) => {
        screen.colors = generateRandomColors ()
        screen.image = pickRandomImage ()
      })
      return Object.assign({}, state, {
        screens: screens
      })
    }
    case t.POP_SCREEN:
     {
        let screens = state.screens
        console.log('Old screen count is ', screens.length);
        screens.pop()
        console.log('New screen count is ', screens.length);
        return Object.assign({}, state, {
          screens: screens
        })        
     }
    case t.PUSH_SCREEN:
      {
        // 1) Pull out the list of existing screens
        let screens = state.screens
        // Generate a new screen
        // screate new values for screen, i.e new colors or something like that
        // TODO: write new colors generating function
        // name = screens.length+1
        // let randomValue = (0, miscColors.length) => (Math.random() * (maxVal - minVal) + minVal)

        let randomColors = generateRandomColors()
        let image = pickRandomImage ()
        let screen = {
          colors: randomColors,
          image : image
        }
        screens.push(screen)
        return Object.assign({}, state, {
          screens: screens
        })
      }
    default:
      return state
  }
}

export default pushReducer
