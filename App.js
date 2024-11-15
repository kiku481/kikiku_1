import logo from './logo.svg';
import './style.css';
import './bagunii.css';
import Cusimg from "./Cusimg"
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

/*function App() {
  return(
    <div id="wrapper">
      <Cusimg img_name={"https://picsum.photos/id/5/200/200"} id={"a"}></Cusimg>
      <Cusimg img_name={"https://picsum.photos/id/5/200/200"} id={"b"}></Cusimg>
      <Cusimg img_name={"https://picsum.photos/id/5/200/200"} id={"c"}></Cusimg>
      <Cusimg img_name={"https://picsum.photos/id/5/200/200"} id={"d"}></Cusimg>
    </div>
  )
}*/

/*function App() {

  function Click(){
    console.log("1 Clicked!")
    document.getElementsByClassName('msg')[0].innerHTML = "1 Clicked!"
  }

  return (
    <div className='App'>
      <div className='msg'>Here!</div>
      <button onClick={Click}>Click Me 1</button>
    </div>
  );
}*/

/*function App() {

  const [msg, SetMsg] = useState('Here!')

  function Click(){
    console.log("1 Clicked!")
    SetMsg("1 Clicked")
  }

  return (
    <div className='App'>
      <div>{msg}</div>
      <button onClick={Click}>Click Me 1</button>
    </div>
  );
}*/

/*function App() {
  const [count, setCount] = useState(0);
  function plus() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={plus}>Click Me 1</button>
    </div>
  );
}*/

/*function App() {
  const [count, setCount] = useState(0);
  function min() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={min}>Click Me 1</button>
    </div>
  );
}*/

/*function App() {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        backgroundColor: 'blue',
        opacity: isHovered ? 0.2 : 1,
        transition: 'opacity 0.3s',
      }}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}  
    >
    </div>
  );
}*/

/*function App() {
  const [opacity, setOpacity] = useState(0);
  const [size1, setSize] = useState({
    width: "100px",
    height: "100px",
  });

  function opacity1(op, size) {
    setOpacity(op);
    setSize({
      ...size1,
      width: size,
      height: size,
    });
  }


  useEffect(()=> opacity1(0.5, "100px"), []);

  return (
    <>
      <div
        style={{
          width: size1.width,
          height: size1.height,
          backgroundColor: 'red',
          opacity: opacity
        }}
        onMouseOver={()=> opacity1(1, "150px")} 
        onMouseOut={()=> opacity1(0.5, "100px")} ></div>
    </>
  )
}*/

/*function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, count: 1 }];
      }
    });
  };

  const decreaseCount = (id) => {
    setCart((prevCart) => {
      return prevCart
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, count: cartItem.count - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.count > 0);
    });
  };

  const items = [
    {
      id: '김치',
      name: '김치',
      img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240327_103%2F1711510583909hkp7C_PNG%2F112646426531743785_698619299.png&type=sc960_832',
    },
    {
      id: '숙주',
      name: '숙주',
      img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MThfNjEg%2FMDAxNzIzOTY4NzE4MjQ4.mOGuqYT9_NOykRI67Rc7PRSIIroWtUB04h4Kx7B7Dy8g.jhMwZhzhhRbhPEcWr0ID23VDL8X9KVqeSydCguR8lOYg.JPEG%2F%25BC%25F7%25C1%25D65.jpg&type=sc960_832',
    },
    {
      id: '귤',
      name: '귤',
      img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA5MzBfMTgz%2FMDAxNzI3Njc4ODI0OTUz.DgXREUCbz9yWrxG8lbdTnTAu9HCFPBliCYg9kDPQH74g.5xzAa23NSxMaQCS0RCe4dH7ngVecotFelpQAzIUsrk0g.PNG%2Fimage.png&type=sc960_832',
    },
    {
      id: '빙수',
      name: '빙수',
      img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA3MTNfMTU3%2FMDAxNzIwODM0Njk2ODgx.3kZGAiRgMM1wA2DueEI7rhJ5N7TAL434b_dV9IlljsYg.LHnYvHwM8akJkufLHpyBZE9FGH1M8BiNl5NyY3omM3wg.JPEG%2FIMG_8836.jpg&type=sc960_832',
    },
  ];

  return (
    <div id="container">
      <div id="boxes">
        {items.map((item) => (
          <div
            key={item.id}
            className="box"
            onClick={() => addToCart(item)}
            data-id={item.id}
          >
            <img src={item.img} alt={item.name} style={{ width: '100px', height: '100px' }} />
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>장바구니</h2>
        <div id="cart-items">
          {cart.map((cartItem) => (
            <div key={cartItem.id} className="cart-item">
              <div className="cart-box">{cartItem.name}</div>
              <span className="count">{cartItem.count}</span>
              <span className="unit">개</span>
              <button onClick={() => decreaseCount(cartItem.id)}>제거하기</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}*/

/*function App() {

  const [msg, SetMsg] = useState('')
  const input_ref = useRef()

  function handleLogin(){
    SetMsg(input_ref.current.value + '님 어서오구연')
  }

  function handleLogout(){
    SetMsg('')
    input_ref.current.value = ''
  }

  return (
    <div className='App'>
      ID:<input ref={input_ref}></input>
      <button onClick={handleLogin}>Login</button>
      <div>{msg && msg}</div>
      {msg && <button onClick={handleLogout}>Logout</button>}
    </div>
  )
}*/

/*function App() {

  return(
  <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={'페이지 없음'}></Route>
        <Route path='/a' element={'a 페이지'}></Route>
        <Route path='/b' element={'b 페이지'}></Route>
        <Route path='/c' element={'c 페이지'}></Route>
        <Route path='*' element={'몾참음'}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
*/

function ButtonNavigation() {
  const navigate = useNavigate();

  return (
    <div>
      {   }
      <button onClick={() => navigate('/')}>홈 페이지</button>
      <button onClick={() => navigate('/a')}>a 페이지</button>
      <button onClick={() => navigate('/b')}>b 페이지</button>
      <button onClick={() => navigate('/c')}>c 페이지</button>
      <button onClick={() => navigate('/unknown')}>잘못된 페이지</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ButtonNavigation /> {  }
        <Routes>
          <Route path="/" element={'홈 페이지'} />
          <Route path="/a" element={'a 페이지'} />
          <Route path="/b" element={'b 페이지'} />
          <Route path="/c" element={'c 페이지'} />
          <Route path="*" element={'잘못된 경로'} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//식곤증 애져요
//제가요?
//몰라요ㅠㅠㅜㅠㅜ
//마우스 올리면 0.2에서 1로 투명도 바뀌기를 리액트로 해라???? 음 ㅅㅂ 자살마렵죠
//표정이 다 뒤진표정암
//벌써 졸림 걍 개망했음 ㅅㅂ
//백기유연 보고싶다