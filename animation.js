// intro page functions & animations    >>>

$('#introbutton').click(function(){

    $('#intro').animate({left: '-100vw'}, 1000);
    $('#intro').animate({opacity: '0'}, 1000);
    $('#intro').css("opacity","0");
});

// dashboard page functions & animations    >>>

// hover (mouse-enter & mouse-leave) >
// Note: a toggle function would have simplified this structure but,
// because of lack of time this was the fastest way to visualize the POC

// List item 1
$('#dashboard-list-item-1').mouseenter(function(){
    $('#dashboard-list-item-1 .list-icon').animate({height: '100px'}, 1000);
});
$('#dashboard-list-item-1').mouseleave(function(){
    $('#dashboard-list-item-1 .list-icon').animate({height: '30px'}, 1000);
});

// List item 2
$('#dashboard-list-item-2').mouseenter(function(){
    $('#dashboard-list-item-2 .list-icon').animate({height: '100px'}, 1000);
});
$('#dashboard-list-item-2').mouseleave(function(){
    $('#dashboard-list-item-2 .list-icon').animate({height: '30px'}, 1000);
});

// List item 3
$('#dashboard-list-item-3').mouseenter(function(){
    $('#dashboard-list-item-3 .list-icon').animate({height: '100px'}, 1000);
});
$('#dashboard-list-item-3').mouseleave(function(){
    $('#dashboard-list-item-3 .list-icon').animate({height: '30px'}, 1000);
});

// List item 4
$('#dashboard-list-item-4').mouseenter(function(){
    $('#dashboard-list-item-4 .list-icon').animate({height: '100px'}, 1000);
});
$('#dashboard-list-item-4').mouseleave(function(){
    $('#dashboard-list-item-4 .list-icon').animate({height: '30px'}, 1000);
});

// List item 5
$('#dashboard-list-item-5').mouseenter(function(){
    $('#dashboard-list-item-5 .list-icon').animate({height: '100px'}, 1000);
});
$('#dashboard-list-item-5').mouseleave(function(){
    $('#dashboard-list-item-5 .list-icon').animate({height: '30px'}, 1000);
});

// List item 6
$('#dashboard-list-item-6').mouseenter(function(){
    $('#dashboard-list-item-6 .list-icon').animate({height: '100px'}, 1000);
});
$('#dashboard-list-item-6').mouseleave(function(){
    $('#dashboard-list-item-6 .list-icon').animate({height: '30px'}, 1000);
});

// Proceeding to next page

$('#dashboard-list-item-2').click(function(){

    $('#dashboard').animate({left: '-100vw'}, 1000);
    $('#dashboard').animate({opacity: '0'}, 1000);
    $('#dashboard').css("opacity","0");
});

// innovation page functions & animations    >>>

// go back to dashboard
$('#innovation-logo').click(function(){
    $('#dashboard').animate({left: '0'}, 1000);
    $('#dashboard').animate({opacity: '1'}, 500);
});