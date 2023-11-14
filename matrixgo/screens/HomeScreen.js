import {View, Text, TextInput, ScrollView, Image} from 'react-native'
import React from 'react'
import {SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { StatusBar } from 'expo-status-bar';
import { themeColors } from '../theme'
import Categories from '../components/categories';
import { featured } from '../constants';
import FeaturedRow from '../components/featuredRow';

export default function HomeScreen() {
    return(
    <SafeAreaView className="bg-white">
<StatusBar barstyle="dark-content"/>

{/*search bar*/}
<View className="flex-row items-center space-x-2 px-4 pb-2 ">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                <Icon.Search height="25" width="25" stroke="gray" />
                <TextInput placeholder='Restaurants' className="ml-2 flex-1" />
                <View className="flex-row items-center space-x-1 border-l-2 pl-2 border-l-gray-300">
                <Icon.MapPin height="10" width="10" stroke="gray" />
                    <Text className="text-gray-600">WITS</Text>
                </View>
                
                </View>
                </View>
                {/*Main*/}

            <ScrollView showsVerticalScrollIndicator= {false}
                    contentContainerStyle={{
                        
                        paddingBottom: 20
                    }}
                    >

                  {/*categories*/}
                    <Categories/>


                    {/* featured */}
                 <View className="mt-5">
        {
            [featured, featured, featured].map ((item, index)=>{
                return(
                    
                <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
                />
                )
            })
        }
                 </View>
             </ScrollView>
                    
                
</SafeAreaView>
    )
}

