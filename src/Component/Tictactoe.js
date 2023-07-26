import React, { useState } from 'react'
import "./Tictactoe.css"

const Tictactoe = () => {
    const[turn,setTurn]=useState("X");
    const[cells,setCells]=useState(Array(9).fill(""));
    const[winner ,setWinner]=useState();
   

    const checkWinner = (square) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagnol: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        };

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if (
                    square[pattern[0]] === '' ||
                    square[pattern[1]] === '' ||
                    square[pattern[2]] === ''
                ) {
                    // do nothing
                } else if (
                    square[pattern[0]] === square[pattern[1]] &&
                    square[pattern[1]] === square[pattern[2]]
                ) {
                    setWinner(square[pattern[0]]);
                    
                 
                }
            });
        }
    };

    const HandleClick = (num) => {
        let square=[...cells];
        if(cells[num]!=""){
            alert('alredy clicked');
            return;
        }
        if(turn==="X"){
            setTurn("O")
            square[num]="X";
        }
        else{
            setTurn("X")
            square[num]="O";
        }
        checkWinner(square);

        setCells(square);
        
        
        
     }



    const Cell = ({ num }) => {
        return <div onClick={() => HandleClick(num)} className="td">{cells[num]}</div>
    }

    const play=()=>{
        setCells(Array(9).fill(""));
        setWinner();
    }
    return (
        <>
            <img src="https://media.istockphoto.com/id/1209030907/vector/abstract-triangular-background.jpg?s=612x612&w=0&k=20&c=WL6sXFy_wr1z7Yk_lPbJ2Zhd2EjoM1eomgCN8C05Q6U=" />
            
            <div className="container">
                <h1>Turn of player having : {turn}</h1>
                <table>

                    <tbody>
                        <tr>
                            <td><Cell num={0} /></td>
                            <td><Cell num={1} /></td>
                            <td><Cell num={2} /></td>

                        </tr>
                        <tr>
                            <td><Cell num={3} /></td>
                            <td><Cell num={4} /></td>
                            <td><Cell num={5} /></td>

                        </tr>
                        <tr>
                            <td><Cell num={6} /></td>
                            <td><Cell num={7} /></td>
                            <td><Cell num={8} /></td>

                        </tr>

                    </tbody>
                </table>
                <div className="winner">Winner is: {winner}</div>
                <button onClick={play}>Play Again</button>
            </div>
        </>
    )
}

export default Tictactoe