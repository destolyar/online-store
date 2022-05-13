import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { getProductsByCategory } from '../../requests'
import { CatalogProps, CatalogState } from "./enities/interfaces/catalog";

class Catalog extends React.Component<CatalogProps, CatalogState> {
  state = {
    pickedCategory: '',
    products: []
  }
  componentDidMount() {
    getProductsByCategory(this.props.category).then(data => this.setState({
      products: data.products,
      pickedCategory: data.name
    }))
  }

  componentDidUpdate() {
    if(this.props.category !== this.state.pickedCategory) {
      getProductsByCategory(this.props.category).then(data => this.setState({
        products: data.products,
        pickedCategory: data.name
      }))
    }
    console.log(this.state.products)
  }

  render() {
    return(
      <main className="catalog">
        <div className="catalog__background"></div>
      </main>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {category: state.categorySlice.category}
}

export default connect(mapStateToProps)(Catalog)