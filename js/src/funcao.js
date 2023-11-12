let alfab = [... "ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

export function converteParaCesar(value){

    let element = [...value]; 


    for(let i = 0; i < element.length ; i++){
        if(element[i]>="A" && element[i] <="Z"){
            for(let c = 0  ; c <  alfab.length ; c++){
                if(element[i] === alfab[c]){

                    element[i] = alfab[(c + 1) % alfab.length];
                    break; 
                }
            }
        }
    }
    return  element.join("")
}

export function converteParaTexto(value){

    let element = [...value]; 


    for(let i = 0; i < element.length ; i++){
        if(element[i]>="A" && element[i] <="Z"){
            for(let c = 0  ; c <  alfab.length ; c++){
                if(element[i] === alfab[c]){

                    element[i] = alfab[(c - 1+ alfab.length) % alfab.length];
                    break; 
                }
            }
        }
    }
    return  element.join("")
}