import React, { useState } from 'react'
import './SingleSelect.scss'

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';

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
                    <Dialog
                        open={open}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        className='modal'
                    >
                        <DialogTitle id="alert-dialog-title">
                            <h1
                                style={{
                                    fontWeight: 'normal',
                                    fontSize: '5rem',
                                    textAlign: 'center',
                                    color: 'black',
                                    fontFamily: "Fredericka the Great",
                                }}>
                                {selectedOption.correct ?
                                    props.data.feedback.correct.header
                                    :
                                    props.data.feedback.incorrect.header
                                }
                            </h1>
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <h2
                                    style={{
                                        fontWeight: 'normal',
                                        fontSize: '2rem',
                                        textAlign: 'center',
                                        color: 'black',
                                        fontFamily: "Fredericka the Great",
                                    }}>
                                    {selectedOption.correct ?
                                        props.data.feedback.correct.body
                                        :
                                        props.data.feedback.incorrect.body
                                    }
                                </h2>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={props.onComplete}
                                color="primary"
                                style={{
                                    fontFamily: "Fredericka the Great",
                                    color: 'blue'
                                }}
                            >
                                Next Question
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            }
        </div>
    )
}

export default SingleSelect