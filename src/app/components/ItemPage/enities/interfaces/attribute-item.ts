import { AttributeItem } from "../../../../enities/interfaces/data";

export interface AttributeItemProps {
  item: AttributeItem,
  type: string,
  productName: string,
  attributeName: string,
  index: number,
  setAttribute: (type: string, name: string, item: AttributeItem) => void
}

export interface AttributeItemState {

}