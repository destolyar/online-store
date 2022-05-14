import React from "react"
import { connect } from "react-redux"
import { RootState } from "../../store"
import { getProductsByCategory } from '../../requests'
import { CatalogProps, CatalogState } from "./enities/interfaces/catalog"
import { CatalogProduct } from "../../enities/interfaces/data"
import CatalogItem from "./CatalogItem"
import '../../styles/components/Catalog/Catalog.scss'

class Catalog extends React.Component<CatalogProps, CatalogState> {
  state = {
    pickedCategory: 'all',
    products: []
  }

  //get products by category and setting current category
  componentDidMount() {
    this.updateProducts()
  }

  //update products if category in the state and in the global store not the same 
  componentDidUpdate() {
    const {category} = this.props
    const {pickedCategory} = this.state

    if(category !== pickedCategory) {
      this.updateProducts()
    }
  }

  //get new products and category from server and set them
  updateProducts() {
    getProductsByCategory(this.props.category).then(data => this.setState({
      products: data.products,
      pickedCategory: data.name
    }))
  }

  render() {
    const { products } = this.state
    const { currency, category } = this.props

    return(
      <main className="catalog">
        <h1 className="catalog__title">Category: {category}</h1>
        <div className="catalog__items">
          {products.map((product: CatalogProduct) => 
            <CatalogItem key={product.id} product={product} currency={currency}/>
          )}
        </div>
      </main>
    )
  }
}

//get currency and category from global store
const mapStateToProps = (state: RootState) => {
  return { 
    category: state.categorySlice.category,
    currency: state.currencySlice.currency
  }
}

export default connect(mapStateToProps)(Catalog)