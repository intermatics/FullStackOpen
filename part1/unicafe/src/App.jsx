import { useState } from 'react'


const Statistics = (props) => {


  if (props.stats.good == 0 && props.stats.neutral == 0 && props.stats.bad == 0) {
    return (
      <div>
        <h1>statistics</h1>
          <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <ul>
        <li>good {props.stats.good}</li>
        <li>neutral {props.stats.neutral}</li>
        <li>bad {props.stats.bad}</li>
        <li>all {props.stats.total}</li>
        <li>average {props.stats.average}</li>
        <li>positive {props.stats.positive} %</li>
      </ul>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)
  const total = good + neutral + bad

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: good + neutral + bad,
    average: total > 0 ? ((1 * good) + (-1 * bad)) / total : 0,
    positive: good > 0 ? (good / total) * 100 : 0
  }


  return (
    <>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleGood}>good</button> <button onClick={handleNeutral} >neutral</button> <button onClick={handleBad}>bad</button>
      </div>
      <Statistics stats={stats} />
    </>
  )
}

export default App