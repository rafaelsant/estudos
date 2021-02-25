g = float(input())
D = float("{0:.2f}".format(g))
cem = 0
cinquenta= 0
vinte= 0
dez= 0
cinco= 0
dois= 0
umR= 0
cinquentaC= 0
vinteCincoC= 0
dezC= 0
cincoC= 0
umC= 0
if(D >= 0) and (D <= 1000000.00):
    while(D > 0.00 ):
    	while (D >= 100.00):
    		cem +=1
    		D-=100.00;
    	while (D >= 50.00):
    		cinquenta +=1
    		D-=50.00;
    	while (D >= 20.00):
    		vinte +=1
    		D-=20.00;
    	while (D >= 10.00):
    		dez +=1
    		D-=10.00;
    	while (D >= 5.00):
    		cinco+=1
    		D-=5.00;
    	while (D >= 2.00):
    		dois +=1
    		D-=2.00;
    	while (D >= 1.00):
    		D-=1.00;
    		umR +=1
    	while (D >= 0.50):
    		D-=0.50;
    		cinquentaC +=1
    	while (D >= 0.25):
    		D-=0.25;
    		vinteCincoC +=1
    	while (D >= 0.10):
    		D-=0.10;
    		dezC +=1
    	while (D >= 0.05):
    		D-=0.05
    		cincoC +=1
    	umC=D*100;
    	break
print(D)
print("NOTAS:")
print("%i nota(s) de R$ 100.00" %(cem))
print("%i nota(s) de R$ 50.00" %(cinquenta))
print("%i nota(s) de R$ 20.00" %(vinte))
print("%i nota(s) de R$ 10.00" %(dez))
print("%i nota(s) de R$ 5.00" %(cinco))
print("%i nota(s) de R$ 2.00" %(dois))
print("MOEDAS:")
print("%i moeda(s) de R$ 1.00" %(umR))
print("%i moeda(s) de R$ 0.50" %(cinquentaC))
print("%i moeda(s) de R$ 0.25" %(vinteCincoC))
print("%i moeda(s) de R$ 0.10" %(dezC))
print("%i moeda(s) de R$ 0.05" %(cincoC))
print("%i moeda(s) de R$ 0.01" %(umC))