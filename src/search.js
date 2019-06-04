'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import './search.less'
import logo from './images/test.jpg'

class Search extends React.Component{
  render() {
    return <div className="search-text">Search Test333<img src={ logo } /></div>
  }
} 

ReactDom.render(
  <Search />,
  document.getElementById('root')
)