const waterApp = {};
waterApp.calculations = function(){

        // total calculation for when user inputs values
        const weightInput = parseInt($('#bodyWeight').val());

        const weighttotal = (2/3) * weightInput ;
        // *(2/3) because you have to take in 67% of your body weight 
        const exceriseInput = parseInt($('#minutesOfExcerise').val());

        const excerisetotal =  73 * exceriseInput;
        const waterInTake = $('#waterIntake').val();


        // for every minute you workout out you have to drink 73 ml of water 
        const totalWaterNeeded = Math.round((weighttotal + excerisetotal) - waterInTake);
        if(!/^[0-9]/.test(weightInput && exceriseInput)){
                const errorHtml = `
                <div class="error">
                <p>Error: Input had special characters. Please try again. </p>
                <button><a href="./index.html">Restart</a></button>
                </div>`
                $('.modal').show();
                $('.modal').append(errorHtml);                
        } else{
                $('.results').empty(); 
                const resultsHtml = 
                `<div class="display">
                <p>The total amount you need to drink is: ${totalWaterNeeded} ml</p>
                <button><a href="./index.html">Restart</a></button>
                </div>`
                $('.results').append(resultsHtml);

        }      


}

waterApp.conditions = function(){
        const checked = $('input[type="radio"]').click(function(){
                if($('#yes').prop("checked") === true){
                        $('.waterConsumed').show();
                }
                else if($('#yes').prop("checked") === false){
                        $('.waterConsumed').hide();
                }
        })
        
}



waterApp.eventListeners = function () {

        waterApp.conditions();
                //Prevent Default if we are submitting a form
         //Adding an event listner for submit 

        $('form').on('submit', function(event){
                        event.preventDefault();
                        waterApp.calculations();
                        $('.results').show();
                        $('header').hide(); 
                
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
