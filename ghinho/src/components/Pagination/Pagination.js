import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  paginationItemStyle: PropTypes.string.isRequired,
  selectedPageNum: PropTypes.number.isRequired,
  datas: PropTypes.array.isRequired,
  numItemsOfPage: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

class Pagination extends Component {
  pages = (nums) => {
    console.log(nums)
    let pages = [];
    for (let i = 1; i <= nums; i++) {
      if(i===this.props.selectedPageNum+1) {
        pages.push(
          <li key={'page' + i} id={i-1} className="page-item page active" onClick={() => this.props.selectPage(i-1)}>
            <a className="page-link">{i}</a>
          </li>
        )
      } else {
        pages.push(
          <li key={'page' + i} id={i-1} className="page-item page" onClick={() => this.props.selectPage(i-1)}>
            <a className="page-link">{i}</a>
          </li>
        )
      }
     
    }
    return pages;
  }

  render() {
    // console.log(this.props.paginationItemStyle)
    let nums = Math.floor(this.props.datas.length / this.props.numItemsOfPage) + 1;
    return (
      <nav id="ghinho-pagination" style={{ width: '95%', margin: 'auto' }} className="align-bottom mt-2" >
        <ul className='pagination pagination-sm' >
          <li className="page-item" onClick={(event) => this.props.prevPage(event)}>
            <a className={["page-link", this.props.paginationItemStyle].join(' ')}>Previous</a>
          </li>

          {
            this.pages(nums)
          }

          <li className="page-item" onClick={() => this.props.nextPage(nums)}>
            <a className={["page-link", this.props.paginationItemStyle].join(' ')}>Next</a>
          </li>
        </ul>
      </nav>
    );
  }
}


Pagination.propTypes = propTypes;


export default Pagination;
