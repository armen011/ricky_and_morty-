import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import routes from './routes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Page }, index) => (
          <Route
            path={path}
            element={
              <Suspense fallback={<p>Loading</p>}>
                <Page />
              </Suspense>
            }
            key={index}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
