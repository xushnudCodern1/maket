









import { BrowserRouter, Routes, Route } from "react-router-dom";
import  img from './qiz.jfif'
import imgn from './bok.png'
import img2 from './28.png'
import img3 from './apl.png'
import img4 from './vip.png'
import img5 from './sam.png'
import img6 from './q2.png'
import img7 from './tel.png'
import img8 from './email.png'
import tel1 from './ins.jpg'
import tel2 from './teleg.jpg'
import tel3 from './face.png'
import tel4 from './tw.png'

// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Nopage from "./pages/Nopage";
import "./App.css"
import Sub from "./pages/sub";

import News from "./pages/News";
import Sale from "./pages/Sale";
import Set from "./pages/Set";

import Layout from "./pages/Layout";
import CHat from "./pages/chat";
import Nopage from "./pages/Nopage";


function App() {
  return (
    <div className="App">
      <div className="newapp">
        <div className="head">
          <ul id="ul2">
          
            <li>Ташкент</li>
            <li>About marketplace</li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
            <li>Public offering</li>
          </ul>
          <ul id="ul1">
            <li id="li1">Interface language</li>
            <li>Have a question?</li>
          </ul>
        </div>

        <div className="head2">
          <div className="Adds">
            <h2>Adds</h2>
          </div>
          
        <input type="text"    placeholder="search..."/>
        <div className="ikki" id="bi">
          <div className="qizil"></div>
          <img src={imgn}></img>
        </div>
       <div className="ikii2">
        <div className="qizil"></div>
        <img src={img2}></img>
       </div>
        </div>
<div className="user">
  <div className="kat">
    <img src={img}  /><h2>Dilfuza Qodirova</h2>
    <h3>@username</h3>
  </div>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
             <Route index  element={<Sub/>}/>
   <Route path="/chat" element={<CHat/>} />
             <Route path="/news"  element={<News/>}/>
             <Route path="/sale"  element={<Sale/>}/>
             <Route path="/setti"  element={<Set/>}/>
             <Route path="*" element={<Nopage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
</div>
<div className="apple">
        <div className="header">
          <h3>Brands</h3><h4>See all</h4>
        </div>
        <div className="apl">
          <div className="apl1">
            <img src={img3}></img>
            <h5>Apple</h5>
          </div>
          <div className="apl1">
          <img src={img4}></img>
            <h5>Vip brand</h5>
          </div>
          <div className="apl1" id="tu">
          <img src={img5}></img>
            <h5>Samsung</h5>
          </div>
        </div>
<br />
        <div className="apl">
          <div className="apl1">
          <img src={img3}></img>
          <h5>Apple</h5>
          </div>
          <div className="apl1">
          <img src={img3}></img>
          <h5>Apple</h5>
          </div>
          <div className="apl1">
          <img src={img3}></img>
          <h5>Apple</h5>
          </div>
        </div>
<br />
        <div className="apl">
          <div className="apl1">
          <img src={img3}></img>
          <h5>Apple</h5>
          </div>
          <div className="apl1">
          <img src={img3}></img>
          <h5>Apple</h5>
          </div>
          <div className="apl1">
          <img src={img3}></img>
          <h5>Apple</h5>
          </div>
        </div>
        <div className="iud">
          <img src={img6}></img>
        </div>
      </div>

      
      </div>
      <div className="foolter">
        <div className="kol"></div>
        <div className="Addss">

          <h2>adds</h2>
        </div>
        <div className="yoz">
          <h2>Putin studied law at Leningrad State University.</h2>
        </div>

        <div className="zq">
          <h2>Information</h2>
          <h3>About Us</h3>
          <h3>More  Search</h3>
          <h3>Testimionals</h3>
          <h3>News</h3>
        </div> 

        

        <div className="zq" id="w">
          <h2>Helpful Links</h2>
          <h3>Services</h3>
          <h3>Support</h3>
          <h3>Support</h3>
          <h3>Privacy Policy</h3>
        </div>


        <div className="zq" id="we">
          <h2>For Partnerships</h2>
          <h3>Get help</h3>
          <h3>FAQ’s</h3>
          <h3>Contact us</h3>
         
        </div>



        
        <div className="zq" id="wer">
          <h2>Contact Us</h2>
          <h3><img src={img7}></img>+998 90 109-24-35</h3>
          <h3> <img src={img8}></img>Info-adds@gmail.com</h3>
          
         
        </div>
        <div className="ona">
          <div className="bola">
            <img src={tel1}></img>
          </div>
          <div className="bola">
          <img src={tel2}></img>
          </div>
          <div className="bola">
          <img src={tel3}></img>
          </div>
          <div className="bola">
          <img src={tel4}></img>
          </div>
        </div>


        <div className="fool">
          <h2>FAQ</h2>
          <h2>Privacy</h2>
          <h2>Terms of Condition</h2>
        </div>
      </div>

      
      
  
    </div>
  );
}

export default App;


