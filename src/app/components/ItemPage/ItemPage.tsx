import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { defaultProduct } from "../../enities/interfaces/data";
import { getProductById } from "../../requests";
import { ItemPageProps, ItemPageState } from "./enities/interfaces/item-page";
import { ImageSwitcher } from "./ImageSwitcher";
import '../../styles/components/ItemPage/ItemPage.scss'

class ItemPage extends React.Component<ItemPageProps & RouteComponentProps<any>, ItemPageState> {
  state = {
    product: defaultProduct
  }

  componentDidMount() {
    const { id } = this.props.match.params

    getProductById(id).then(item => this.setState({product: item}))
  }

  componentDidUpdate() {
    console.log(this.state.product)
  }
  
  render() {
    const { gallery } = this.state.product

    return(
      <main className="item-page">
        <ImageSwitcher gallery={gallery}/>
      </main>
    )
  }
}

export default withRouter(ItemPage)