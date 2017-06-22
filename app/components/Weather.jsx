var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');
// var Nav = require('nav');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,  // After getting location, we have to clear in the cache. so we wrote location: undefined
      temp: undefined // the same as the above.
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function(){
    var location = this.props.location.query.location; //http://localhost:3000/#/?location=Cincinnati&_k=8p0st0. Now the location of cinicnnati will be stored in new variable location.
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash = '#/'; //This will automatically redirect to the http://localhost:3000/#/?_k=agds97. which means it doesn't have any location after question mark.
    }
  },
  componentWillReceiveProps: function(newProps){ //If you want to update the props when the url changes.
    //we write this function because in Nav.jsx, we wrote the window.location.hash = '#/?location=' + encodedLocation;
    //This will reflect only in the URL but not the weather component inorder to make that work, we need to give it in this way.
    var location = newProps.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;
    //console.log(errorMessage);
    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        {/* <Nav onSearchs={this.handleSearch}/> */}
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
