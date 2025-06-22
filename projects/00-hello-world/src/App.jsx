import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {

    const users = [
        { userName: 'PicturesFoIder', isFollowing: false, name: 'Pictures For Iders'},
        { userName: 'kikobeats', isFollowing: true, name: 'Kiko Beats'},
        { userName: 'raulmaldonado', isFollowing: false, name: 'Raul Maldonado'},
        { userName: 'alexelcapo', isFollowing: false, name: 'Alex El Capo'},
    ]


    const adriz = { userName: 'PicturesFoIder'}

    return (
        <div className="app">
            {/* Pasar un objeto como props. Mala práctica */}
            {/* <TwitterFollowCard {...adriz}>Pictures For Iders</TwitterFollowCard> */}

           {
           users.map(user => (
            <TwitterFollowCard 
                key={user.userName} 
                userName={user.userName} 
                isFollowing={user.isFollowing}>{user.name}
            </TwitterFollowCard>
           ))}
        </div>
    )
}