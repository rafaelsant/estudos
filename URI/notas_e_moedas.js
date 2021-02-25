
function preenche(){
	var cem = 0
	var cinquenta= 0
	var vinte= 0
	var dez= 0
	var cinco= 0
	var dois= 0
	var umR= 0
	var cinquentaC= 0
	var vinteCincoC= 0
	var dezC= 0
	var cincoC= 0
	var umC= 0
	var D = 576.76
	D = parseFloat(toFixed(D,2))
	if(D >= 0 & D <= 1000000.00){
		while(D != 0 ){
			while (D > 100.00) {
				cem ++
				D-=100.00
			}
			while (D > 50.00) {
				cinquenta ++
				D-=50.00
			}
			while (D > 20.00) {
				vinte ++
				D-=20.00
			}
			while (D > 10.00) {
				dez ++
				D-=10.00
			}
			while (D > 5.00) {
				cinco ++
				D-=5.00
			}
			while (D > 2.00) {
				dois ++
				D-=2.00
			}
			while (D > 1.00) {
				umR ++
				D-=1.00
			}
			while (D > 0.50) {
				cinquentaC ++
				D-=0.50
			}
			while (D > 0.25) {
				vinteCincoC ++
				D-=0.25
			}
			while (D > 0.10) {
				dezC ++
				D-=0.10
			}
			while (D > 0.05) {
				cincoC ++
				D-=0.05
			}
			while (D > 0.01) {
				umC ++
				D-=0.01
			}
			break;
		}
	}
console.log(`NOTAS:
${cem} nota(s) de R$ 100.00
${cinquenta} nota(s) de R$ 50.00
${vinte} nota(s) de R$ 20.00
${dez} nota(s) de R$ 10.00
${cinco} nota(s) de R$ 5.00
${dois} nota(s) de R$ 2.00
MOEDAS:
${umR} moeda(s) de R$ 1.00
${cinquentaC} moeda(s) de R$ 0.50
${vinteCincoC} moeda(s) de R$ 0.25
${dezC} moeda(s) de R$ 0.10
${cincoC} moeda(s) de R$ 0.05
${umC} moeda(s) de R$ 0.01`)
}