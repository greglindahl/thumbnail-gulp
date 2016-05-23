// We need to show a button and a list
// this component should know when to show the list
// based on when the user clicks on a button

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    this.setState({ open: !this.state.open });
  },
  getInitialState: function(){
    return { open: false }
  },
  handleItemClick: function(item) {
    console.log(item)
  },
  render: function() {
    var list = this.props.items.map(function(item){
      return <ListItem item={item} whenItemClicked={this.handleItemClick} />
    }.bind(this));


    return <div className="dropdown">
      <Button
        whenClicked={this.handleClick}
        className="btn-default"
        title={this.props.title}
        subTitleClassName="caret"
        />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
        {list}
      </ul>
    </div>
  }
});
