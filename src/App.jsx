import { Routes, Route } from 'react-router-dom';
import { About, Category, Home, NotFound, Product, Test } from './pages';

import { ProductAdd, ProductDetails, ProductList } from './components/product';
import { CategoryAdd, CategoryList } from './components/category';
import { Header, Footer } from './components/ui';

const App = () => {

  return (
    <div className='min-h-screen'>
      <Header />
      <div className="container mx-auto my-5" >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product' element={<Product />}>
            <Route index element={<ProductList />} />
            <Route path='list' element={<ProductList />} />
            <Route path='add' element={<ProductAdd />} />
            <Route path=':id' element={<ProductDetails />} />
          </Route>
          <Route path='category' element={<Category />}>
            <Route index element={<CategoryList />} />
            <Route path='add' element={<CategoryAdd />} />
            <Route path='list' element={<CategoryList />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='test' element={<Test />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

      <div className="sticky top-[100vh]">
        <Footer />
      </div>
    </div>
    
  )
}

export default App;