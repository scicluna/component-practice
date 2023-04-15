// import FilteredProductTable from './components/GroceryFilter/FilteredProductTable'
// import { PRODUCTS } from './assets/GroceryFilter/groceries'

// import LoginForm from './components/LoginForm/LoginForm'
import ImageGallery from './components/ImageGallery'
import ImageCarousel from './components/ImageCarousel'

import '../index.css'

function App() {

  return (
    <main className='mainstage' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      {/* <FilteredProductTable products={PRODUCTS} /> */}
      {/* <LoginForm /> */}
      <ImageCarousel />
    </main>
  )

}

export default App
