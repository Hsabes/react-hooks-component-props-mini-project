import React from 'react';
import blogData from '../data/blog';
import Article from './Article.js';

function ArticleList() {
    
    const posts = blogData.posts;

    const articles = posts.map((post) => {
        return (
            <Article key={post.id}
            title={post.title} 
            date={post.title} 
            preview={post.preview} />
        )
    })

    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;