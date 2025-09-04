import CardSection from './Components/cards'
import Choise from './Components/Choise'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import Members from './Components/Members'
import DrawerAppBar from './Components/Navbar'
import Quality from './Components/Quality'

const App = () => {
  return (
    <div >
      <DrawerAppBar/>
      <HeroSection/>
      <CardSection/>
      <Choise/>
      <Members/>
      <Quality/>
      <Footer/>
    </div>
  )
}

export default App