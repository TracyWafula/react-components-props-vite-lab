import React from 'react';

export default function Article({post}){
    return(
        <div>
            <article>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
                <p>{post.preview}</p>
            </article>
        </div>
    )
}
