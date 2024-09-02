import React from 'react';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import BlogPost from './components/BlogPost';
import Sidebar from './components/Sidebar';
import CricketPollForm from './components/BlogForm';
import Card from './components/Card';

import './App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <FeaturedPost />
            <div className="card-container">
                <Card 
                    title="The huge contrast between the home and away averages of Aiden Markram in Tests" 
                    description="Aiden Markram scored an important second innings half-century to help propel South Africa to a series win over West Indies in Guyana. He combined for a 79-run opening stand with Tony de Zorzi, which proved crucial in a low-scoring game along with the contributions of Kyle Verreynne (59) and Wiaan Mulder (34)." 
                    imageUrl="https://pbs.twimg.com/media/GVIEOpQaEAUT7XU?format=jpg&name=small" 
                />
                <Card 
                    title="Sunil Gavaskar: The man who was arguably 2nd to Bradman for so long" 
                    description="On July 10th, we commemorate the birthday of the legendary Sunil Gavaskar, whose name will shimmer as long as the game of cricket lasts; like an inextinguishable star in the galaxy.

Indian cricket virtually revolved around Gavaskar, who singlehandedly bore its mantle. Not many batsmen faced the lethal fast bowling as Sunny did, who broke batting records at a tempo unscaled since Bradman." 
                    imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXm0tJ-Q581O0oLDFKBdKxwpRYCIIRg50n4Lu0xL-5dZUqG-2dh6dJO1dr-4a90zWaQqyl_2Phe3WVqw30A3gpWoYDZC-DtnU99YcbWz1_T4z-rEs1iVYAX4ZFwQm_ieBLqXM270wCZYY3xIdoqWHRtg5p0nmhxHN6KXtH4IC9LfJEeESIii51jqhWd3-h/w640-h464-rw/52s8sdzs4cl61.png" 
                />
            </div>
            <div className="main-content">
                <BlogPost />
                <Sidebar />
            </div>
            <center><h1>Future Of Cricket Poll</h1></center>
            <CricketPollForm />
        </div>
    );
}

export default App;
