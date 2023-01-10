import { lazy } from 'react'

const ScreenerPage = lazy(() => import('~/pages/Screener'))
const CharacterPage = lazy(() => import('~/pages/Character'))

const routes = [
  {
    path: '/',
    Page: ScreenerPage
  },
  {
    path: '/character/:id',
    Page: CharacterPage
  }
]

export default routes
