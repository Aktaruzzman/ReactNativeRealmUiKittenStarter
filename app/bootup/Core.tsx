import 'react-native-get-random-values'
import React from 'react';
import { SYNC_CONFIG } from '../../sync.config'
import { OnlineApp } from './realm/OnlineApp';
import { OfflineApp } from './realm/OfflineApp';

export const Core = () => {
    
    return (
        SYNC_CONFIG.enabled ?
            (<OnlineApp appId={SYNC_CONFIG.appId} />)
            :
            (<OfflineApp />)
    )
} 
