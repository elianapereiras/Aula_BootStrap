	<script>
	function teste(){
		
		let valor=0;
		let n100=0;
		let n50=0;
		let n20=0;
		let n10=0;
		let n5=0;
		let n2=0;
		let n1=0;
		let rest100=0;
		let rest50=0;
		let rest20=0;
		let rest10=0;
		let rest5=0;
		let rest2=0;
		let rest1=0;
    
		/* fazer a entrada dos valores */
		valor=prompt("Digite um valor");
		
		/*Verificar qtde de células */
		
		if(valor>=100){
			n100=Math.trunc(valor/100);
			rest50=Math.trunc(valor%100);
			
		}
		
		if(valor>=50 && rest50==0 && valor<100){
			n50=Math.trunc(valor/50);
			rest20=valor%50;
		}else {
			n50=Math.trunc(rest50/50);
			rest20=rest50%50;
			}
		
		/*console.log("Resto 20: "+rest20);*/
		if(valor>=20 && rest20==0 && valor<50){
			n20=Math.trunc(valor/20);
			rest10=valor%20;
		}else{
			n20=Math.trunc(rest20/20);
			rest10=rest20%20;
			}
		
		/*console.log("Resto 10: "+rest10);*/
		if(valor>=10 && rest10==0 && valor<20){
			n10=Math.trunc(valor/10);
			rest5=valor%10;
		}else{
			n10=Math.trunc(rest10/10);
			rest5=rest10%10;
			}
		
		
		/*console.log("Resto 5: "+rest5);*/
		if(valor>=5 && rest5==0 && valor<10){
			n5=Math.trunc(valor/5);
			rest2=valor%5;
		}else{
			n5=Math.trunc(rest5/5);
			rest2=rest5%5;
			}
			
		
		/*console.log("Resto 2: "+rest2);	*/	
		if(valor>=2 && rest2==0 && valor<5){
			n2=Math.trunc(valor/2);
			rest1=valor%2;
		}else{
			n2=Math.trunc(rest2/2);
			rest1=rest2%2;
			}
		
		/*console.log("rest1:"+rest1);*/
		if(valor==1 && rest1==0 && valor <2){
			n1=Math.trunc(valor);
			rest1=valor%1;
		}else{
			n1=Math.trunc(rest1/1);
			rest1=rest1%1;
			}
	
		/*Exibindo as saídas */
		
		
		  console.log("Valor digitado: " + valor);
		  console.log(n100 + " nota(s) de R$ 100,00");
		  console.log(n50 + " nota(s) de R$ 50,00");
		  console.log(n20 + " nota(s) de R$ 20,00");
		  console.log(n10 + " nota(s) de R$ 10,00");
		  console.log(n5 + " nota(s) de R$ 5,00");
		  console.log(n2 + " nota(s) de R$ 2,00");
		  console.log(n1 + " nota(s) de R$ 1,00");
			

	
}
	</script>