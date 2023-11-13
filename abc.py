num=7
flag =1
if num>1:
 for i in range (2,int(num/2)+1):
    if(num%i==0):
        print("Not prime")
        flag=0
        break;    

if flag==1:
 print("Prime Number")