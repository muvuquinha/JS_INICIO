
// Chegou Amanda, saiu Xavier
const festa = [];
festa[0] = "Joaquim";
festa[1] = "José";
festa[2] = "Silva";
festa[3] = "Xavier";

console.log(`Antes: ${festa.join()}`);
festa.splice(3, 3, "Amanda");
console.log(`Depois: ${festa.join()}`);


// Chegou Zuleica, saiu Amanda

const festa1 = [];
festa1[0] = "Joaquim";
festa1[1] = "José";
festa1[2] = "Silva";
festa1[3] = "Amanda";

console.log(`Antes: ${festa.join()}`);
festa.splice(3, 3, "Zuleica");
console.log(`Depois: ${festa.join()}`);


// Saiu a Silva e chegou a Silvana
const festa2 = ['Joaquim', 'José', 'Silva', 'Zuleica'];

// Chegou Amanda, saiu Xavier
console.log(`Antes: ${festa2}`);
festa2[2] = 'Silvana';
console.log(`Depois: ${festa2}`);

console.log(`Ficaram somente ${festa2.length} na festa ${festa2} `)
