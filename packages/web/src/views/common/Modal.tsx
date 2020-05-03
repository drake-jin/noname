import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import contextWindow from 'lib/context/window'
import contextStyle from 'lib/context/style'

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  z-index: ${contextStyle.Z_INDEX_MODAL};
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);

  &.close {
    display: none;
  }
`

interface IModalProps {
  children: any;
  close: boolean;
  onClickBackboard: (event: React.MouseEvent) => any;
}

const Modal: React.FC<IModalProps> = (props) => {
  const {
    children,
    onClickBackboard,
    close,
  } = props

  const [isClose, setClose] = useState(close)


  useEffect(() => {
    const body = contextWindow.document.body
    const previousBodyOverflow = body.style.overflow
    body.style.overflow = "hidden"

    return () => {
      body.style.overflow = previousBodyOverflow
    }
  })


  console.log(isClose)
  return (
    <ModalBackground
      className={isClose ? 'close' : ''}
      onClick={(event: React.MouseEvent) => {
        if (onClickBackboard(event)) {
          setClose(true)
        }
      }}
    >
      {children}
    </ModalBackground>
  )
}

export default Modal