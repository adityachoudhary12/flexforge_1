import React, { useState } from "react"
import Modal from "./Modal"
import { exerciseDescriptions } from "../utils"

export default function WorkoutCard(props) {
    const { trainingPlan, workoutIndex, type, dayNum, icon, savedWeights, handleSave, handleComplete } = props

    const { warmup, workout } = trainingPlan || {}
    const [showExerciseDescription, setShowExerciseDescription] = useState(null)
    const [weights, setWeights] = useState(savedWeights || {})
    const [isCompleted, setIsCompleted] = useState(false) // Add a state for completion

    function handleAddWeight(title, weight) {
        const newObj = {
            ...weights,
            [title]: weight
        }
        setWeights(newObj)
    }

    function handleCompleteWorkout() {
        handleComplete(workoutIndex, { weights })
        setIsCompleted(true) // Mark as completed
    }

    return (
        <div 
            className="workout-container" 
            style={{
                backgroundColor: isCompleted ? '#28a745' : '#dc3545', // Green if completed, red if not
                transition: 'background-color 0.5s ease', // Smooth transition
                color: 'white',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
        >
            {showExerciseDescription && (
                <Modal showExerciseDescription={showExerciseDescription} handleCloseModal={() => {
                    setShowExerciseDescription(null)
                }} />
            )}
            <div className="workout-card card">
                <div className="plan-card-header">
                    <p>Day {dayNum}</p>
                    {icon}
                </div>
                <div className="plan-card-header">
                    <h2><b>{type} Workout</b></h2>
                </div>
            </div>

            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Warmup</h4>
                </div>
                <h6>Sets</h6>
                <h6>Reps</h6>
                <h6 className="weight-input">Max Weight</h6>
                {warmup.map((warmupExercise, warmupIndex) => {
                    return (
                        <React.Fragment key={warmupIndex}>
                            <div className="exercise-name">
                                <p>{warmupIndex + 1}. {warmupExercise.name}</p>
                                <button onClick={() => {
                                    setShowExerciseDescription({
                                        name: warmupExercise.name,
                                        description: exerciseDescriptions[warmupExercise.name]
                                    })
                                }} className="help-icon">
                                    <i className="fa-regular fa-circle-question" />
                                </button>
                            </div>
                            <p className="exercise-info">{warmupExercise.sets}</p>
                            <p className="exercise-info">{warmupExercise.reps}</p>
                            <input className="weight-input" placeholder="N/A" disabled />
                        </React.Fragment>
                    )
                })}
            </div>

            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Workout</h4>
                </div>
                <h6>Sets</h6>
                <h6>Reps</h6>
                <h6 className="weight-input">Max Weight</h6>
                {workout.map((workoutExercise, wIndex) => {
                    return (
                        <React.Fragment key={wIndex}>
                            <div className="exercise-name">
                                <p>{wIndex + 1}. {workoutExercise.name}</p>
                                <button onClick={() => {
                                    setShowExerciseDescription({
                                        name: workoutExercise.name,
                                        description: exerciseDescriptions[workoutExercise.name]
                                    })
                                }} className="help-icon">
                                    <i className="fa-regular fa-circle-question" />
                                </button>
                            </div>
                            <p className="exercise-info">{workoutExercise.sets}</p>
                            <p className="exercise-info">{workoutExercise.reps}</p>
                            <input value={weights[workoutExercise.name] || ''} onChange={(e) => {
                                handleAddWeight(workoutExercise.name, e.target.value)
                            }} className="weight-input" placeholder="14" />
                        </React.Fragment>
                    )
                })}
            </div>

            <div className="workout-buttons">
                <button onClick={() => {
                    handleSave(workoutIndex, { weights })
                }}>Save & Exit</button>
                <button onClick={handleCompleteWorkout} disabled={Object.keys(weights).length !== workout.length}>
                    {isCompleted ? 'Completed ✅' : 'Complete'}
                </button>
            </div>
        </div>
    )
}
