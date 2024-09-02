import React from 'react';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-text">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-description">{description}</p>
                </div>
                <div className="card-image">
                    <img src={imageUrl} alt={title} />
                </div>
            </div>
        </div>
    );
};

export default Card;
