import React from 'react'

import styled from 'styled-components'
import oc from 'open-color'

const CardCarousel = styled.div`
  height: 700px;

  background-color: ${oc.gray[6]};
  & img {
    width: 100%;
    height: 100%;
    display: block;
    outline: none;
    border: none;
  }
`
export default () => {

  return (
    <CardCarousel>
      <img alt="" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/94683142_606666830193370_200756574598085375_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=gAW4UTyzJxsAX_DWP8I&oh=eb923d0e254e704d74ad77d8b33e3897&oe=5ED1FBD5" />
    </CardCarousel>
  )
}
