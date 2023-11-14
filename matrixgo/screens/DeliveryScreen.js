import { View, Text,Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import * as Icon from "react-native-feather";

export default function DeliveryScreen() {
  return (
    <View className="flex-1 bg-white justify-center items-center">
        <Image source={require('../assets/images/cooking-min.gif')} className="h-80 w-80" />

        <Text className="text-gray-700 font-extrabold">Preparing Order...</Text>

        <View className="rounded-t-3xl -mt-12 bg-white relative">
            <View className= "flex-row justify-between px-5 pt-10">
                <Text className="text-lg text-gray-700 font-semibold">
                    Estimated prep time
                </Text>
                
                <Text className="text-3xl font-extrabold text-gray-700">
                    15-20 Minutes
                </Text>
            </View>
            <View className="flex-row items-center space-x-3 mr-3">
                <TouchableOpacity onPress={()=> navigation.navigate('Home')} className="bg-white p-2 rounded-full">
                    <Icon.X stroke={'red'} strokeWidth={4} />
                </TouchableOpacity>
            </View>
        </View>
    </View>

  )
}