import React from "react"

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';

const Modal = (props) => {
    return (
        <Dialog
            open={props.open}
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
                    {props.correct ?
                        props.correctHeader
                        :
                        props.incorrectHeader
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
                        {props.correct ?
                            props.correctFeedback
                            :
                            props.incorrectFeedback
                        }
                    </h2>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={props.onClick}
                    color="primary"
                    style={{
                        fontFamily: "Fredericka the Great",
                        color: 'blue'
                    }}
                >
                    {props.text}
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default Modal;
