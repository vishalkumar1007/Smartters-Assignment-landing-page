import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import AllCategories from './pages/AllCategories/AllCategories';
import MyOrder from './pages/MyOrder/MyOrder';
import NewAndTrending from './pages/NewAndTrending/NewAndTrending';
import AboutUs from './pages/AboutUs/AboutUs';
import CustomerSupport from './pages/CustomerSupport/CustomerSupport';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/NewAndTrending' element={<NewAndTrending/>}/>
        <Route path='/AllCategories' element={<AllCategories/>}/>
        <Route path='/MyOrder' element={<MyOrder/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/CustomerSupport' element={<CustomerSupport/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
