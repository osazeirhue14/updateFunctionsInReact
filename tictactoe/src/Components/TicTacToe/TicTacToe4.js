import './TicTacToe4.css';
import React,{useState,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';
let data=["","","","","","","","","","","","","","","",""];
function TicTacToe4(){
    const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }
    const titleRef =useRef(null);
    const [count,setCount]=useState(0);
    const [lock,setLock] =useState(false);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    let box10 = useRef(null);
    let box11 = useRef(null);
    let box12 = useRef(null);
    let box13 = useRef(null);
    let box14 = useRef(null);
    let box15 = useRef(null);
    let box16 = useRef(null);
    const box_array =[box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16];

    const toggle = (e, num) => {//when a box is clicked this happens
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src=${cross_icon} />`;
            data[num] = "x";
          } else {
            e.target.innerHTML = `<img src=${circle_icon} /> `;
            data[num] = "o";
          }
          setCount(count + 1);
        checkWin();
    };
    function checkWin(){
        if(data[0]===data[1] && data[1]===data[2] && data[2]===data[3] && data[3]!==""){
            won(data[3]);
        }else if(data[4]=== data[5] && data[5]===data[6] && data[6]===data[7] && data[7]!==""){
            won(data[7]);
        }
        else if(data[8]=== data[9] && data[9]===data[10] && data[10]===data[11] && data[11]!==""){
            won(data[11]);
        }else if(data[12]=== data[13] && data[13]===data[14] && data[14]===data[15] && data[15]!==""){
            won(data[15]);
        }else if(data[0]=== data[4] && data[4]===data[8] && data[8]===data[12] && data[12]!==""){
            won(data[12]);
        }else if(data[1]=== data[5] && data[5]===data[9] && data[9]===data[13] && data[13]!==""){
            won(data[13]);
        }else if(data[2]=== data[6] && data[6]===data[10] && data[10]===data[14] && data[14]!==""){
            won(data[7]);
        }else if(data[3]=== data[7] && data[7]===data[11] && data[11]===data[15] && data[15]!==""){
            won(data[15]);
        }
        else if(data[0]=== data[5] && data[5]===data[10] && data[10]===data[15] && data[15]!==""){
            won(data[15]);
        }else if(data[3]=== data[6] && data[6]===data[9] && data[9]===data[12] && data[12]!==""){
            won(data[7]);
        }

    }
    const won = (winner)=>{
        setLock(true);
        if(winner==="x"){
            titleRef.current.innerHTML=`<h2>Congrats X wins! </h2>`;

        }else{
            titleRef.current.innerHTML=`<h2>Congrats O wins! </h2>`;

        }
            
    }
    
    function reset(){
        setLock(false);
        setCount(0);
        data = ["","","","","","","","","","","","","","","",""];
        titleRef.current.innerHTML=`<h2>TicTacToe Game 4x4</h2>`;
        box_array.forEach(box => {
            if (box.current) {
              box.current.innerHTML = "";
            }
          });

    }
    return(<div>
        <div className="title" ref={titleRef}><h2>TicTacToe Game 4x4</h2></div>
        <p>In this game a user needs 4 in a Row to win the game, Enjoy!</p>
        <div className="board">
            <div className="row1">
                <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
                <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
                <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
                <div className="boxes" ref={box10} onClick={(e)=>{toggle(e,9)}}></div>
                <div className="boxes" ref={box11} onClick={(e)=>{toggle(e,10)}}></div>
                <div className="boxes" ref={box12} onClick={(e)=>{toggle(e,11)}}></div>
            </div>
            <div className="row4">
                <div className="boxes" ref={box13} onClick={(e)=>{toggle(e,12)}}></div>
                <div className="boxes" ref={box14} onClick={(e)=>{toggle(e,13)}}></div>
                <div className="boxes" ref={box15} onClick={(e)=>{toggle(e,14)}}></div>
                <div className="boxes" ref={box16} onClick={(e)=>{toggle(e,15)}}></div>
            </div>
<button onClick={()=>{reset()}}>Reset</button><br/>
<button onClick={goHome}>Back to HomePage</button>
        </div>
        </div>);

}
export default TicTacToe4;