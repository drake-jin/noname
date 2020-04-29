import React from 'react'

import styled from 'styled-components'

import {
  AiOutlineMenu,
} from 'react-icons/ai'

const CardHeader = styled.div`
  height: 2rem;
  padding: 1rem;
  position: relative;
`

const ProfileImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: display;
  position: absolute;
  left: 1.25rem;
  top: 0.75rem;
  & img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`

const ProfileDescription = styled.div`
  padding-left: 4rem;

  & p {
    margin: 0px;
  }
`

const ProfileNickname = styled.p`
  font-weight: 500;
  margin-bottom: 5px;
`

const ProfileSubInfo = styled.p`
  font-size: 0.75rem;
`


const CardMenu = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  & svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

export default () => {
  return (
    <CardHeader>
      <ProfileImage>
        <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/94683142_606666830193370_200756574598085375_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=gAW4UTyzJxsAX_DWP8I&oh=eb923d0e254e704d74ad77d8b33e3897&oe=5ED1FBD5" />
      </ProfileImage>
      <ProfileDescription>
        <ProfileNickname>닉네임</ProfileNickname>
        <ProfileSubInfo>한줄자기소개</ProfileSubInfo>
      </ProfileDescription>
      <CardMenu>
        <AiOutlineMenu />
      </CardMenu>
    </CardHeader>
  )
}