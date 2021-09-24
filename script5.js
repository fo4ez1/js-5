let a = prompt("Введите число");
for (i = 2; i <= a; i++){
    if(a>i && a%i==0){
        a/=i;
        document.write(i+" ");
    } 
    i++; 
if (a==i){
    document.write(i+" ");
}
}