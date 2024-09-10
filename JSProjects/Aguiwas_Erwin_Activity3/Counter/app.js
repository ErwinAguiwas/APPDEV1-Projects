//set initial value for count var
let count = 0;
// selct the value button
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
//
btns.forEach((btn) => {
    //console.log(btn)
    btn.addEventListener('click', (e) => {
        //console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList

        if(styles.contains('decrease')){
            count-=5;
        }
        else if(styles.contains('increase')){
            count+=5
        }
        else if(styles.contains('random')){
             count = Math.floor(Math.random () * 201)-101;
        }
        else {
            count = 0
        }


        //style 
        if ( count > 0){
            value.style.color = "green"
               
        }
        if(count < 0){
            value.style.color = "red"

        }
        if(count == 0){
            value.style.color = "black"

        }
        value.textContent = count

    })
})