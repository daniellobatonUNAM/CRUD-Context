import React, {useContext, useLayoutEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';

import {Context, Provider} from '../context/BlogContext';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const IndexScreen = ({navigation}) => {

    const {state, deleteBlogPost} = useContext(Context);

    const createIconNav = useNavigation();

    useLayoutEffect(() => {
        createIconNav.setOptions({
        headerRight: () => (
        <TouchableOpacity onPress={() => createIconNav.navigate('Create')}>
            <Feather name="plus" size={24} color="black" />
        </TouchableOpacity>
        ),
    });
    }, [createIconNav]);

    return (
            <View>
                <FlatList
                    data={state}
                    keyExtractor={(blogPost) => blogPost.title}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                                    <Feather style={styles.icon} name="trash" size={24} color="black" />
                                </TouchableOpacity>
                                
                            </View>
                        </TouchableOpacity>
                    )}
                /> 
            </View>
    );

}

export default IndexScreen;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    }
})