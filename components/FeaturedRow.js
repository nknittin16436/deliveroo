import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

const FeaturedRow = ({ title, description, featuredCategory }) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default FeaturedRow;
