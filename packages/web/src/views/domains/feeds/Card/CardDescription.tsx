import React from 'react'

import styled from 'styled-components'
import oc from 'open-color'

import {
  AiOutlineLike,
} from 'react-icons/ai'


const CardDescription = styled.div`
  padding: 1rem;
  padding-top: 0rem;

  border-bottom: 1px solid ${oc.gray[4]};
`

const LikesCount = styled.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const Description = styled.div`
  font-size: 0.9rem;
`

const WriterNickname = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 0.75rem;
`

const PreviewerComments = styled.div`
`

const PreviewComment = styled.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  color: ${oc.indigo[6]};
  cursor: pointer;
`

const CommentItem = styled.div`
  margin-bottom: 0.25rem;
  position: relative;

  &:last-child {
    margin-bottom: 0rem;
  }
`

const CommentItemNickname = styled.span`
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
  margin-right: 0.25rem;
`

const CommentItemContent = styled.div`
  font-size: 0.9rem;
  line-height: 1rem;
  width: calc(100% - 2rem)
`

const CommentLike = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 0rem;
  right: 0rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${oc.gray[2]}
  }
`

export default () => {
  return (
    <CardDescription>
      <LikesCount>
        좋아요 1,186개
      </LikesCount>

      <Description>
        <WriterNickname>sgil_2</WriterNickname>
        김치 김치 김치
        김치 김치 김치
        김치 김치 김치
        김치 김치 김치
        김치 김치 김치
        김치 김치 김치
        김치 김치 김치
        김치 김치 김치
        김치 김치 김치
        김치 김치 김치
        김치 김치 김치
        김치 김치 김치
      </Description>
      <PreviewerComments>
        <PreviewComment>
          댓글 25개 모두 보기
        </PreviewComment>
        <CommentItem>
          <CommentItemContent>
            <CommentItemNickname>drako-jin</CommentItemNickname>
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
          </CommentItemContent>
          <CommentLike>
            <AiOutlineLike />
          </CommentLike>
        </CommentItem>
        <CommentItem>
          <CommentItemContent>
            <CommentItemNickname>drako-jin</CommentItemNickname>
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
          </CommentItemContent>
          <CommentLike>
            <AiOutlineLike />
          </CommentLike>
        </CommentItem>
        <CommentItem>
          <CommentItemContent>
            <CommentItemNickname>drako-jin</CommentItemNickname>
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
          </CommentItemContent>
          <CommentLike>
            <AiOutlineLike />
          </CommentLike>
        </CommentItem>
        <CommentItem>
          <CommentItemContent>
            <CommentItemNickname>drako-jin</CommentItemNickname>
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
            밥은 먹고 다니니 용진아
          </CommentItemContent>
          <CommentLike>
            <AiOutlineLike />
          </CommentLike>
        </CommentItem>
      </PreviewerComments>
    </CardDescription>
  )
}