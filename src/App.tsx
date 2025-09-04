import CardSection from './Components/cards'
import HeroSection from './Components/HeroSection'
import DrawerAppBar from './Components/Navbar'

const App = () => {
  return (
    <div >
      <DrawerAppBar/>
      <HeroSection/>
      <CardSection/>
    </div>
  )
}

export default App