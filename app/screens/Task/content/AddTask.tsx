import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Input } from '@ui-kitten/components'
import { style } from '../../../styles'
import { CommonProps } from '../../../types'

export const AddTask: React.FC<CommonProps & { onSubmit: (description: string) => void }> = ({ onSubmit }) => {

    const [description, setDescription] = useState("")

    const handleSubmit = () => {
        onSubmit(description);
        setDescription("")
    }
    return (
        <>
            <View style={[style.flexRowStart,style.marginB12 ]}>
                <Input placeholder='Add Task' value={description} onChangeText={setDescription} size='large' style={[{ flex: 9, borderWidth: 2 }, style.marginR2]} returnKeyType="send" onSubmitEditing={handleSubmit} />
                <Button onPress={handleSubmit} size='large' style={[{ flex: 1 }]}>Add</Button>
            </View>
        </>
    )
}

