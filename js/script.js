
let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");

menu.insertBefore(menuItem[1],menuItem[3]);     // Замена 2 пункта с 3

menuItemLi.classList.add("menu-item");            // Добавление 5 пункта
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi);


document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Замена фона (body)


title.textContent = 'Мы продаем только подленную технику Apple'; // Поменял текст


adv.remove(); // Удаление рекламы


let yourOpinion = prompt("Какое твое отношение к технике Apple") ;      // Вопрос и вставка текста в контент
promptforApple.textContent = yourOpinion;