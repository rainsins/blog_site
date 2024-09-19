'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

function plot() {
  functionPlot({
      target: "#root",
      width: $('#root').width(),
      height: $('#root').width() / 1.77,
      yAxis: {
          domain: [-5, 5]
      },
      tip: {
          renderer: function () {}
      },
      grid: true,
      data: [{
              fn: "x^2",
              derivative: {
                  fn: "2 * x",
                  updateOnMouseMove: true
              }
          },{
              fn: "sin(x)",
          },{
              fn: "x - 1/6 * x^3",
          }
      ]
  });
}

$(document).ready(function () {
  plot();
});

$(window).resize(function () {
  plot();
});