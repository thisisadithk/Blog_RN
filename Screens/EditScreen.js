import React, { useContext } from "react";
import BlogPostForm from "../Components/BlogPostForm";
import { Context } from "../Context/BlogContext";

const EditScreen = ({navigation}) => {
    const {state, editBlogPost} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return <BlogPostForm initialValues={{title : blogPost.title, content : blogPost.content}} onSubmit={(title, content) => {
        editBlogPost(navigation.getParam('id'), title, content, () => {
            navigation.pop();
        });
    }} />
}

export default EditScreen; 
