import React, { useEffect } from 'react'


import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons'

import styled from 'styled-components'
import contextStyle from 'lib/context/style'
import oc from 'open-color'

import GoogleSigninSVG from 'assets/google_signin_button/web/vector/btn_google_dark_normal_ios.svg'

const Page = styled.main`
  margin: 0px;
  padding: 0px;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`

const Content = styled.div`
  width: 100%;
  max-width: 30rem;
  height: 20rem;
  border: 1px solid ${oc.gray[4]};

  background-color: ${oc.white};
`

const Footer = styled.div`
  height: 10rem;
`

const Brand = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 3rem;
`

const BrandCopyWrite = styled.div`
  text-align: center;
  font-size: 0.9rem;
  line-height: 0.9rem;
  margin-bottom: 1rem;
`

const LoginButtons = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 20rem;

  margin-bottom: 1rem;
  & > button {
    margin-bottom: 0.5rem !important;
  }

  & > button:last-child {
    margin-bottom: 0.25rem !important;
  }
`

const RememberMe = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20rem;
  text-align: right;
`

const RememberMeLabel= styled.label`
  font-weight: 600;
`

const onClick = () => {
  window.location.href = "/"
}


export default () => {
  useEffect(() => {
    const bodyStyle = window.document.body.style
    bodyStyle.backgroundColor = contextStyle.BASIC_GRAY_BACKGROUND_COLOR


    return () => {
      window.document.body.style.backgroundColor = ''
    }
  })

  return (
    <Page>
      <Content>
        <Brand>noname</Brand>
        <BrandCopyWrite>
          To make friends that's the way to change the world
        </BrandCopyWrite>
        <LoginButtons>
          <GoogleLoginButton onClick={onClick} >
            Google
          </GoogleLoginButton>
          <FacebookLoginButton onClick={onClick} >
            Facebook
          </FacebookLoginButton>
          <GithubLoginButton onClick={onClick} >
            Github
          </GithubLoginButton>
        </LoginButtons>
        <RememberMe>
          <RememberMeLabel id="remember-me">
            Remember me&nbsp;
            <input type="checkbox" value="true" />
          </RememberMeLabel>
        </RememberMe>
      </Content>
      <Footer>
        뀨뀨뀨
      </Footer>
    </Page>
  )
}