import { StyleSheet } from 'react-native';
import React, {useContext} from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation, route}) => {

    const {state, editBlogPost} = useContext(Context);

    const { id } = route.params;

    const blogPost = state.find(blogPost => blogPost.id === id);

    return (

        <BlogPostForm 
            initialValues={{ title: blogPost.title, content: blogPost.content }} 
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => navigation.pop());
            }
        }/>

    )

}

export default EditScreen;

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        marginHorizontal: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginHorizontal: 5,
    }
})