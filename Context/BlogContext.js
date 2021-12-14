import React, { useReducer } from "react";

const BlogContext = React.createContext();  // can be thought of as a pipe/path which helps move information from parent to deeply nested component

const blogReducer = (state, action) => {
    switch(action.type){
        case 'add_blogpost' : {
            return [...state, {title : `Blog Post #${state.length + 1}`}]
        }
        default : {
            return state; 
        } 
    }
}

export const BlogProvider = ({children}) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);  

    const addBlogPost = () => {
        dispatch({type : 'add_blogpost'});
    }
    return <BlogContext.Provider value={{data : blogPosts, addBlogPost : addBlogPost()}}>
        {children}
    </BlogContext.Provider>
} 

export default BlogContext;


/*
Children :
when a parent component returns a child component within which there is another nested component, the parent component renders the child component and sends the 
nested component as props to the child which the child component accepts then renders it within in. This prop is called as children. It enables us to build custom 
components accepts othe components as an argument which shows up inside the custom component as a prop.

Provider :
When we create a blogContext object, we get access to the provider which accepts some information or is the source of information and makes it available to all our
child components. The provider is the mechanism which moves the actual information from parent to deeply nested child. 
*/