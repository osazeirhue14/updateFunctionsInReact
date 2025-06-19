import './TicTacToe5.css';
import React,{useState,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';
let data=["","","","","","","","","","","","","","","","","","","","","","","","",""];
function TicTacToe5(){
    const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

    const [count,setCount]=useState(0);
    const [lock,setLock]=useState(false);
    const titleRef = useRef(null);
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
    let box17 = useRef(null);
    let box18 = useRef(null);
    let box19 = useRef(null);
    let box20 = useRef(null);
    let box21 = useRef(null);
    let box22 = useRef(null);
    let box23 = useRef(null);
    let box24 = useRef(null);
    let box25 = useRef(null);
    const box_array =[box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25];
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
    const checkWin=()=>{
        if(data[0]===data[1]&& data[1]===data[2]&& data[2]===data[3]&& data[3]===data[4] &&data[4]!==""){
       won(data[4]);
    }else if (data[5]===data[6]&& data[6]===data[7]&& data[7]===data[8]&& data[8]===data[9] &&data[9]!==""){
        won(data[9]);
    }else if (data[10]===data[11]&& data[11]===data[12]&& data[12]===data[13]&& data[13]===data[14] &&data[14]!==""){
        won(data[14]);
    }else if (data[15]===data[16]&& data[16]===data[17]&& data[17]===data[18]&& data[18]===data[19] &&data[19]!==""){
        won(data[19]);
    }else if (data[20]===data[21]&& data[21]===data[22]&& data[22]===data[23]&& data[23]===data[24] &&data[24]!==""){
        won(data[24]);
    }else if (data[0]===data[1]&& data[1]===data[2]&& data[2]===data[3]&& data[3]===data[4] &&data[4]!==""){
        won(data[4]);
    }else if (data[0]===data[5]&& data[5]===data[10]&& data[10]===data[15]&& data[15]===data[20] &&data[20]!==""){
        won(data[20]);
    }
    else if (data[1]===data[6]&& data[6]===data[11]&& data[11]===data[16]&& data[16]===data[21] &&data[21]!==""){
        won(data[21]);
    }else if (data[2]===data[7]&& data[7]===data[12]&& data[12]===data[17]&& data[17]===data[22] &&data[22]!==""){
        won(data[22]);
    }else if (data[3]===data[8]&& data[8]===data[13]&& data[13]===data[18]&& data[18]===data[23] &&data[23]!==""){
        won(data[23]);
    }else if (data[4]===data[9]&& data[9]===data[14]&& data[14]===data[19]&& data[19]===data[24] &&data[24]!==""){
        won(data[24]);
    }
    else if (data[0]===data[6]&& data[6]===data[12]&& data[12]===data[18]&& data[18]===data[24] &&data[24]!==""){
        won(data[24]);
    }
    else if (data[4]===data[8]&& data[8]===data[12]&& data[12]===data[16]&& data[16]===data[20] &&data[20]!==""){
        won(data[20]);
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
        data=["","","","","","","","","","","","","","","","","","","","","","","","",""];
        titleRef.current.innerHTML=`<h2>TicTacToe Game 5x5</h2>`;
        box_array.forEach(box => {
            if (box.current) {
              box.current.innerHTML = "";
            }
          });

    }
    return( 
        <> 
        <div className="title" ref={titleRef} ><h2>TicTacToe Game 5x5</h2></div>
        <p>In this game a user needs 5 in a Row to win the game, Enjoy!</p>
        <div className="board">
            <div className="row1">
                <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
                <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
                <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
                <div className="boxes" ref={box10} onClick={(e)=>{toggle(e,9)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" ref={box11} onClick={(e)=>{toggle(e,10)}}></div>
                <div className="boxes" ref={box12} onClick={(e)=>{toggle(e,11)}}></div>
                <div className="boxes" ref={box13} onClick={(e)=>{toggle(e,12)}}></div>
                <div className="boxes" ref={box14} onClick={(e)=>{toggle(e,13)}}></div>
                <div className="boxes" ref={box15} onClick={(e)=>{toggle(e,14)}}></div>
            </div>
            <div className="row4">
            <div className="boxes" ref={box16} onClick={(e)=>{toggle(e,15)}}></div>
            <div className="boxes" ref={box17} onClick={(e)=>{toggle(e,16)}}></div>
            <div className="boxes" ref={box18} onClick={(e)=>{toggle(e,17)}}></div>
            <div className="boxes" ref={box19} onClick={(e)=>{toggle(e,18)}}></div>
            <div className="boxes" ref={box20}onClick={(e)=>{toggle(e,19)}}></div>
            </div>
            <div className="row5">
            <div className="boxes" ref={box21} onClick={(e)=>{toggle(e,20)}}></div>
            <div className="boxes" ref={box22} onClick={(e)=>{toggle(e,21)}}></div>
            <div className="boxes" ref={box23} onClick={(e)=>{toggle(e,22)}}></div>
            <div className="boxes" ref={box24} onClick={(e)=>{toggle(e,23)}}></div>
            <div className="boxes" ref={box25}onClick={(e)=>{toggle(e,24)}}></div>
            </div>
            <button onClick={()=> reset()}>Reset</button><br/>
            <button onClick={goHome}>Back to HomePage</button>
        </div>
        </>
    );

}
export default TicTacToe5