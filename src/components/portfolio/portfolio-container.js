import React, { Component } from 'react'
import axios from 'axios'

import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
  constructor () {
    super()

    this.state = {
      pageTitle: 'Welcome to my portfolio',
      data: []
    }

    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter (filter) {
    if (filter === 'CLEAR_FILTERS') {
      this.getPorfolioItems()
    } else {
      this.getPorfolioItems(filter)
    }
  }

  getPorfolioItems (filter = null) {
    axios
      .get('https://gregkimma.devcamp.space/portfolio/portfolio_items')
      .then(r => {
        if (filter) {
          this.setState({
            data: r.data.portfolio_items.filter(item => {
              return item.category === filter
            })
          })
        } else {
          this.setState({
            data: r.data.portfolio_items
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  portfolioItems () {
    // Date that we'll need:
    // - bg img: thumb_image_url
    // - logo: logo_url
    // - description: description
    // - id: id
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />
    })
  }

  componentDidMount () {
    this.getPorfolioItems()
  }

  render () {
    return (
      <div className='homepage-wrapper'>
        <div className='filter-links'>
          <button
            className='btn'
            onClick={() => this.handleFilter('Technology')}
          >
            Technology
          </button>
          <button
            className='btn'
            onClick={() => this.handleFilter('Social Media')}
          >
            Social Media
          </button>
          <button
            className='btn'
            onClick={() => this.handleFilter('Education')}
          >
            Education
          </button>
          <button
            className='btn'
            onClick={() => this.handleFilter('CLEAR_FILTERS')}
          >
            All
          </button>
        </div>
        <div className='portfolio-items-wrapper'>{this.portfolioItems()}</div>
      </div>
    )
  }
}
