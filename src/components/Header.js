import React from 'react';

const Header = () => {
    return (
        <header className="site-header">
            <style>
                {`
                    .site-header {
                        background-color: #f8f9fa;
                        padding: 10px 0;
                    }

                    .container {
                        width: 90%;
                        max-width: 1200px;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .header-top {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                    }

                    .left-content, .center-content, .right-content {
                        flex: 1;
                        text-align: center;
                    }

                    .site-title1, .site-title {
                        margin: 0;
                        font-size: 24px;
                    }

                    .site-title {
                        font-size: 28px;
                    }

                    .site-navigation {
                        width: 100%;
                    }

                    .site-navigation ul {
                        list-style-type: none;
                        padding: 0;
                        margin: 0;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    .site-navigation ul li {
                        margin: 5px 10px;
                    }

                    .site-navigation ul li a {
                        text-decoration: none;
                        color: #007bff;
                        font-size: 16px;
                    }

                    .site-navigation ul li a:hover {
                        text-decoration: underline;
                    }

                    @media (max-width: 768px) {
                        .header-top {
                            flex-direction: column;
                        }

                        .site-navigation ul {
                            flex-direction: column;
                            align-items: center;
                        }

                        .site-navigation ul li {
                            margin: 10px 0;
                        }
                    }

                    @media (max-width: 480px) {
                        .site-title1, .site-title {
                            font-size: 20px;
                        }

                        .site-navigation ul li a {
                            font-size: 14px;
                        }
                    }
                `}
            </style>
            <div className="container">
                <div className="header-top">
                    <div className="left-content">
                        <h1 className="site-title1">Subscribe</h1>
                    </div>
                    <div className="center-content">
                        <h1 className="site-title center-title">Cricket Blog</h1>
                    </div>
                    <div className="right-content">
                    </div>
                </div>
                <hr />
                <nav className="site-navigation">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/matches">Matches</a></li>
                        <li><a href="/players">Players</a></li>
                        <li><a href="/teams">Teams</a></li>
                        <li><a href="/rankings">Rankings</a></li>
                        <li><a href="/stats">Stats</a></li>
                        <li><a href="/live-scores">Live Scores</a></li>
                        <li><a href="/fixtures">Fixtures</a></li>
                        <li><a href="/results">Results</a></li>
                        <li><a href="/photos">Photos</a></li>
                        <li><a href="/videos">Videos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
