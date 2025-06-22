import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {
    const adriz = {isFollowing: false, userName: 'PicturesFoIder'}

    return (
        <div className="app">
            {/* Pasar un objeto como props. Mala práctica */}
            <TwitterFollowCard {...adriz}>Pictures For Iders</TwitterFollowCard>

            <TwitterFollowCard userName="kikobeats" isFollowing>Kiko Beats</TwitterFollowCard>
            <TwitterFollowCard>Raul Maldonado</TwitterFollowCard>
            <TwitterFollowCard userName="alexelcapo" isFollowing>Alex El Capo</TwitterFollowCard>
        </div>
    )
}