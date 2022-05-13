import React from "react"
import { connect } from "react-redux"
import { getCategories } from "../../requests"
import { setCategory } from "../../slices/categorySlice"
import { dispatch } from "../../store"
import { NavbarCategoriesProps, NavbarCategoriesState } from "./enities/interfaces/categories"
import { Action, Dispatch } from "@reduxjs/toolkit"
import '../../styles/components/Navbar/NavbarCategories.scss'


class NavbarCategories extends React.Component<NavbarCategoriesProps, NavbarCategoriesState> {
  state = {
    categories: [],
  }
  
  
  componentDidMount() {
    getCategories().then(item => {
      dispatch(setCategory("all"))  
      this.setState({
        categories: item
      })
    })
  }

  render() {
    return(
      <div className="navbar-categories">
        {this.state.categories.map((category, index) => 
          <div className="navbar-categories__container" key={category}>
            <input className="navbar-categories__container__input" 
              type="radio" 
              name="category" 
              defaultChecked={index === 0}
              id={`${category}-category`}/>
            <label className="navbar-categories__container__label" htmlFor={`${category}-category`} onClick={() => {
              this.props.actions.changeCategory(category)
            }}>{category}</label>
          </div>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
  actions: {
    changeCategory: (category: string) => dispatch(setCategory(category))
  }
})

export default connect(null, mapDispatchToProps)(NavbarCategories)