export interface NavbarCategoriesProps {
  actions: {
    changeCategory: (category: string) => void
  }
}

export interface NavbarCategoriesState {
  categories: string[],
}
