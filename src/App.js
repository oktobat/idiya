import React from 'react';
import './App.css';
import Menu from './Menu'

const App = () => {

  const products = [
    {name:'꿀호떡', src:'https://www.ediya.com/files/menu/IMG_1603093365707.png'},
    {name:'아이스크림 호떡', src:'https://www.ediya.com/files/menu/IMG_1603093365707.png'},
    {name:'수플레 치즈 케이크', src:'https://www.ediya.com/files/menu/IMG_1603093365707.png'},
    {name:'데블스 초코 케이크', src:'https://www.ediya.com/files/menu/IMG_1603093365707.png'},
    {name:'햄앤치즈샌드위치', src:'https://www.ediya.com/files/menu/IMG_1603093365707.png'},
    {name:'떠먹는 티라미수', src:'https://www.ediya.com/files/menu/IMG_1603093365707.png'},
    {name:'떠먹는 롤케익(플레인)', src:'https://www.ediya.com/files/menu/IMG_1603093365707.png'},
    {name:'떠먹는 롤케익(초코)', src:'https://www.ediya.com/files/menu/IMG_1603093365707.png'}
  ];

  return (
    <div className="row">
      <h1>이디야 베이커리</h1>
      <Menu products={products} />
    </div>
  );
};

export default App;