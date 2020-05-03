import React, { useEffect } from 'react'
import ReactRouter, { useRouteMatch } from 'react-router'
import qs from 'query-string'

import contextRoutes from 'lib/context/routes'
import axios from 'axios'

import Modal from 'views/common/Modal'

const {
  REACT_APP_API_SERVER_HOST,
} = process.env

interface IWaitingProps extends ReactRouter.RouteChildrenProps{}

const Waiting: React.FC<IWaitingProps> = (props) => {
  const {
    history,
    location,
  } = props

  const match = useRouteMatch<{ provider: string }>({
    path: `${contextRoutes.PATH_LOGIN_WAITING}/:provider`,
    strict: true,
    sensitive: true,
  })

  useEffect(() => {
    setTimeout(() => {
      const { provider } = match!.params
      const tokens = qs.parse(location.search.slice(1))
      console.log(tokens)
      axios.post(`${REACT_APP_API_SERVER_HOST}/auth/sso/${provider}`, tokens)
        .then(({ data }) => {
          console.log(data)
          alert('넘어가유~')
          // history.replace(contextRoutes.PATH_ROOT)
        })
    }, 1000)
    return () => {}
  })

  return (
    <Modal
      onClickBackboard={(event) => {
        console.log(event.target)
        return true
      }}
      close={false}
    >
      로그인 중임둥.
    </Modal>
  )

}

export default Waiting
