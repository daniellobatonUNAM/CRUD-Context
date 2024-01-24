import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import { Context } from '../context/BlogContext';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({navigation, route}) => {
    
    const editIconNav = useNavigation();
    
    const {state} = useContext(Context);
    
    const { id } = route.params;
    
    const blogPost = state.find(blogPost => blogPost.id === id);

    useLayoutEffect(() => {
        editIconNav.setOptions({
        headerRight: () => (
        <TouchableOpacity onPress={() => editIconNav.navigate('Edit', {id})}>
            <Feather name="edit-2" size={24} color="black" />
        </TouchableOpacity>
        ),
    });
    }, [editIconNav]);

    return (

        <View>
            
            <Text>{blogPost.title}</Text>

            <Text>{blogPost.content}</Text>
            
        </View>

    )

}

export default ShowScreen

const styles = StyleSheet.create({})