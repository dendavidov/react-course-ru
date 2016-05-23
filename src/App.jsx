import React from 'react';
import News from './News';
import Add from './Add';
import EventEmitter from 'wolfy87-eventemitter';

window.ee = new EventEmitter();

var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

const App = React.createClass({
  getInitialState: function() {
    return {
      news: my_news
    }
  },

  componentDidMount: function() {
    var _this = this;
    window.ee.addListener('News.add', function(item) {
      var nextNews = item.concat(_this.state.news);
      _this.setState({news: nextNews});
    })
  },
  componentWillUnmount: function() {
    window.ee.removeListener('News.add');
  },
    
  render: function() {
    console.log(ee);
    console.log('render');
    return (
      <div className="App">
        <h3>Новости</h3>
          <Add />
        <News data={this.state.news}/>
      </div>
    );
  }
});

export default App
