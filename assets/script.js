<<<<<<< HEAD
$(function(){

    $(".clickHere").click(function(){
        let location = $(".location").val(); 
=======
$(document).ready(function(){

    $("#getWeather").click(function(){
        const location = $(".location").val(); 
>>>>>>> 4b41d6ad8801f0305e6f80430a1b59637b7f19b3
        
        if(location != ''){
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + location + "&units=metric" + "&APPID=ef7c53304d696d0f76cc01d25b00fd8d",
                type: "GET",
                dataType: "json", //tested. no need for 'jsonp'
                success: function(data){
<<<<<<< HEAD
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
=======
                    const weatherApp = show(data);
                    $(".temperature").html(weatherApp);
                }
            })
        }else{
            $(".err").html('Opps, please enter a valid location')
        }
        
    });
});

//this function will display what is in the success callback function. So in this case, all the data. 
function show(data){  
    return "<p class='temp'>" + data.main.temp +" C°</p>";
}
>>>>>>> 4b41d6ad8801f0305e6f80430a1b59637b7f19b3
