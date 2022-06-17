var ship = Math.random()*7;
ship = parseInt(ship);
var isDead = false;


do{
    var guess = prompt("Ok, selecciona una celda de 1 a 10:");
    
   if(guess == ship || guess == ship+1 || guess == ship+2)
   {
            alert("You silly motherfuker...");
            isDead = true;
    }

}while(!isDead)
echo();