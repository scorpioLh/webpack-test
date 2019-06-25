'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import '../../common';
import logo from './images/logo.png';
import { a } from './tree-shaking'
import './search.less';

if (false) {
    a()
}

class Search extends React.Component {

    render() {
        return <div className="search-text">
            搜索文字的内容<img src={ logo } />
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);