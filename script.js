

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
        
        checkNum = (index) => {
            let numArr = [];
            if (bombsArr.indexOf(index-1) > 0){
                numArr.push(1)
            }
            if (bombsArr.indexOf(index-7) > 0){
                numArr.push(1)
            }
            if (bombsArr.indexOf(index-8) > 0){
                numArr.push(1)
            }
            if (bombsArr.indexOf(index-9) > 0){
                numArr.push(1)
            }
            if (bombsArr.indexOf(index+1) > 0){
                numArr.push(1)
            }
            if (bombsArr.indexOf(index+7) > 0){
                numArr.push(1)
            }
            if (bombsArr.indexOf(index+8) > 0){
                numArr.push(1)
            }
            if (bombsArr.indexOf(index+9) > 0){
                numArr.push(1)
            }
        
            return numArr.length
        }

        if (bombsArr.indexOf(index) >= 0){
            event.target.innerHTML = "💣";
            event.target.style.background = "red" 
            table.style.color = "red"
            
        
        }  else  {
            event.target.innerHTML = checkNum(index)
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
    
    
    
    
