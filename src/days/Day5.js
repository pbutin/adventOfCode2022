import { useState } from 'react';

const input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

function Day5() {
    let splited = input.split('\n\n');
    let positions = splited[0];
    let moves = splited[1];

    moves = moves.split('\n');
    let movesBuffer=[];
    moves.forEach(move => {
        movesBuffer.push(move.split(' '))
    });
    moves = movesBuffer;

    positions = positions.split('\n');
    positions = positions.splice(0,positions.length-1);

    let positionsBuffer = [[]];
    positionsBuffer = Array.from(Array(10), () => {return [];} );

    for (var i=positions.length-1; i>=0; i-=1) {
        let y = 1;
        while(y < positions[i].length) {
            // console.log();
            console.log(positions[i].charAt(y));
            positionsBuffer[y][positions.length-1-i] = positions[i].charAt(y);
            y+=4;
        }
    }

    console.log(positionsBuffer);

    for (var i=0; i< positionsBuffer.length-1; i++) {
        if (positionsBuffer[i][0] === undefined) {
            console.log(i);
            positionsBuffer.splice(i, i);
        }
    }

    positions = positionsBuffer;

    console.log(positions);
    // console.log(moves);

    return (
        <div className="App">
        </div>
    );
}

export default Day5;