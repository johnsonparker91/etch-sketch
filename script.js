
const container = document.querySelector('.container');


function defRows(side) {
    
    for (i = 0; i < (side * side); i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = "row";
        for (j = 0; j < side; j++) {
            let div = document.createElement('div');
            row.appendChild(div).className = "grid-div";
        }
    }
}

defRows(16, 16);
