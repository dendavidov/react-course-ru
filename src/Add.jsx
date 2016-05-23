/**
* Created by DavDA on 23.05.2016.
*/
import React from 'react';
import ReactDOM from 'react-dom';


var Add = React.createClass({
  getInitialState: function() {
    return {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true
    };
  },

  componentDidMount: function() {
    ReactDOM.findDOMNode(this.refs.author).focus();
  },

  onBtnClickHandler: function(e) {
    e.preventDefault();
    var author = ReactDOM.findDOMNode(this.refs.author).value;
    var textItem = ReactDOM.findDOMNode(this.refs.text);

    var item = [{
      author: author,
      text: textItem.value,
      bigText: '...'
    }];

    window.ee.emit('News.add', item);

    textItem.value = '';

    this.setState({textIsEmpty: true});
  },

  onCheckRuleClick: function(e) {
    this.setState({
      agreeNotChecked: !this.state.agreeNotChecked
    })
  },

  onSubmit: function(e) {
    e.preventDefault();
  },

  onFieldChange: function(fieldName, e) {
    var valueIsEmpty = e.target.value.trim().length === 0;
    var newFieldState = {};
    newFieldState[fieldName] = valueIsEmpty;
    this.setState(newFieldState)
  },


  render: function() {
    return (
      <form onSubmit={this.onSubmit} className='add cf'>
        <input
          type='text'
          className='add__author'
          defaultValue=''
          placeholder='Ваше имя'
          onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
          ref='author'
        />
        <textarea
          className='add__text'
          defaultValue=''
          placeholder='Текст новости'
          onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
          ref='text'
        ></textarea>
        <label className='add__checkrule'>
          <input
            type='checkbox'
            defaultChecked={false}
            ref='checkrule'
            onChange={this.onCheckRuleClick}
          />
          Я согласен с правилами
        </label>
        <button
          className='add__btn'
          onClick={this.onBtnClickHandler}
          ref='alert_button'
          disabled={this.state.agreeNotChecked || this.state.authorIsEmpty || this.state.textIsEmpty}
         >
          Добавить новость
        </button>
      </form>
    );
  }
});

export default Add;
