
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import style from './style.js'

const Button = (props) => {
  return (
    <TouchableOpacity
      style={style.button}
      onPress={props.action}>
      <Text style={style.buttonTextLight}>{props.text}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired
}

export default Button
