/** @jsx React.DOM */
/*
 * Creating a new React Class
 *
 */

var HourToMinute = React.createClass({
  // setting initial state and variables
  getInitialState: function() {
    return {
      time: 0.00,
      placeholder: 'Minutes',
      commonTimes: [
        {
          name: '10',
          value: 10
        },
        {
          name: '20',
          value: 20
        },
        {
          name: '50',
          value: 50
        }
      ]
    };
  },
  // handling the Change event
  handleCalculationChange: function(e) {
    // calculating the hours
    // when calling on an input this
    // function takes the event as parameter,
    // otherwise call like this.handleCalculationChange(null, number);
    var minutes = (arguments.length > 1) ? arguments[1] : e.target.value;
    var result = minutes / 60;
    var hour = +result.toString().substr(0, 4);
    //return +result.toString().substr(0, 4);
    
    // setting the time var to the result
    this.setState({
      time: hour
    });
  },
  handleCommon: function(event) {
    var time = event.target.parentNode.dataset.time;
    this.handleCalculationChange(null, time)
  },
  // rendering the Markup for the Component
  render: function() {
    var common = this.state.commonTimes.map(function(time, index) {
      return(
        <li data-time={time.name} key={index} onClick={this.handleCommon}>{time.name} Minutes &bull;</li>
      )
    }.bind(this)); 
    return (
      <section className={this.props.classNames}>
        <div className="output" id="output">{this.state.time}</div>
        <input type="number" onChange={this.handleCalculationChange} id="minute" placeholder={this.state.placeholder} />
          <ul className="list--bare">
            Common times<br />
            {common}
          </ul>
      </section>
    )
  }
});


 // Add the defined component to the document.
React.renderComponent(<HourToMinute classNames="surface center"/>, document.body);

