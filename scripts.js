const waterApp = {};


waterApp.calculations = function(){
        // total calculation for when user inputs values
        const weightInput = parseInt($('#bodyWeight').val());
        const weighttotal = weightInput * (2/3);
        // *(2/3) because you have to take in 67% of your body weight 
        const exceriseInput = parseInt($('#minutesOfExcerise').val());
        const excerisetotal = exceriseInput * 73;
        // for every minute you workout out you have to drink 73 ml of water 
        const totalWaterNeeded = Math.round(weighttotal + excerisetotal);
     
}


waterApp.showingInput = function() {
// when checked marked no the function option for water consumed will not be display
       if (document.getElementById("no").checked === false) {
               $(".drinkwater").hide();    
       } else{ $(".drinkwater").show();

       }

}
        

waterApp.consumed = function() {
// if user did drink water today then this function is used to determine how much total water they drank
    const bodyWeight = parseInt($('#bodyWeight').val()) * (2/3);
    const minsExcerise = parseInt($('#minutesOfExcerise').val()) * 73;
    const waterNeeded = Math.round(bodyWeight + minsExcerise);
    const intake = parseInt($('#waterIntake').val());
    const subtract = waterNeeded - intake;
    const displayconsumedHTML = `
            <div class="display">
            <p>The total amount you need to drink is: ${subtract} ml</p>
            <button><a href="./index.html">Restart</a></button>
            </div>
            `
 // to display the calcutions for when user checks yes for drinking water    
     $('.results').html (`${displayconsumedHTML}`);
}




waterApp.eventListeners = function () {
        $('form').on('submit', function(event){
        //Prevent Default if we are submitting a form
         //Adding an event listner for submit 
                event.preventDefault();
                $('.results').show();
                waterApp.showingInput();

                      
                //Get users choices
                const optionChecked = $('input[name=drinkwater]:checked').val();
        // if user checks yes to drinking water then they have to enter the amount they drank 
                if (document.getElementById("yes").checked == true) {
                        waterApp.consumed();
                }
        // another condition if condition 1 is false is they have not drank water and would then a total amount they need
                else if (document.getElementById("no").checked == true) {
                        waterApp.calculations();
                 } 
                else{
                // if they do not check mark any of the checkboxes then they would get an alert telling them checkmark
                        alert('please check one box!');
                }
                

                
})

} 
        

//Init Method
waterApp.init = function() {
        waterApp.eventListeners();
} 

//Document Ready
$(function(){
        waterApp.init();
})
