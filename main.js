//my style
let mystyle =  `
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color:#100808;
    font-weight: 500;
    border-radius: 5px;
    background:#9FE46A;
    padding: 5px ;
`;
let mystyle2 = `
    font-family: arial;
    color:0A093B
    font-weight:
    background:red;
    padding: 5px ;
`;

//exponenciacion
 let c = 4 , n = 8;

console.group(`%coperador exponenciacion:`,mystyle);
console .log (`%csignificado: %c${c} = ${c}*${n}`,mystyle,mystyle2);
console .log (`%cabreviacion:%c${c}**=${n}`,mystyle,mystyle2); 
console.groupEnd

// resto
 let f = 9, j = 3

console.group ('%coperador resto:',mystyle);
console .log (`%csignificado:%c${f} = ${f} %${j}`,mystyle,mystyle2);
console .log (`%cabreviacion:%c${f}%=${j}`,mystyle,mystyle2); 
console.groupEnd

//divicion
 let e = 5,r = 8 ;

console.group(`%coperador divicion:`,mystyle);
console .log (`%csignificado: %c${e} = ${e}/${r}`,mystyle,mystyle2);
console .log (`%cabreviacion:%c${e}/=${r}`,mystyle,mystyle2); 
console.groupEnd  

//multiplicacion
 let q = 9, w = 1;

console.group(`%coperador multiplicacion:`,mystyle);
console .log (`%csignificado: %c${q} = ${q}*${w}`,mystyle,mystyle2);
console .log (`%cabreviacion:%c${q}*=${w}`,mystyle,mystyle2); 
console.groupEnd

//sustraccion
let a = 3 , b = 2;

console.group(`%coperador sustraccion:`,mystyle);
console .log (`%csignificado: %c${a} = ${a}-${b}`,mystyle,mystyle2);
console .log (`%cabreviacion:%c${a}-=${b}`,mystyle,mystyle2); 
console.groupEnd

//adicion
let x = 7,y = 4;

console.group(`%coperador adicion:`,mystyle);
console .log (`%csignificado: %c${x} = ${x}+${y}`,mystyle,mystyle2);
console .log (`%cabreviacion:%c${x}+=${y}`,mystyle,mystyle2); 
console.groupEnd

//asignacion con variables 

let nombre = 'cesar mauricio'
let apellido = 'navas calderon ';
 
 console.log(nombre);

 nombre = apellido;

console.log(nombre);







