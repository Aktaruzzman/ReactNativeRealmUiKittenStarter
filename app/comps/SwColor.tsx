import React from 'react'
import { View } from 'react-native'
import { Button } from '@ui-kitten/components'
import { CheckmarkIcon } from '../icons/ReadyIcons'
import { setColor } from '../redux/features/reducers'
import { style } from '../styles'
import { colors } from '../themes/palette/indexing'
import { ColorInfo, ColorType, CommonProps } from '../types'


export const SwColor: React.FC<CommonProps & { palette: ColorType, buttonSize?: number }> = ({ palette, dispatch, buttonSize = 60 }) => {

  const render = (obj: ColorInfo) => obj.name === palette ?
    (<View key={obj.name} style={[style.col5, style.padding4]}>
      <Button accessoryLeft={CheckmarkIcon} style={[{ height: buttonSize, backgroundColor: obj.value, borderColor: obj.value }, style.borderRadius8]} onPress={() => dispatch && dispatch(setColor(obj.name))}></Button>
    </View>) :
    (<View key={obj.name} style={[style.col5, style.padding4]}>
      <Button style={[{ height: buttonSize, backgroundColor: obj.value, borderColor: obj.value }, style.borderRadius8]} onPress={() => dispatch && dispatch(setColor(obj.name))}></Button>
    </View>)

  return (
    <View style={[style.flexRowStart]}>
      {colors.map(render)}
    </View>
  )
}
