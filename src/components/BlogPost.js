import React from 'react';

const BlogPost = () => {
    return (
        <section className="blog-posts">
            <div className="post">
                <h3>The CricBlog Podcast</h3>
                <p className="post-date">September 2, 2024 by Mark</p>
                <p>The Cricket Podcast,Hosted by Aussie Charbel Coorey and Indian Nash Sant, is a podcast for the fans, by the fans.</p>
                {/* Add more content here as per the design */}
            </div>
            <div className="post">
                <h3>Fantasy Cricket Tips</h3>
                <p className="post-date">September 2, 2024 by Jacob</p>
                <p>Dream11 Prediction articles for a wide range of matches around the world.</p>
                {/* Add more content here as per the design */}
            </div>
            <div className="post">
                <h3>Cricket Opinion</h3>
                <p className="post-date">September 02, 2024 by Chris</p>
                <p>Thoughts from fans on the game of cricket across formats: Tests, ODIs, T20s.</p>
                {/* Add more content here as per the design */}
            </div>
        </section>
    );
};

export default BlogPost;
