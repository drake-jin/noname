import React from 'react'
import Header from '../../common/Header'
import styled from 'styled-components'

import Card from 'views/domains/feeds/Card'

import contextStyled from '../../../lib/context/style'
import oc from 'open-color'

const ContentWrapper = styled.main`
  height: 10000px; /* 내용이 채워지면 주석 해제할 예정 */

  margin-top: ${contextStyled.HEADER_HEIGHT};
  background-color: ${contextStyled.BASIC_GRAY_BACKGROUND_COLOR};
  width: 100%;

  padding: 0px;
  border: 0px;
`

const Content = styled.div`
  width: 100%;
  padding-top: 2rem;
  position: relative;

  max-width: ${contextStyled.CONTAINER_SIZE};
  margin-left: auto;
  margin-right: auto;
`

const CardList = styled.div`
  display: inline-block;
  width: 41rem;
  margin-right: 2rem;
`

const CardController = styled.div`
  background-color: ${oc.gray[5]};
  display: inline-block;
  width: 21rem;

  position: absolute;
  top: 2.5rem;
  right: 0rem;
`


export default () => {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <Content>
          <CardList>
            <Card />
            <Card />
            <Card />
            <Card />
          </CardList>
          <CardController>
            카드 컨트롤러
          </CardController>
        </Content>
      </ContentWrapper>
    </div>
  )
}

