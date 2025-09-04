import CardSection from './Components/cards'
import Choise from './Components/Choise'
import HeroSection from './Components/HeroSection'
import Members from './Components/Members'
import DrawerAppBar from './Components/Navbar'

const App = () => {
  return (
    <div >
      <DrawerAppBar/>
      <HeroSection/>
      <CardSection/>
      <Choise/>
      <Members/>
    </div>
  )
}

export default App