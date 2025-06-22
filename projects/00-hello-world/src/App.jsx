import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {


    const adriz = { userName: 'PicturesFoIder'}

    return (
        <div className="app">
            {/* Pasar un objeto como props. Mala práctica */}
            <TwitterFollowCard {...adriz}>Pictures For Iders</TwitterFollowCard>

            <TwitterFollowCard userName="kikobeats">Kiko Beats</TwitterFollowCard>
            <TwitterFollowCard>Raul Maldonado</TwitterFollowCard>
            <TwitterFollowCard userName="alexelcapo">Alex El Capo</TwitterFollowCard>
        </div>
    )
}