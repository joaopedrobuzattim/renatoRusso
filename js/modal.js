$(()=>{


setDynamicAttributes(function () {


    $('section.galeria img').click(function () {

        let a = $(this).attr('src');
        
        $('.modal-body').html(`<img style="width:100%;" src="${a}" />`);
        
    })
})

 function setDynamicAttributes(callback){

    let arr = $('section.galeria img');

    arr.attr({
    style: 'cursor: pointer;',
    ['data-toggle']:"modal",
    ['data-target']: "#exampleModal"
    })
    
    callback();

}

 

 




})