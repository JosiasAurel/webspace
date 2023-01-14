import React from "react";

const Automata: React.FC = (): JSX.Element => {
  React.useEffect(() => {
    const canvas = document.getElementById("automata") as HTMLCanvasElement;

    const ctx = canvas.getContext("2d");
    const dpi = window.devicePixelRatio;
    ctx.scale(dpi, dpi);

    /*
    const computedWidth = +getComputedStyle(canvas).width.split("px").join("");
    const computedHeight = +getComputedStyle(canvas)
      .height.split("px")
      .join("");
    canvas.width = Math.floor(computedWidth * dpi);
    canvas.height = Math.floor(computedHeight * dpi);
*/

    /*  
Cellular Automata
I want to make a grid that will match the screen size
I want every square on the screen to by a 3x3 square
*/

    const horizontalSquareCount = Math.floor(canvas.width / 2);
    const verticalSquareCount = Math.floor(canvas.height / 2);

    // console.log(verticalSquareCount, horizontalSquareCount);
    let cellsArray = new Array(verticalSquareCount)
      .fill(0)
      .map((v) => new Array(horizontalSquareCount).fill(0));

    function fillGrid() {
      for (let x = 0; x < horizontalSquareCount; x++) {
        cellsArray.push([]);
        for (let y = 0; y < verticalSquareCount; y++) {
          let rand = Math.random();
          cellsArray[x].push(rand < 0.5 ? 0 : 1);
        }
        if (x >= 150) break;
      }
    }

    const clearGrid = () => {
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    };

    function prefillGrid() {
      cellsArray = new Array(verticalSquareCount)
        .fill(0)
        .map((_) => new Array(horizontalSquareCount).fill(0));
    }

    function cellFate() {
      let nextGen = Array.from(cellsArray);

      for (let i = 0; i < cellsArray.length; i++) {
        for (let j = 0; j < cellsArray[i].length; j++) {
          let liveNeighbours = 0;
          const neighbours = [
            [i - 1, j - 1],
            [i - 1, j],
            [i - 1, j + 1],
            [i, j - 1],
            [i, j + 1],
            [i + 1, j + 1],
            [i + 1, j],
            [i + 1, j - 1],
          ];
          // console.log(neighbours[0]);

          neighbours.forEach((neighbour) => {
            let [i_, j_] = neighbour;
            if (
              i_ >= 0 &&
              i_ < cellsArray.length &&
              j_ >= 0 &&
              j_ < cellsArray[0].length
            ) {
              // console.log(neighbour);
              // console.log(cellsArray[i_]);
              if (cellsArray[i_][j_] === 1) liveNeighbours++;
              // console.log(liveNeighbours);
            }
          });

          // overpopulation or underpopulation
          if (cellsArray[i][j] === 1) {
            if (liveNeighbours > 3 || liveNeighbours < 2) nextGen[i][j] = 0;
          } else {
            if (liveNeighbours === 3) nextGen[i][j] = 1;
          }
        }
      }
      return nextGen;
    }

    function drawCells() {
      // requestAnimationFrame(drawCells);
      cellsArray = cellFate();

      ctx.fillStyle = "#dedede";
      cellsArray.forEach((row, j) => {
        row.forEach((cell, i) => {
          if (cell === 1) {
            ctx.fillRect(i, j, 3, 3);
          } else {
            ctx.clearRect(i, j, 3, 3);
          }
        });
      });

      // clearGrid();
    }

    //
    fillGrid();
    // prefillGrid();
    setInterval(drawCells, window.innerWidth >= 1500 ? 500 : 100);
  }, []);

  return <canvas id="automata"></canvas>;
};

export default Automata;
