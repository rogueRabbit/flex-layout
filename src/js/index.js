import '../css/index.css';

// 设置flex-direction
$('input[name="flexDirection"]').click(function(e){
    var direction = e.target.value;
    $('.effect-ul').css('flex-direction', direction);
});

// 设置flex-wrap
$('input[name="flexWrap"]').click(function(e){
    var wrap = e.target.value;
    $('.effect-ul').css('flex-wrap', wrap);
});

// 设置justify-content
$('input[name="justifyContent"]').click(function(e){
    var content = e.target.value;
    $('.effect-ul').css('justify-content', content);
});

// 设置align-items
$('input[name="alignItems"]').click(function(e){
    var items = e.target.value;
    $('.effect-ul').css('align-items', items);
});

// 设置align-content
$('input[name="alignContent"]').click(function(e){
    var items = e.target.value;
    $('.effect-ul').css('align-content', items);
    $('.effect-ul').css('background-color', 'antiquewhite');
    $('.effect-ul').css('height', '200px');
});


// 设置order属性，证明li的index是从0开始的
$('#orderBtn').click(function(){
    $('.effect-ul li:eq(1)').css('order', 15);
});

// 设置flex-grow属性
$('#growBtn').click(function(){
    $('.effect-ul li:eq(13)').css('flex-grow', '4');
    $('.effect-ul').css('flex-wrap', 'wrap');
    $('input[name="flexWrap"]:eq(1)').attr('checked', true);
});

// 设置flex-shrink
$('#shrinkBtn').click(function(){
    $('.effect-ul li:eq(11)').css('flex-shrink', '0');
});

// 设置selfBtn
$('#selfBtn').click(function(){
   $('.effect-ul li:eq(4)').css('align-self', 'flex-end');
   $('.effect-ul').css('flex-direction', 'column');
   $('input[name="flexDirection"]:eq(2)').attr('checked', true);
});
