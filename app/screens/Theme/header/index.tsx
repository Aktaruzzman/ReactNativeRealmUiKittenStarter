import React from 'react'
import { useUser } from '@realm/react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from '@ui-kitten/components'
import { style } from '../../../styles'
import { CommonProps } from '../../../types'
import { Row } from '../../../comps/Row'
import { Logout, SwTheme } from '../../../comps'
import { RouteName } from '../../../router'


export const Header: React.FC<CommonProps & { handleRoute: (p: RouteName) => void }> = (props) => {
  const { handleRoute } = props;
  const user = useUser();

  return (
    <Row {...props} height={50} level="3" borderPos='bottom'>
      <Text category='h6' status='primary'>{"Themes"}</Text>
      <View style={[style.flexRowEnd]}>
        <TouchableOpacity onPress={() => handleRoute("home")}><Text category='h6'>Home</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleRoute("task")} style={[style.paddingX16]}><Text category='h6'>Task</Text></TouchableOpacity>
        <SwTheme {...props} size={32} />
        {user && <Logout {...props} size={32} style={style.paddingL16} />}
      </View>
    </Row>

  )
}

