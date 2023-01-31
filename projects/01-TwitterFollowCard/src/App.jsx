import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángle Durán',
        isFollowing: true
    },
    {
        userName: 'samuelprado20',
        name: 'Samuel Prado',
        isFollowing: false
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => 
                    <TwitterFollowCard
                        key={userName} 
                        userName={userName} 
                        name={name}
                        initialIsFollowing={isFollowing}
                    />
                )
            }
        </section>
    )
}