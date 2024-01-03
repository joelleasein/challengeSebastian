// Reto #19: 💣 Enfrenta el sabotaje
// ¡Alerta en la fábrica de juguetes de Santa! El Grinch 😈 se ha infiltrado en el almacén y ha saboteado algunos de los juguetes 💣.

// Los elfos necesitan ayuda para encontrar los juguetes saboteados y eliminarlos antes de que llegue la Navidad. Para ello tenemos el mapa 🗺️ del almacén, que es una matriz.

// Los * representan los juguetes saboteados y las celdas vacías con un espacio en blanco son los lugares seguros.

// Tu tarea es escribir una función que devuelva la misma matriz pero, en cada posición, nos indique el número de juguetes saboteados que hay en las celdas adyacentes.

// Si una celda contiene un juguete saboteado, debe permanecer igual. Si una celda no toca ningún juguete saboteado, debe contener un espacio en blanco .

// const store = [
//     ['*', ' ', ' ', ' '],
//     [' ', ' ', '*', ' '],
//     [' ', ' ', ' ', ' '],
//     ['*', ' ', ' ', ' ']
//   ]
  
//   console.log(revealSabotage(store))
//   /* Debería mostrar:
//   [
//       ['*', '2', '1', '1'],
//       ['1', '2', '*', '1'],
//       ['1', '2', '1', '1'],
//       ['*', '1', ' ', ' ']
//   ]
//   */

// Ten en cuenta que…

// Las celdas diagonales también se consideran adyacentes.
// El tablero siempre tendrá al menos una celda vacía y un juguete saboteado *.
// El tablero puede tener cualquier tamaño.
// Los números son cadenas de texto.

function createEmptyArray(sizes){
    return new Array( sizes[0] ).fill(0).map( () => new Array(store[1].length).fill(0) );
}

function revealSabotage(store) {

    console.log("Initial value\n",store);
    var sizesArray = [store.length, store[0].length];

    var outArray2 = createEmptyArray(sizesArray);
    
    for (let i=0;i<sizesArray[0];i++){
        for(let j=0;j<sizesArray[1];j++) {

            let arrayElem = store[i][j];
            let adjacentCount = 0;
            // console.log( `Values ${i},${j} : ${elem}` )

            if(arrayElem !== '*'){
                // console.log( `Value to check adjacents (${i},${j}) : ${arrayElem}` );
                for( let aux1 = -1; aux1 <=1; aux1++){
                    for( let aux2 = -1;aux2<=1;aux2++){
                        try{
                            if( aux1 !==0 || aux2 !==0 ){
                                let adjacentElem = store[i+aux1][j+aux2];

                                if(adjacentElem === '*'){
                                    // console.log(`\t Adjacent Value counted (${i+aux1},${j+aux2}): ${adjacentElem}`);
                                    adjacentCount++;
                                }
                                
                            }
                        }catch(error){}
                    }  
                }
                // console.log(`Total count of * on (${i},${j}): ${adjacentCount}`);
                outArray2[i][j] = adjacentCount == 0 ? ' ': String(adjacentCount)
            }else{
                outArray2[i][j] = '*'
            }
            

        }
    }

    console.log('Output:\n',outArray2);
    return []
}


function evalAdjacentElem( elem ){
    return elem ==="*" ? true : false
}


var store = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
  ]


revealSabotage(store)