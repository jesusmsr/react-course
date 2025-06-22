import './App.css';
import { useState } from 'react';

export function TwitterFollowCard({children ,userName = 'unknown', initialIsFollowing = false}) {
    // Hooks
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt="avatar" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{`@${userName}`}</span>
                </div>
            </header>
            <aside ><button className="tw-followCard-button" onClick={() => setIsFollowing(!isFollowing)}>{isFollowing ? 'Siguiendo' : 'Seguir'}</button></aside>
        </article>
    )
}