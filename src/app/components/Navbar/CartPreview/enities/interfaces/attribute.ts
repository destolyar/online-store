import { AttributeItem, PickedAttribute } from "../../../../../enities/interfaces/data";

export interface CartPreviewAttributeProps {
  name: string,
  type: string,
  items: AttributeItem[],
  productName: string,
  pickedAttribute: PickedAttribute
}

export interface CartPreviewAttributeState {

}
