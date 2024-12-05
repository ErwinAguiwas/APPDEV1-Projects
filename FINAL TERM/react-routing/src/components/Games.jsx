import { Link } from "react-router-dom"

const games = [
    {id: 1, name: 'Teamfight Tactics', description: 'This is the most popular auto battle game'},
    {id: 2, name: 'Valoratn', description: 'This is the Most Popular FPS Game in the World'},
    {id: 3, name: '2XKO', description: 'Upcoming 2v2 Tag Team Fighting Game'},
    {id: 4, name: 'League of Legends', description: 'This is the number one MOBA game'}
]

export default function Games() {
    return(
        <>
            <h1>Games List</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link to = {'/games/${game.id}'} state = {{game}}> {game.name.toLocaleUpperCase()} </Link> - 
                        {game.description} 
                    </li>
                ))}
                
            </ul>
        </>
    )
}