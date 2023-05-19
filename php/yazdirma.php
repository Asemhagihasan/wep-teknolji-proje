<?php

echo "Adınız - Soyadınız : ".$_POST["print1"]." ".$_POST["print2"]."<br>";
echo "Cinsiyetiniz : ".$_POST["cinsiyet"]."<br>";
echo "Şehiriniz : ".$_POST["selcet"]."<br>";
echo "Numaranız : ".$_POST["print3"]."<br>";
echo "E-postanız : ".$_POST["print4"]."<br>";
echo "Üniversiteniz : ".$_POST["print5"]."<br>";
$flexCheckDefault=$_POST['flexCheckDefault'];
$b=implode(' , ',$flexCheckDefault);

echo "Seçtiğiniz Dili : ".$b."<br>";
echo "Seçtiğiniz Dillerin Özeti : ".$_POST["print6"]."<br>";
echo "Mesajınız : ".$_POST["print7"];

?>