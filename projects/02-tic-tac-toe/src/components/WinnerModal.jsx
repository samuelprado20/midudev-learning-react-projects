import { Square } from "./Square"
export function WinnerModal ({ winner, resetGame }) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Tie' : 'The winner is'

    return (
        <section className="winner">
            <div>
                <h1> { winnerText } </h1>

                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button onClick={resetGame}>Restart game</button>
                </footer>
            </div>
        </section>
    )
}