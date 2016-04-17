/**
 * Created by lowellbander on 4/12/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactCanvas from 'react-canvas';

import Test from './Test';

var Surface = ReactCanvas.Surface;
var Image = ReactCanvas.Image;
var Text = ReactCanvas.Text;

class Conjurer extends React.Component {
  getTextStyle() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: 50,
      lineHeight: 20,
      fontSize: 25
    };
  }

  render() {
    var surfaceWidth = window.innerWidth;
    var surfaceHeight = window.innerHeight;
    var textStyle = this.getTextStyle();

    return (
      <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
        <Text style={textStyle}>
          Here is some text.
        </Text>
        <Test xCoord={0} yCoord={50}/>
      </Surface>
    );
  }
}

ReactDOM.render(
  <Conjurer />,
  document.getElementById('main')
);

export default Conjurer;
