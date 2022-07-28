const numerosAleatorios = [34, 87, 139, 7, 234, 12, 0, 76];
const nomesAleatorios = ["Zan", "Adriana", "Maria", "Victor", "Lucas"];
const datasAleatorias = ["julho", 1997, false, "maio", "abril", 27, true, 2020];
console.log(`Quantidade de caracteres do primeiro array: ${numerosAleatorios.length}
Primeiro item: ${numerosAleatorios[0]}
O primeiro array tem o número 139? ${numerosAleatorios.includes(139)}
Quantidade de caracteres do segundo array: ${nomesAleatorios.length}
Segundo item: ${numerosAleatorios[1]}
Quantidade de caracteres do terceiro array: ${datasAleatorias.length}
Terceiro item: ${numerosAleatorios[2]}
O terceiro array tem o nome Adriana? ${numerosAleatorios.includes("Adriana")}`);
