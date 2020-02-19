import React from 'react';
import PropTypes from 'prop-types';

import Repos from './Repos';
import './User.css';


const User = props => {
    const { currentUserData, userRepos } = props;
    const { userData } = currentUserData;
    const { repos, isFetching } = userRepos;
    console.log(currentUserData);
    return (
        <div>
            
            <div className="user">
                <img
                    style={{ width: '200px', height: '200px' }}
                    src={userData.avatar_url}
                    alt="user"
                />
                <div className="content">
                    <h1>Name: <strong>{userData.name}</strong></h1>
                    <h2>Username: <strong>{userData.login}</strong></h2>
                    <h4>This user has <strong>{repos.length}</strong> repos</h4>
                    <small>** Click and hold any card to see some details **</small>
                </div>

            </div>
            {!currentUserData.isFetching &&
                !userRepos.isFetching &&
                repos.length === 0 && (
                    <h2>The user {userData.login} has no repos</h2>
                )}
            {!isFetching &&
                repos.length > 0 && (
                    <div>
                        <Repos repos={repos} />
                    </div>
                )}
        </div>
    );
};

User.propTypes = {
    currentUserData: PropTypes.object.isRequired,
    userRepos: PropTypes.object.isRequired,
};

export default User;
