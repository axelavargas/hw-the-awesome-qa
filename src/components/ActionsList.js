import React from 'react';


function ActionsList ({onRemoveQuestions, onSortQuestions}) {

    return (
        <>
            <button type="button" onClick={() => onRemoveQuestions()}> remove All Questions</button>
            <button type="button" onClick={() => onSortQuestions()}> sort Questions</button>
        </>
    )
}

export default ActionsList;