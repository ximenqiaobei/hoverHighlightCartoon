var bindEventItems = function(){
    var selector = '.item'
    bindAll(selector, 'mouseenter', function(event){
        log('mouseover mouseenter')
        var item = event.target
        removeClassAll('hai')
        if (item.classList.contains('item')) {
            item.classList.add('hai')
        }
    })

    // bindAll(selector, 'mouseout', function(event){
    //     log('out')
    //     var item = event.target
    //     if (item.classList.contains('item')) {
    //         item.classList.remove('hai')
    //     }
    // })
}

bindEventItems()
