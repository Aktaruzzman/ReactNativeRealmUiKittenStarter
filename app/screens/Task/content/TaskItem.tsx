import React from 'react'
import { Task } from '../../../models'
import { Icon, Text } from '@ui-kitten/components'
import { Pressable, View } from 'react-native'
import { CommonProps } from '../../../types'
import { Row } from '../../../comps/Row'
import { style } from '../../../styles'

export const TaskItem: React.FC<CommonProps & {
  item: Task & Realm.Object
  handleDelete: () => void
  handleStatus: () => void
}> = (props) => {
  const {
    item,
    handleDelete,
    handleStatus,
    color,
  } = props

  return (
    <Row {...props}>
      <Pressable style={[style.flexRowSpace]} disabled={item?.isComplete} onPress={handleStatus}>
        <View style={[]}>
          {item?.isComplete ?
            <Icon pack='matcom' name='checkbox-marked-circle-outline' style={[{ width: 18, height: 18, color: color }]} fill={color} /> :
            <Icon pack='matcom' name='checkbox-blank-circle-outline' style={[{ width: 18, height: 18, color: color }]} fill={color} />}
        </View>
        <Text style={[item?.isComplete && { textDecorationLine: "line-through" }]}>
          {item?.description}
        </Text>
      </Pressable>
      <Pressable style={[style.flexRowSpace]} onPress={handleDelete}>
        <Icon pack='eva' name='trash-outline' style={[{ width: 18, height: 18, color: color }]} fill={color} />
        <Text>{"Del"}</Text>
      </Pressable>
    </Row>

  )
}

