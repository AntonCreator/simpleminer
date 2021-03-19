function startGame(width, height, bombs) {
    let field  = document.querySelector(".field");
    const cells_count = width * height;
    const table = document.querySelector(".table")
    const newGame = document.querySelector(".newGame")

    field.innerHTML = "<button ></button>".repeat(cells_count)
    field.style.gridTemplateColumns = `repeat(${width} , 40px)`
    field.style.left = (610 - (width-8)*20) + "px"

    const cells = [...field.children];
    const bombsArr = [...Array(cells_count).keys()]
    .sort(() => Math.random() - 0.5)
    .slice(0, bombs);
    
    newGame.addEventListener("click", () => location = location)
     
    field.addEventListener("click", (event) => {

        if (event.target.tagName !== "BUTTON") {
            return;
            }
        const index = cells.indexOf(event.target);
        const column = index % width;
        const row = Math.floor(index/width)
        
        function checkValid(row,column){
            return row >= 0 && row < height && column >= 0 && column < width;        
        }
        const isBomb = (row,column) => {
            if (!checkValid(row,column)) return false;
            const index = row*width + column;
            return bombsArr.includes(index);
        }
        const checkNum = (row,column) => {
            let count = 0
            for (let x = -1; x <= 1; x++){
              for (let y = -1;y <= 1; y++){
                if(isBomb(row + y, column + x)){
                    count++
                } 
              }  
            } return count
        }
        if (isBomb(row,column)){
            event.target.innerHTML = "💣";
            event.target.style.background = "red" 
            table.style.color = "red"

        }  else  {
            event.target.innerHTML = checkNum(row,column)
        }
        event.target.disabled = true;      
    })
  }
    let set = document.querySelector(".setBtn")
    set.addEventListener("click", refresh)

    function refresh () {

    let field  = document.querySelector(".field");
    let width = +document.querySelector(".columnInp").value
    let height = +document.querySelector(".rowInp").value
    let bombs = +document.querySelector(".bombInp").value
    

    startGame(width, height, bombs)
    
   }
    
    
    
    
