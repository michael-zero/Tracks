import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TrackList from './TrackListScreen'
import TrackDetail from './TrackDetailScreen'

const Stack = createStackNavigator();

const MainFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackList" component={TrackList} />
      <Stack.Screen name="TrackDetail" component={TrackDetail} />
    </Stack.Navigator>
  );
}

export { MainFlow };