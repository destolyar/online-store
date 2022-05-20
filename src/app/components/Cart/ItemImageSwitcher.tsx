import React from "react";
import { ItemImageSwitcherProps, ItemImageSwitcherState } from "./enities/interfaces/Item-image-switcher";
import '../../styles/components/Cart/ItemImageSwitcher.scss'


export class ItemImageSwitcher extends React.Component<ItemImageSwitcherProps, ItemImageSwitcherState> {
  state = {
    imageIndex: 0
  }

  nextImage() {
    const { imageIndex } = this.state
    const { gallery } = this.props

    if( imageIndex + 1 === gallery.length) {
      this.setState({
        imageIndex: 0
      })
    } else {
      this.setState(state => ({
        imageIndex: state.imageIndex + 1
      }))
    }
  }

  previosImage() {
    const { imageIndex } = this.state
    const { gallery } = this.props

    if( imageIndex - 1 === -1) {
      this.setState({
        imageIndex: gallery.length - 1
      })
    } else {
      this.setState(state => ({
        imageIndex: state.imageIndex - 1
      }))
    }
  }

  render() {
    const { gallery } = this.props
    const { imageIndex } = this.state

    return(
      <div className="cart-item-image-switcher">
        <div className="cart-item-image-switcher__buttons">
          <button className="cart-item-image-switcher__buttons__previos-image" 
            onClick={() => this.previosImage()}>
            &lsaquo;
          </button>
          <button className="cart-item-image-switcher__buttons__next-image" 
            onClick={() => this.nextImage()}>
            &rsaquo;
          </button>
        </div>

        <img className="cart-item-image-switcher__image" src={gallery[imageIndex]} alt="" />
      </div>
    )
  }
}