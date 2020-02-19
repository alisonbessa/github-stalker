import React from 'react';
import PropTypes from 'prop-types';
import './Repos.css'

const Repos = props => (

    <div className="flex">    
        {props.repos.map(repo => (     
            <div className="repos">
                <div className="front">
                    <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                        <h2>{repo.name}</h2>
                    </a>
                    <small>{repo.description}</small><br/><br/>
                </div>
                <div className="back">
                    <p>
                        Created at {repo.created_at.substring(0, 10)}<br/>
                        This repo has {repo.stargazers_count} star(s).
                    </p>
                </div>
            </div>
        ))}
    </div>          
);

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default Repos;


// console.log((date.getMonth()+1) + '/' + date.getDate() + '/' +  date.getFullYear())