import React from 'react'
import PropTypes from 'prop-types';

const Counter = (props) => {
    return (
      <div class='wrapper'>
          <div class='header'>
              <h1 class='header__h1'>Welcome to the COUNTER</h1>
          </div> 
          <div class='main'> 
              <h3 class='main__h3'>{props.count}</h3>
              <div class='main__event main__plus'> 
                <span class='main__span'>To increase the digit: </span>
                <button onClick={props.inc} class='main__button'>Plus</button>
              </div>
              <div class='main__event main__minus'>
                <span class='main__span'>To decrease the digit: </span>
                <button onClick={props.dec} class='main__button'>Minus</button>
              </div>
              <div class='main__event main__reset'>
                <span class='main__span'>To reset the digit: </span>
                <button onClick={props.reset} class='main__button'>Reset</button>
              </div>   
          </div>
     </div>
    )
}

Counter.propTypes = {
    count: PropTypes.number,
    inc: PropTypes.func,
    dec: PropTypes.func,
    reset: PropTypes.func
}

export default Counter

