import { Suspense, lazy } from 'react'

import './App.css'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

// Lazy loading
const AboutPage = lazy(() => import('./pages/About.jsx'))
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))

const appRoutes = [
  {
    path: '/:lang/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>

  )
}

export default App
