import React from 'react'

import styled from 'styled-components'
import oc from 'open-color'

import CardHeader from './CardHeader'
import CardDescription from './CardDescription'
import CardReactor from './CardReactor'
import CardWriteComment from './CardWriteComment'
import CardCarousel from './CardCarousel'


const CardWrapper = styled.div`
  background-color: ${oc.white};
  margin-bottom: 2rem;

  border: 1px solid ${oc.gray[4]};
  border-radius: 5px;


  width: 100%;
  max-height: 100%;
`


export default () => {
  return (
    <CardWrapper>
      <CardHeader />
      <CardCarousel />
      <CardReactor />
      <CardDescription />
      <CardWriteComment />
    </CardWrapper>
  )
}

