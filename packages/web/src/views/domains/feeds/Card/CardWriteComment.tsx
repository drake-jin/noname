import React from 'react'

import styled from 'styled-components'
import oc from 'open-color'


const CardWriteComment = styled.div`
height: 4rem;
padding-left: 1rem;
padding-right: 1rem;

position: relative;
display: flex;
align-items: center;
`

const CardWriteCommentTextarea = styled.textarea`
font-size: 0.9rem;
line-height: 0.9rem;
height: 0.9rem;
max-height: 5rem;
width: calc(100% - 4rem);

outline: none;
border: none;

white-space: pre-wrap;
overflow-wrap: break-word;

&:focus{
  outline:none;
}
`
const CardWriteCommentSave = styled.button`
outline: none;
border: none;
border-radius: 0.25rem;
resize: none;

position: absolute;

top: 1rem;
right: 0.75rem;

display: block;
width: 3rem;
height: 2rem;

font-size: 0.75rem;

background-color: rgba(0,0,0,0);
color: ${oc.gray[8]};

&:hover {
  background-color: ${oc.indigo[3]};
  color: ${oc.white};
}

&.active {
  background-color: ${oc.indigo[5]};
  color: ${oc.white};
}
`


export default () => {

  return (
    <CardWriteComment>
      <CardWriteCommentTextarea
        placeholder="댓글 달기..."
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
      />
      <CardWriteCommentSave>
        Save
      </CardWriteCommentSave>
    </CardWriteComment>
  )
}
