<?php
$filename = "/tmp/test.txt";

file_put_contents($filename, $_REQUEST["text"]);

$exec = 'fold -sw 37 '.$filename.' | lpr -P "Brother-QL-500" -o cpi=16 -o lpi=6 -o media=Custom.62x40mm -o page-left=4 -o page-right=2';

exec($exec);