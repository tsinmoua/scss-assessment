import React, { useState } from 'react'
import './MultiSelect.scss'
import Modal from '../components/modal'

// this is a stub for you to develop the following

/*
    PART 2 - OPTIONAL 
    
    Develop a component similar to the single select that allows multiple options to be selected. 

    This will include an ability to toggle each option, and then click a submit button for grading.

    Grading will indicate visually on each option if it was correct or not. This implies 4 states for each button - selected and correct, selected and incorrect, not selected and correct, not selected and incorrect.

    The generic feedback shown in the data is binary - either you got it 100% correct and get the correct feedback, or you don't. 
*/

const MultiSelect = props => {

    const [selected, setSelected] = useState([]);
    const [correct, setCorrect] = useState(false);
    const [open, setOpen] = useState(false);


    const handleSelect = (i) => {

        const options = document.querySelector(`.selection${i}`)

        if (selected.includes(i)) {
            selected.splice(selected.indexOf(i), 1)
            options.style.backgroundColor = 'black'
            options.style.color = 'white'

        } else {
            setSelected([...selected, i])
            options.style.backgroundColor = 'white'
            options.style.color = 'black'
        }
    }

    const submit = (event) => {
        if (selected.includes(0) && selected.includes(1) && selected.includes(3) && !selected.includes(2)) {
            setCorrect(true)
        }
        setOpen(true);
    }

    const reload = () => {
        window.location.reload()
    }

    return (
        <div className={`MultiSelect`}>
            <h1 className='question'>
                {props.data.questionText}
            </h1>

            <section>
                {
                    props.data.options.map((option, optionIndex) => {
                        return (
                            <button
                                className={`selection${optionIndex}`}
                                key={optionIndex}
                                onClick={() => { handleSelect(optionIndex) }}
                            >
                                {option.text}
                            </button>
                        )
                    })
                }
            </section>

            <button
                className='submit-button'
                onClick={submit}
            >
                Submit
            </button>

            {
                <div className={`feedback ${correct ? 'correct' : 'incorrect'}`}>
                    <Modal
                        open={open}
                        onClick={reload}
                        correct={correct}
                        correctHeader={props.data.feedback.correct.header}
                        incorrectHeader={props.data.feedback.incorrect.header}
                        correctFeedback={props.data.feedback.correct.body}
                        incorrectFeedback={props.data.feedback.incorrect.body}
                        text='Try Quiz Again'
                    />
                </div>
            }
        </div>
    )
}

export default MultiSelect