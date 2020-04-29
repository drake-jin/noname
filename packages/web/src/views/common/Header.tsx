import React from 'react'
import styled from 'styled-components'
import oc from 'open-color'
import { MdClose } from "react-icons/md";
import { GiPodium } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import contextStyled from '../../lib/context/style'

const HeaderWrapper = styled.nav`
  display: flex
  align-items: center;
  justify-content: center;
  height: ${contextStyled.HEADER_HEIGHT};
  width: 100%;
  border-bottom: 1px solid ${contextStyled.BASIC_BORDER_COLOR};
  background-color: ${oc.white};
  z-index: ${contextStyled.HEADER_Z_INDEX};
  position: fixed;
  top: 0;
`

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;

  padding: 0 1rem;

  height: ${contextStyled.HEADER_HEIGHT};
  width: calc(100% - 2rem);
  max-width: 64rem;
`

const Brand = styled.div`
  position: absolute;
  top: 0;
  left: 1rem;
  font-size: 3rem;
  line-height: ${contextStyled.HEADER_HEIGHT};
`

const SearchWrapper = styled.div`

  padding: 0.5rem;
  height: 3rem;
  line-height: 3rem;
  width: calc(100% - 30rem);
  min-width: 22rem;
`

const SearchContainer = styled.div`
  border-radius: 5px;
  border: 1px solid ${contextStyled.BASIC_BORDER_COLOR};
  background-color: ${contextStyled.BASIC_GRAY_BACKGROUND_COLOR};
  position: relative;
  width: 100%;
  height: 100%;
`

const SearchInput = styled.input`
  border: none;
  outline: none;

  background-color: transparent;
  color: ${contextStyled.BASIC_FONT_COLOR};

  font-size: 16px;

  width: calc(100% - 4rem);
  height: 3rem;
  line-height: 3rem;

  margin-left: 1rem;
  margin-right: 3rem;
`

const SearchCancel = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;

  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  flex-direction: row;
  display: flex;
  height: ${contextStyled.HEADER_HEIGHT};
`

const MenuItem = styled.div`
  width: calc(${contextStyled.HEADER_HEIGHT} + 1rem);
  height: ${contextStyled.HEADER_HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: ${contextStyled.MEDIA_MOBILE}) {
    width: ${contextStyled.HEADER_HEIGHT};
  }
`

export default () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Brand>
          noname
        </Brand>
        <SearchWrapper>
          <SearchContainer>
            <SearchInput type="text" placeholder="검색어를 입력해주세요" />
            <SearchCancel>
              <MdClose />
            </SearchCancel>
          </SearchContainer>
        </SearchWrapper>
        <Menu>
          <MenuItem>
            <GiPodium />
          </MenuItem>
          <MenuItem>
            <TiMessages />
          </MenuItem>
          <MenuItem>
            로그인
          </MenuItem>
        </Menu>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
