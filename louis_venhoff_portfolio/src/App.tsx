import Header from './staticContent/header/header'
import NavButton from './staticContent/header/navButton/navButton'

function App() {
  
  return (
    <>
      <Header>
        <NavButton title="Home" target={''} />
        <NavButton title="Projekte" target={''} />
        <NavButton title="Über mich" target={''} />
      </Header>
    </>
  )
}

export default App
