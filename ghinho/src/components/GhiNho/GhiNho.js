import React, { Component } from 'react';
import './GhiNho.scss';
import GhiNhoContent from './GhiNhoContent/GhiNhoContent';
import Datas from './Datas/Datas';
import DragAndTouch from '../../services/DragAndTouch';
import instanceAxios from '../../axios-orders';
import Aux from '../../hoc/_Aux/_Aux';
import WidgetDetails from './WidgetDetails/WidgetDetails';
import Pagination from '../Pagination/Pagination';

class GhiNho extends Component {
  dragAndTouch = new DragAndTouch();
  showGhiNho = true;
  state = {
    ghim: true,
    showGhiNho: true,
    haveData: false,
    showData: false,
    congthuc: true,
    showWidgetDetails: false,
    showLyThuyet: true,
    showVideo: false,
    datas: [],
    currentDatas: [],
    selectedData: {},
    selectedPageNum: 0,
    numItemsOfPage: 5,
    contentBaoSai: ''
  }

  componentDidMount() {
    this.ghinho = document.getElementById("ghinho");
    this.ghinhoheader = document.getElementById('ghinhoheader');
    this.widgetGhinho = document.getElementById('widget-ghinho');
    this.dragAndTouch.dragElement(this.ghinho, this.widgetGhinho);
    this.ghiNhoPagination = document.getElementById('ghinho-pagination');
    localStorage.setItem('showWidget', 'false');
  }

  ghimHandle = () => {
    if (this.state.ghim === false) {
      this.dragAndTouch.checkWidthHeight(this.ghinho);
      this.dragAndTouch.endDragGhim(this.ghinho);
      localStorage.setItem("GHIM_GHINHO_TOGGLE", String(!this.state.ghim));
    } else { localStorage.setItem("GHIM_GHINHO_TOGGLE", String(!this.state.ghim)); }
    this.setState({
      ...this.setState,
      ghim: !this.state.ghim
    })
  }

  dataHandle = (url) => {
    instanceAxios.get(url)
      .then(res => {
        this.setState({
          ...this.state,
          haveData: true,
          datas: res.data.data,
          selectedPageNum: 0
        })
      }, err => { console.log(err) })
      .catch(err => {
        console.log(err)
        this.setState({
          ...this.state,
          haveData: false,
          datas: null,
          selectedPageNum: 0
        })
      })
  }

  baoLoiHandle = (baoloi) => {
    const url = `/ghichu/baoloi`;
    instanceAxios.post(url, baoloi).then(res => {
      console.log(res.data)
      this.setState({
        contentBaoSai: ''
      })
    })
  }

  showDataHandle = (event) => {
    alert(event.target.innerHTML)
    this.setState({
      ...this.state,
      showData: !this.state.showData
    })
  }

  showGhiNho = (event) => {
    event.stopPropagation();
    this.ghinho.classList.toggle('animate')
    // this.ghinhoheader.o
    if (this.state.showGhiNho === true) {
      this.checkWidthHeight_GhiNho(this.ghinho, 95, 45);
      this.setState({
        ...this.state,
        showGhiNho: !this.state.showGhiNho,
        showWidgetDetails: false
      })
    } else {
      this.checkWidthHeight_GhiNho(this.ghinho, 400, 45);
      if (localStorage.getItem('showWidget') === 'true') {
        this.setState({
          ...this.state,
          showGhiNho: !this.state.showGhiNho,
          showWidgetDetails: true
        })
      } else {
        this.setState({
          ...this.state,
          showGhiNho: !this.state.showGhiNho
        })
      }
    }
    setTimeout(() => {
      this.dragAndTouch.widgetCordinatesHandle();
    }, 400)

  }

  checkWidthHeight_GhiNho = (element, width, height) => {
    let top = element.offsetTop;
    let left = element.offsetLeft;
    if (left < window.innerWidth / 2) {
      element.style.left = 0 + 'px';
    } else {
      element.style.left = window.innerWidth - width + 'px';
    }

    if (top + height > window.innerHeight) {
      element.style.top = window.innerHeight - height;
    }
  }

  switchCongThucHandle = (congthuc) => {
    let check = congthuc === 'Công thức'
    this.setState({
      ...this.state,
      congthuc: !check
    })
  }

