import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
 

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput style={styles.textBox} value={title} onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>Enter Content</Text>
            <TextInput style={styles.textBox} value={content} onChangeText={(content) => setContent(content)}/>
            <Button title="Save Blog Post" onPress={() => onSubmit(title, content)}/>
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues : {
        title : '',
        content : ''
    }
}

const styles = StyleSheet.create({
    textBox : {
        backgroundColor : 'lightgrey',
        fontSize: 13,
        borderColor : 'black',
        marginHorizontal : 15,
        marginBottom : 15,
        padding : 5
    },
    label : {
        fontSize : 15,
        marginBottom : 10,
        marginHorizontal : 15,
        fontWeight : 'bold'
    }
})

export default BlogPostForm;