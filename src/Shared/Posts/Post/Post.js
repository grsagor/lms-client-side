import React from 'react';
import NormalPost from '../PostTypes/NormalPost';
import QuizPost from '../PostTypes/QuizPost';
import AssignmentPost from '../PostTypes/AssignmentPost';

const Post = ({posts}) => {
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