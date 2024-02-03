import { useState, useEffect } from 'react'
import axios from 'axios'
import WorkoutDetails from './WorkoutDetails'

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([])
  useEffect(() => {
    axios.get('https://ttmern-app.onrender.com/api/workouts/')
    .then(res => {
      setWorkouts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  console.log(workouts)

  return (
    <div className="workoutlist">
      {workouts.map((workout) =>
        <WorkoutDetails workout={workout} key={workout._id} />)}
    </div>
  )
}

export default WorkoutList