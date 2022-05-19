import { AttributeItem, PickedAttribute } from "../../../../../enities/interfaces/data";

export interface CartPreviewAttributeItemProps {
  type: string,
  productName: string,
  item: AttributeItem,
  index: number,
  pickedAttribute: PickedAttribute,
  attributeName: string,
  actions: {
    setAttribute: (productInfo: {
      name: string,
      pickedAttribute: PickedAttribute
    }) => void
  }
}

export interface CartPreviewAttributeItemState {

}
