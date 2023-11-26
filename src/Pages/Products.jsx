
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import ProductCategory from "../components/ProductCategory"
import ProductList from "../components/ProductList"
import { Helmet } from 'react-helmet'

export function Products() {
  return (
    <> 
    <Helmet>
                <meta charSet="utf-8" />
                <title>Productos</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Header />
      <div className="container">
        <div className="row mx-auto">

          <div className="col-12 col-md-4 ">
            <div><ProductCategory/></div>
          </div>

          <div className="col-12 col-md-8">
            <div><ProductList/></div>
          </div>

        </div>

      </div>


      <Footer />

    </>

  )
}
