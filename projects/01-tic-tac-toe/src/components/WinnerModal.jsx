export function WinnerModal ({winner, resetBoard}) {
    if(winner === null) return null;

    const winnerText = winner ? winner : 'Empate';
return  (
    <section className="winner">
      <h2>Winner: {winnerText}</h2>
      <button onClick={resetBoard}>Play again</button>
    </section>
  )
}
   
