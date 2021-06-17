let count = 0;

//selecting html objects
const value = document.querySelector("#span");
const btns = document.querySelectorAll(".btn");

//logic
btns.forEach(function(button){
    button.addEventListener('click',function(event){
        const styles = event.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
            value.textContent = count;
        }
        else if(styles.contains('reset')){
            count = 0;
            value.textContent = count;
        }
        else{
            count++;
            value.textContent = count;
        }
    })
});