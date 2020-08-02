$(function(){

    $(".clickHere").click(function(){
        let location = $(".location").val(); 
        
        if(location != ''){
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + location + "&units=metric" + "&APPID=ef7c53304d696d0f76cc01d25b00fd8d",
                type: "GET",
                dataType: "json", //tested. no need for 'jsonp'
                success: function(data){
                    let weatherApp = show(data);
                    $(".temperature").html(weatherApp);
                } // reference: https://stackoverflow.com/questions/5316697/jquery-return-data-after-ajax-call-success
            })
        }else{
            $(".err").html('Nice Try! Please enter a valid location')
        }
        
        //this function will display what is in the success callback function. So in this case, all the data. 
        
        function show(data){  
            return `<h3 class='temp'> The Weather in ${location} is Currently ${data.main.temp} C°</h3>`;
        }
    });
});
