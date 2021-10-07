$(document).ready(function(){
    var element = $('#countdown-gampang');
    var finish_d = new Date();
finish_d.setDate(finish_d.getDate() + 1);
    element.CountdownGampang({
        rampung: finish_d,
        theme: "flat-colors-very-wide"
    }, function(){
        // callback that is fired when the countdown reaches 0.
        alert("Wes Wayahe Bro :)");
    });
});