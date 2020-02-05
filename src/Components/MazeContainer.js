import React, {Fragment, useEffect, useState} from 'react';
import useMaze from "./useMaze";
import Cell from "./Cell/Cell";

const MazeContainer = (props) => {

    const {mazeGrid, currentLocation, up, down, right, left, finish} = useMaze();

    // 4 stands for the player location
    // mazeGrid[currentLocation[0]][currentLocation[1]] = 4;

    //maps through the mazeGrid to return cells in specific style
    const gameRepresentation = mazeGrid.map((row, rowIndex) => {
        const rowRepresentation = row.map((cell, cellIndex) => {
            //checks the player's location
            let isPlayerHere = currentLocation[0] === rowIndex && currentLocation[1] === cellIndex;
            return <Cell key={rowIndex.toString() + cellIndex.toString()} cellValue={cell} isPlayerHere={isPlayerHere}/>;

        });
        return <div key={rowIndex.toString()} style={{height: '70px'}}>{rowRepresentation}</div>
    });

    //setting the winning condition
    let playerWon;
    if (finish) {
        playerWon = <div>You found the exit!</div>
    }
    //todo behaves weird
    // useEffect(() => {
    //     document.addEventListener('keydown', handleKeyDown);
    //     document.addEventListener('keyup', handleKeyUp)
    // });


    const [currentMoveAllowed, setMoveAllowed] = useState(true);

    //controlling the player location with arrow keys
    const handleKeyDown = (e) => {
        if (currentMoveAllowed) {
            switch (e.keyCode) {
                case 37:
                    left();
                    setMoveAllowed(false);
                    break;
                case 38:
                    up();
                    setMoveAllowed(false);
                    break;
                case 39:
                    right();
                    setMoveAllowed(false);
                    break;
                case 40:
                    down();
                    setMoveAllowed(false);
                    break;
                default:
                    break
            }
        }

    };

    const handleKeyUp = (e) => {
        setMoveAllowed(true)
    };


    return (<Fragment>

            <div
                tabIndex={-1}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}>
                {gameRepresentation}
            </div>
            <div>
                {playerWon}
                <button onClick={up}>Button up</button>
                <button onClick={down}>Button down</button>
                <button onClick={left}>Button left</button>
                <button onClick={right}>Button right</button>
            </div>
        </Fragment>
    )
};

export default MazeContainer;