import React, { useState } from 'react'
import './SingleSelect.scss'
import Modal from '../components/modal'

const SingleSelect = props => {

    // This component is built for you. Just skin it with the scss file. 

    const [selected, setSelected] = useState(-1);
    const [open, setOpen] = useState(false);


    const handleSelect = (i) => {
        if (selected === -1) setSelected(i)
        setOpen(true);
    }

    const selectedOption = props.data.options[selected]

    return (
        <div className={`SingleSelect`}>
            <h1 className='question'>
                {props.data.questionText}
            </h1>
            <section>
                {
                    selected === -1 &&
                    props.data.options.map((option, optionIndex) => {
                        return (
                            <button
                                key={optionIndex}
                                onClick={() => { handleSelect(optionIndex) }}
                            >
                                {option.text}
                            </button>
                        )
                    })
                }
            </section>
            {
                selected > -1 &&
                <div className={`feedback ${selectedOption.correct ? 'correct' : 'incorrect'}`}>
                    <Modal
                        open={open}
                        onClick={props.onComplete}
                        correct={selectedOption.correct}
                        correctHeader={props.data.feedback.correct.header}
                        incorrectHeader={props.data.feedback.incorrect.header}
                        correctFeedback={props.data.feedback.correct.body}
                        incorrectFeedback={props.data.feedback.incorrect.body}
                        text='Next Question'
                    />
                </div>
            }
        </div>
    )
}

export default SingleSelect