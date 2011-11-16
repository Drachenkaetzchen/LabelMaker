LabelMaker
==========

LabelMaker is a quick hack to generate labels as they are used at [RaumZeitLabor][1].

Prerequisites
-------------

All you need is 
 
 * a httpd capable of executing PHP5  ([RaumZeitLabor][1] uses an apache2 httpd
   and the corresponding PHP5 module) 
 * an established internet connection
 * a correctly configured label printer on which you can print raw text  using
   `lpr`

Setup
-----

According to your printer you have to adjust the commandline contained in
`$exec` in `print.php`.  Most notably the printer name in the `lpr` command has
to match the printer name as displayed by `lpq`.

FAQ
---

**Q:** I can see the interface of LabelMaker, but after clicking the print
button nothing happens. I am pretty sure that I have modified `print.php`
correctly.

**A:** Check the security setting of your PHP installation. Most notably check
the `disable_functions` directive in the `php.ini` file.


[1]:	http://www.raumzeitlabor.de	"RaumZeitLabor"
