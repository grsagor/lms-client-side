import React, { useContext, useEffect } from 'react';
import NormalPost from '../PostTypes/NormalPost';
import QuizPost from '../PostTypes/QuizPost';
import AssignmentPost from '../PostTypes/AssignmentPost';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from 'react-query';

const Post = () => {
    const {user} = useContext(AuthContext);
    const { data: userInfo = [], refetch } = useQuery({
        queryKey: ['postuser'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    useEffect(()=>{
        refetch()
    },[user]);
    const posts = userInfo[0]?.posts[0];
    return (
        <div>
            {
                posts?.map(post=><div>
                    {
                        post?.type === 'normal' ? <NormalPost post={post}></NormalPost> : post?.type === 'quiz' ? <QuizPost post={post}></QuizPost> : post?.type === 'task' ? <AssignmentPost post={post}></AssignmentPost> : null
                    }
                </div>)
            }
            
        </div>
    );
};

export default Post;