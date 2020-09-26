$(()=>{


// Set the atributes dynamically for each images that belongs to the gallery
// and write the content in the bootstrap modal window
// asynchronous behavior to avoid bad page loading

setDynamicAttributes(writeModalContent);


 function setDynamicAttributes(callback){

    let arr = $('section.galeria img');

    arr.attr({
    style: 'cursor: pointer;',
    ['data-toggle']:"modal",
    ['data-target']: "#exampleModal"
    })
    
    callback(null,arr);

}

function writeModalContent(err, arr){

    if(err) throw err;

    arr.click(function () {

        let a = $(this).attr('src');
        
        $('.modal-body').html(`<img style="width:100%;" src="${a}" />`);
        
    })

}

})