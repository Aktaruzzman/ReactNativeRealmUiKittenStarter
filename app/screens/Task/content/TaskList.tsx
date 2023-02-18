import React from 'react'
import { FlatList } from 'react-native'
import { Task } from '../../../models'
import { CommonProps } from '../../../types'
import { TaskItem } from './TaskItem'

export const TaskList: React.FC<CommonProps & {
    items: Realm.Results<Task & Realm.Object>,
    onChange: (task: Task & Realm.Object) => void,
    onDelete: (task: Task & Realm.Object) => void
}> = (props) => {
    const { items, onChange, onDelete } = props
    return (
        <FlatList contentContainerStyle={[]}
            data={items}
            keyExtractor={(item) => item._id.toHexString()}
            renderItem={({ item }) => <TaskItem {...props} item={item} handleStatus={() => onChange(item)} handleDelete={() => onDelete(item)} />}
        />
    )
}

