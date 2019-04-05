var rows = document.querySelectorAll("table tbody tr"),
    cell = document.querySelectorAll("td");
    
    function beginNewGame() {
        for(k = 0; k < cell.length; k += 1) {
            cell[k].innerText = "";
        }
        popup.classList.add("dontShow");
        gamer_1.classList.add("show");
        gamer_2.classList.remove("show");
        for (var i = 0; i < rows.length; i++) { 
            var cols = rows[i].querySelectorAll('td'); 
            for (var j = 0; j < cols.length; j++) { 
                cols[j].onclick = function() {
                    var img = document.createElement("img");
                    if(gamer_1.classList.contains("show") == true) {
                        img.setAttribute("src", "img/vote.png");
                        this.appendChild(img);
                    }
                    else if(gamer_2.classList.contains("show") == true) {
                        img.setAttribute("src", "img/circle.png");
                        this.appendChild(img);
                    }
                    gamer_1.classList.toggle("show");
                    gamer_2.classList.toggle("show");
                    if(col_1.innerHTML == col_2.innerHTML && col_1.innerHTML == col_3.innerHTML && col_1.innerHTML !== "" && col_1.innerHTML == "<img src=\"img/vote.png\">") {
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 1";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_1.innerHTML == col_2.innerHTML && col_1.innerHTML == col_3.innerHTML && col_1.innerHTML !== "" && col_1.innerHTML == "<img src=\"img/circle.png\">") {
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 2";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_4.innerHTML == col_5.innerHTML && col_4.innerHTML == col_6.innerHTML && col_4.innerHTML !== "" && col_4.innerHTML == "<img src=\"img/vote.png\">") {
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 1";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_4.innerHTML == col_5.innerHTML && col_4.innerHTML == col_6.innerHTML && col_4.innerHTML !== "" && col_4.innerHTML == "<img src=\"img/circle.png\">") {
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 2";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_7.innerHTML == col_8.innerHTML && col_7.innerHTML == col_9.innerHTML && col_7.innerHTML !== "" && col_7.innerHTML == "<img src=\"img/vote.png\">") {
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 1";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_7.innerHTML == col_8.innerHTML && col_7.innerHTML == col_9.innerHTML && col_7.innerHTML !== "" && col_7.innerHTML == "<img src=\"img/circle.png\">") {
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 2";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_1.innerHTML == col_4.innerHTML && col_1.innerHTML == col_7.innerHTML && col_1.innerHTML !== "" && col_1.innerHTML == "<img src=\"img/vote.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 1";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_1.innerHTML == col_4.innerHTML && col_1.innerHTML == col_7.innerHTML && col_1.innerHTML !== "" && col_1.innerHTML == "<img src=\"img/circle.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 2";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_2.innerHTML == col_5.innerHTML && col_2.innerHTML == col_8.innerHTML && col_2.innerHTML !== "" && col_2.innerHTML == "<img src=\"img/vote.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 1";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_2.innerHTML == col_5.innerHTML && col_2.innerHTML == col_8.innerHTML && col_2.innerHTML !== "" && col_2.innerHTML == "<img src=\"img/circle.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 2";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_3.innerHTML == col_6.innerHTML && col_3.innerHTML == col_9.innerHTML && col_3.innerHTML !== "" && col_3.innerHTML == "<img src=\"img/vote.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 1";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_3.innerHTML == col_6.innerHTML && col_3.innerHTML == col_9.innerHTML && col_3.innerHTML !== "" && col_3.innerHTML == "<img src=\"img/circle.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 2";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                        else if(col_1.innerHTML == col_5.innerHTML && col_1.innerHTML == col_9.innerHTML && col_1.innerHTML !== "" && col_1.innerHTML == "<img src=\"img/vote.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 1";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_1.innerHTML == col_5.innerHTML && col_1.innerHTML == col_9.innerHTML && col_1.innerHTML !== "" && col_1.innerHTML == "<img src=\"img/circle.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Выиграл Игрок 2";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_3.innerHTML == col_5.innerHTML && col_3.innerHTML == col_7.innerHTML && col_3.innerHTML !== "" && col_3.innerHTML == "<img src=\"img/vote.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                        popup_text.innerText = "Выиграл Игрок 1";
                        popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_3.innerHTML == col_5.innerHTML && col_3.innerHTML == col_7.innerHTML && col_3.innerHTML !== "" && col_3.innerHTML == "<img src=\"img/circle.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                        popup_text.innerText = "Выиграл Игрок 2";
                        popup.classList.remove("dontShow");
                        }, 500);
                    }
                    else if(col_1.innerHTML !== "" && col_2.innerHTML !== "" && col_3.innerHTML !== "" && col_4.innerHTML !== "" && col_5.innerHTML !== "" && col_6.innerHTML !== "" && col_7.innerHTML !== "" && col_8.innerHTML !== "" && col_9.innerHTML !== ""){
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        setTimeout(function() {
                            popup_text.innerText = "Ничья";
                            popup.classList.remove("dontShow");
                        }, 500);
                    }
                }
            }
        }
    }
    
    begin.addEventListener("click", beginNewGame);
    newGame.addEventListener("click", beginNewGame);