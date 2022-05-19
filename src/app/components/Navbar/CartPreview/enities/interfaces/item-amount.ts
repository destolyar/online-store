export interface ItemAmountProps {
  amount: number,
  name: string,
  actions: {
    increaseAmount: (productName: string) => void,
    decreaseAmount: (productName: string) => void
  }
}

export interface ItemAmountState {
  
}