function validate(){
    var valid = false;

    if(document.getElementById('txt1').value==""){
        alert("Adınız Yazınız");
        return false;
    }

    if(document.getElementById('txt2').value==""){
        alert("Soyadınız Yazınız")
        return false;
    }
    
    var valid1 = false;
    var x = document.myform.cinsiyet;

    for(var i=0;i<x.length;i++){
        if(x[i].checked){
            valid1 = true;
            break;
        }
    }
    if(valid1 == false){
        alert("Cinsiyetiniz Seçin");
        return false;
    }
    if(document.getElementById('select').value=="0"){
        alert("Şehriniz Seçin");
        return false;
    }
    if(document.getElementById('numara').value==""){
        alert("Numaranız Girin");
        return false;
    }
    if(document.getElementById('e-posta').value==""){
        alert("E-postanız Girin");
        return false;
    }
    if(document.getElementById('datalist').value==""){
        alert("Hangi Üniversite Okuyorsunuz");
        return false;
    }
    var valid2 = false;
    var a = document.myform.flexCheckDefault;

    for(var i=0;i<a.length;i++){
        if(a[i].checked){
            valid2 = true;
            break;
        }
    }
    if(valid2 == false){
        alert("En az Bir Dil Seçiniz");
        return false;
    }

    if(document.getElementById('txt3').value==""){
        alert("Lütfen En az Bir Dil Özetliyiniz");
        return false;
    }

    if(document.getElementById('txt4').value==""){
        alert("Lütfen Mesajiniz Yazın");
        return false;
    }
    
}
    