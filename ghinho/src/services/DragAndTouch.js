export default class DragAndTouch {
  MARGIN = 0;
  pos1 = 0; pos2 = 0; pos3 = 0; pos4 = 0;

  dragElement = (element, widget) => {
    this.element = element;
    this.widget = widget;
    localStorage.setItem('GHIM_GHINHO_TOGGLE', 'true');
    let header = element.id + 'header';
    this.widgetCordinatesHandler();
    if (document.getElementById(header)) {
      document.getElementById(header).onmousedown = (event) => { this.dragMouseDown(event, element) };
    } else {
      element.onmousedown = (event) => { this.dragMouseDown(event, element) };
    }
  }

  widgetCordinatesHandler = () => {
    let e_left = this.element.offsetLeft;
    let e_top = this.element.offsetTop;
    let e_width = this.element.offsetWidth;
    let e_height = this.element.offsetHeight;
    let e_where_width = e_left + e_width / 2;
    // trường hợp width của browser quá nhỏ
    if (window.innerWidth > 767.98) { // trường hợp > 767.98 - medium size 
      this.widget.style.top = e_top + 'px';
      if (e_where_width <= window.innerWidth / 2) {
        this.widget.style.left = e_left + e_width + 'px';
      } else { 
        this.widget.style.left = e_left - e_width + 'px';
      }
    } else { // trường hợp <= 767.98 - medium size 
      this.widget.style.left = e_left + 'px';
      this.widget.style.top = e_top + e_height + 'px';
      // this.widget.style.left = e_top + e_height + 'px';
    }
  }

  elementDrag = (e, element) => {
    e = e || window.event;
    this.pos1 = this.pos3 - e.clientX;
    this.pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;

    element.style.top = (element.offsetTop - this.pos2) + 'px';
    element.style.left = (element.offsetLeft - this.pos1) + 'px';
    this.widgetCordinatesHandler();
  }

  dragMouseDown = (e, element) => {
    e = e || window.event;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    if (localStorage.getItem('GHIM_GHINHO_TOGGLE') === 'true') {
      document.onmouseup = () => { this.endDragGhim(element) };
    } else {
      document.onmouseup = () => { this.endDrag(element) };
    }
    document.onmousemove = (event) => { this.elementDrag(event, element) };
  }

  endDragGhim = (element) => {
    let width = window.innerWidth;
    let left = element.offsetLeft + element.offsetWidth / 2;

    if (left <= width / 2) {
      element.style.left = '0px';
    } else {
      element.style.left = (width - element.offsetWidth - this.MARGIN) + 'px';
    }
    this.checkWidthHeight(element);
    document.onmouseup = null;
    document.onmousemove = null;
  }

  endDrag = (element) => {
    this.checkWidthHeight(element);
    document.onmouseup = null;
    document.onmousemove = null;
  }

  checkWidthHeight = (element) => {
    let top = element.offsetTop;
    let left = element.offsetLeft;

    if (top < this.MARGIN) {
      element.style.top = '0px';

    } else if (top + element.offsetHeight + this.MARGIN > window.innerHeight) {
      element.style.top = (window.innerHeight - element.offsetHeight - this.MARGIN) + 'px';
    }

    if (left < this.MARGIN) {
      element.style.left = '0px';
    } else if (left + element.offsetWidth + this.MARGIN > window.innerWidth) {
      element.style.left = (window.innerWidth - element.offsetWidth - this.MARGIN) + 'px';
    }
    this.widgetCordinatesHandler();
  }
}