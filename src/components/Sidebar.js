import React from 'react';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <section className="about">
                <h4>About</h4>
                <p>Cricblog is a cricket blog for the fans, by the fans.</p>
            </section>
            <section className="archives">
                <h4>Archives</h4>
                <ul>
                    <li><a href="/">March 2014</a></li>
                    <li><a href="/">February 2014</a></li>
                    {/* Add more archive links */}
                </ul>
            </section>
            <section className="elsewhere">
                <h4>Elsewhere</h4>
                <ul>
                    <li><a href="/">GitHub</a></li>
                    <li><a href="/">Twitter</a></li>
                    <li><a href="/">Facebook</a></li>
                </ul>
            </section>
        </aside>
    );
};

export default Sidebar;
