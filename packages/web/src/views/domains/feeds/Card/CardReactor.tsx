import React from 'react'

import styled from 'styled-components'
import oc from 'open-color'

import {
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineShareAlt,
  AiOutlineBook,
} from 'react-icons/ai'


const CardReactor = styled.div`
  height: 3rem;
  position: relative;
`

const ReactList = styled.ul`
  height: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
`

const ReactItem = styled.li`
  width: 3rem;
  height: 100%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${oc.gray[2]}
  }

  & svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
  }
`

const Bookmark = styled.div`
  width: 3.5rem;
  height: 100%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0rem;
  right: 0rem;

  &:hover {
    background-color: ${oc.gray[2]}
  }

  & svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

export default () => {
  return (
    <CardReactor>
      <ReactList>
        <ReactItem>
          <AiOutlineLike />
        </ReactItem>
        <ReactItem>
          <AiOutlineMessage />
        </ReactItem>
        <ReactItem>
          <AiOutlineShareAlt />
        </ReactItem>
      </ReactList>
      <Bookmark>
        <AiOutlineBook />
      </Bookmark>
    </CardReactor>
  )
}



