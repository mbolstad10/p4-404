

var p = $("p");

p.blinker();

p.bind({
    // pause blinking on mouseenter
    mouseenter: function(){
        $(this).data("blinker").pause();
    },
    // resume blinking on mouseleave
    mouseleave: function(){
        $(this).data("blinker").blinkagain();
    }
});