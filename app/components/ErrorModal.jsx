var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  propTypes: {
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    var {title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal')); ////we use componentDidMount because in order to open modal. By dedault modal will not when the component is called so we need to use componentDidMount.
    modal.open();
  },
  render: function () {
    return (
      <div>
        //we didn't write anything in the return of render function because foundation is stopping the DOM
        // to prevent from rendering the elements after an error occured. so inorder to fix this, we are making use of componentDidMount
        // which is going to be rendered after the render function.
      </div>
    );
  }
});

module.exports = ErrorModal;
