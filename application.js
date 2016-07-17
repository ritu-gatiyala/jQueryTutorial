/**
 * Created by ritu on 14/7/16.
 */

$(document).ready(function(){
 $('button').on('click',function(){
     var message=$('<p>Hey, Ritu here!!</p>');
     $('.intro').prepend(message);
     $('button').remove();
 })
});