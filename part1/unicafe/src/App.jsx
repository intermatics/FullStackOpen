import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 
  
  const handleGood = ()=> setGood(good + 1)
  const handleNeutral = ()=>setNeutral(neutral + 1)
  const handleBad = ()=>setBad(bad + 1)
  const total = good+neutral+bad
  const average = total > 0 ? ( (1*good)+(-1*bad) ) / total : 0
  const positive = good > 0 ?  (good / total) * 100 : 0

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleGood}>good</button> <button onClick={handleNeutral} >neutral</button> <button onClick={handleBad}>bad</button>
      </div>
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
        <li>all { total }</li>
        <li>average {average}</li>
        <li>positive {positive} %</li>
      </ul>
    </div>
  )
}

export default App