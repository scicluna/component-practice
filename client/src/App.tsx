import { useState } from 'react'
import FilteredProductTable from './components/FilteredProductTable'
import { PRODUCTS } from './assets/groceries'
import '../index.css'

function App() {

  return (
    <main className='mainstage'>
      <FilteredProductTable products={PRODUCTS} />
    </main>
  )

}

export default App