  // data have selected by user - set state selectedData;
  selectedDataHandle = (data) => {
    localStorage.setItem('showWidget', 'true');
    this.setState({
      ...this.state,
      selectedData: data,
      showWidgetDetails: true,
      showVideo: false,
    })
  }

  closeWidgetDetailsHandle = () => {
    localStorage.setItem('showWidget', 'false');
    this.setState({
      ...this.state,
      showWidgetDetails: false
    })
  }

  selectPage = (pageNum) => {
    this.setState({
      selectedPageNum: pageNum,
      showVideo: false,
    })
  }

  prevPage = (event) => {
    event.preventDefault();
    let selectedPageNum = this.state.selectedPageNum;
    if (selectedPageNum > 0) {
      this.setState({
        selectedPageNum: selectedPageNum - 1
      })
    }
  }

  nextPage = (nums) => {
    let selectedPageNum = this.state.selectedPageNum;
    if (selectedPageNum < nums - 1) {
      this.setState({
        selectedPageNum: selectedPageNum + 1
      })
    }
  }

  showLyThuyetHandle = () => {
    this.setState({
      showLyThuyet: !this.state.showLyThuyet
    })
  }

  showVideoHandle = () => {
    this.setState({
      showVideo: !this.state.showVideo
    })
  }

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    let ghiNhoContentStyle = this.state.congthuc ? 'light-yellow' : 'light-green';
    let paginationItemStyle = this.state.congthuc ? 'bg-warning text-dark' : 'bg-success text-white';
    let ghim = (
      <div className="tooltip_">
        <i id="ghim-ghinho" className="fa fa-thumb-tack ghimChecked" onClick={this.ghimHandle}></i>
        <span className="tooltiptext">Bỏ ghim</span>
      </div>
    );
    let currentDatas = [...this.state.datas];

    if (this.state.ghim === false) {
      ghim = <div className="tooltip_">
        <i id="ghim-ghinho" className="fa fa-thumb-tack" onClick={this.ghimHandle}></i>
        <span className="tooltiptext">Ghim</span>
      </div>
    }

    if (this.state.datas.length > 0) {
      currentDatas = currentDatas.splice(this.state.selectedPageNum * this.state.numItemsOfPage, this.state.numItemsOfPage)
    }

    return (
      <Aux>
        <div id="ghinho" className={ghiNhoContentStyle}>
          <div id="ghinhoheader">
            <label className="custom-check" >
              <input type="checkbox" name="onOff" onClick={this.showGhiNho} />
              <i></i>
              <span></span>
            </label>

            {this.state.showGhiNho ? ghim : null}
          </div>
          {this.state.showGhiNho ?
            <div id="ghinho__content" className={["ghinho__content"].join(' ')}>
              <GhiNhoContent
                dataHandle={this.dataHandle}
                switchedCongThuc={this.switchCongThucHandle}
              />

              {
                this.state.haveData === true ?
                  <Datas
                    datas={currentDatas}
                    clicked={this.showDataHandle}
                    selectedData={this.selectedDataHandle}

                  />
                  : <div style={{ width: '95%', margin: 'auto' }}>Chưa có data</div>
              }

              <Pagination
                paginationItemStyle={paginationItemStyle}
                selectedPageNum={this.state.selectedPageNum}
                datas={this.state.datas}
                numItemsOfPage={this.state.numItemsOfPage}
                selectPage={this.selectPage}
                prevPage={this.prevPage}
                nextPage={this.nextPage}

              />
            </div> : null
          }

        </div>
        <WidgetDetails
          showLyThuyet={this.state.showLyThuyet}
          showVideo={this.state.showVideo}
          showVideoHandle={this.showVideoHandle}
          showLyThuyetHandle={this.showLyThuyetHandle}
          selectedData={this.state.selectedData}
          contentBaoSai={this.state.contentBaoSai}
          showed={this.state.showWidgetDetails}
          closedWiget={this.closeWidgetDetailsHandle}
          baoLoiHandle={this.baoLoiHandle}
          onChangeValue={this.onChangeValue}
        />
        
      </Aux>
    );
  }
}

export default GhiNho;
