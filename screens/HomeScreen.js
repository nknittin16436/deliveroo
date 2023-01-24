import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
const HomeScreen = () => {
    const navigation = useNavigation();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className='flex-1'>
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>


            {/* Search */}

            <View className="flex-row items-center space-x-2 pb-2  mx-4">
                <View className="flex-row items-center space-x-2 bg-gray-200 p-3 flex-1">
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput
                        placeholder='Restaurnats and Cuisines'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>


            {/* BODY */}

            <ScrollView className="bg-gray-100">
                {/* categories */}

                <Categories />
                {/* Featured */}

                <FeaturedRow
                    title="Featured"
                    description ="Paid placements from our partner"
                    featuredCategory="featured"
                />
                <FeaturedRow
                    title="Tasty Dicounts"
                    description ="Paid placements from our partner"
                    featuredCategory="discounts"
                />
                <FeaturedRow
                    title="Offers only for you"
                    description ="Paid placements from our partner"
                    featuredCategory="offers"
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const SafeViewAndroid = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});
export default HomeScreen