import React from "react";
import ProductInfo from "./ProductInfo"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { defaultProduct } from "../../enities/interfaces/data"
import { getProductById } from "../../requests"
import { ImageSwitcher } from "./ImageSwitcher"
import '../../styles/components/ItemPage/ProductPage.scss'
import { ProductPageProps, ProductPageState } from "./enities/interfaces/product-page"

class ProductPage extends React.Component<ProductPageProps & RouteComponentProps<any>, ProductPageState> {
  state = {
    product: defaultProduct,
  }

  componentDidMount() {
    const { id } = this.props.match.params
    getProductById(id).then(item => this.setState({product: item}))
  }

  render() {
    const { product } = this.state
    const { gallery } = product

    return(
      <section className="product-page">
        <ImageSwitcher gallery={gallery}/>
        <ProductInfo product={product}/>
      </section>
    )
  }
}


export default withRouter(ProductPage)