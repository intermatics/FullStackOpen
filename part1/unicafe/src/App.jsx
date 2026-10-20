import { useState } from 'react'

const StatisticLine = (props) => {

  return(
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}

const Statistics = (props) => {


  if (props.stats.good == 0 && props.stats.neutral == 0 && props.stats.bad == 0) {
    return (
      <div> 
          <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div> 
      <table>
        <tbody>
        <StatisticLine text="good" value={props.stats.good} /> 
        <StatisticLine text="neutral" value={props.stats.neutral} />
        <StatisticLine text="bad" value={props.stats.bad} />
        <StatisticLine text="all" value={props.stats.total} />
        <StatisticLine text="average" value={props.stats.average} />
        <StatisticLine text="positive" value={`${props.stats.positive} %`} />
        </tbody>
      </table>
    </div>
  )

}

const Button = (props) => {

  return(
    <button onClick={props.onClick}>{props.text}</button>
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
        <Button onClick={handleGood} text="good" />
        <Button onClick={handleNeutral} text="neutral" />
        <Button onClick={handleBad} text="bad" /> 
      </div>
       <h1>statistics</h1>
      <Statistics stats={stats} />
    </>
  )
}

export default App