import React from 'react';
import UseTittle from '../../Hooks/UseTittle';
import Post from '../../Shared/Posts/Post/Post';

const Home = () => {
    UseTittle('Home');
    return (
       <Post></Post>
    );
};

export default Home;