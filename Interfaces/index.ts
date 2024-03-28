//==> interface

interface ractangleOptions{
    width : number;
    height : number;
}

function drowRactangle (options: ractangleOptions){
    let width = options.width;
    let height = options.height;
}

// ---> get suggestion call the drowreactangle function calling
drowRactangle({
    width : 30,
    height : 20,
})