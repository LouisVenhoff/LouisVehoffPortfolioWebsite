import Header from './staticContent/header/header'
import NavButton from './staticContent/header/navButton/navButton'

function App() {
  
  return (
    <>
      <Header>
        <NavButton title="Test" target={''} />
        <NavButton title="Test1" target={''} />
        <NavButton title="TestABC" target={''} />
      </Header>
    </>
  )
}

export default App
