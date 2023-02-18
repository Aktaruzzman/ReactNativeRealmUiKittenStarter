import React, { useState } from 'react';
import { SafeArea } from '../comps/SafeArea';
import { HomeScreen } from '../screens/Home';
import { TaskScreen } from '../screens/Task';
import { ThemeScreen } from '../screens/Theme';

export type RouteName = "home" | "task" | "theme";

export const Router = (): React.ReactElement => {
    // Create your screen navigator  
    // Populate your screens  
    // Conditionally route the screen 
    // Or Use Router/Navigation library 

    const [route, setRoute] = useState<RouteName>("home")

    const handleRoute = (p: RouteName) => {
        setRoute(p)
    }

    return (
        <SafeArea insets="top" style={[{ flex: 1 }]}>
            {route === "home" && <HomeScreen handleRoute={handleRoute} />}
            {route === "task" && <TaskScreen handleRoute={handleRoute} />}
            {route === "theme" && <ThemeScreen handleRoute={handleRoute} />}
        </SafeArea>
    )
};




