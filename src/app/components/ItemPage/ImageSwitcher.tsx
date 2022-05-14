import React from "react";
import { ImageSwitcherProps, ImageSwitcherState } from "./enities/interfaces/image-switcher";
import '../../styles/components/ItemPage/ImageSwitcher.scss'

export class ImageSwitcher extends React.Component<ImageSwitcherProps, ImageSwitcherState> {
  state = {
    pickedImage: 0
  }

  render() {
    const { gallery } = this.props
    const { pickedImage } = this.state

    return(
      <section className="image-switcher">
        <div className="image-switcher__images">
          {gallery.map((image, index) => 
            <img className="image-switcher__images__image" 
              key={index}
              src={image} alt="product image" 
              onClick={() => this.setState({pickedImage: index})}/>)}
        </div>
        <img className="image-switcher__picked-image" src={gallery[pickedImage]} alt="" />
      </section>
    )
  }
}