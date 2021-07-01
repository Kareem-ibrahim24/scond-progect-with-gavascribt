$(document).ready(function(){

    let home=$('.home')
    let card =$('.card')


    home.animate({
    width:"100%",
}, 4000,function(){

    home.animate({

    height:window.innerHeight
},4000 ,function(){

    $('h1').slideDown(2000,function(){

        card.eq(0).slideDown(2000,function(){


            card.eq(1).slideDown(2000,function(){

                card.eq(2).slideDown(2000)
            })
        })
    });
})
})





})