
let progress_button = document.querySelector(".progress_button");
let progress_count = document.querySelector(".progress_count");
let progress_bar_fill = document.querySelector(".progress_bar_fill");
let pop_up = document.querySelector(".progress_bar_pop");
let progress_bar_wrapper = document.querySelector(".progress_bar_wrapper");
progress_button.addEventListener("click", progress)

function progress(){
    let count_function = setInterval( run_count, 100);
    let count = 0;
    function run_count(){
        count += 1;
        if(count == 101){
        clearInterval(count_function);
        pop_up.style.display = "block";
        progress_bar_wrapper.style.display = "none";
        } else{
            progress_count.textContent = `${count} %`;
            progress_bar_fill.style.width = `${count}%`;
        }
        if( count == 90){
            progress_count.style.color = "white";
        }
        if( count == 99){
            progress_bar_fill.style.borderRadius = "0px";
        }
    }
}