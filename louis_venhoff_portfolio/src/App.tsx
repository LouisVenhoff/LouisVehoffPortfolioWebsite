import { ReactNode } from 'react'
import UnderConstruction from './pages/underConstruction/underConstruction'
import Header from './staticContent/header/header'
import NavButton from './staticContent/header/navButton/navButton'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import Home from './pages/home/home'

function App() {
  
  
  
  const renderHeader = ():ReactNode => {
    return(
      <>
        <Header>
          <NavButton title="Home" target={''} />
          <NavButton title="Projekte" target={''} />
          <NavButton title="Über mich" target={''} />
        </Header>
        <Outlet />
      </>
    );
  }
  
  
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={renderHeader()}>
            <Route path="construction" element={<UnderConstruction/>}/>
            <Route path="home" element={<Home />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
