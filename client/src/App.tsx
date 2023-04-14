import { useState } from 'react'
// import FilteredProductTable from './components/GroceryFilter/FilteredProductTable'
// import { PRODUCTS } from './assets/GroceryFilter/groceries'


import LoginForm from './components/LoginForm'
import '../index.css'

function App() {

  return (
    <main className='mainstage'>
      {/* <FilteredProductTable products={PRODUCTS} /> */}.
      <LoginForm />
    </main>
  )

}

export default App
