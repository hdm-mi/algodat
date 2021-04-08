function laRusse(linkeSpalte, rechteSpalte, summe = 0) { 
    if(summe == 0 && linkeSpalte % 2 != 0)
        summe += rechteSpalte
    
    console.log(linkeSpalte, rechteSpalte, summe)   
    
    linkeSpalte = Math.floor(linkeSpalte / 2)
    rechteSpalte *= 2
    if(linkeSpalte % 2 != 0)
        summe += rechteSpalte

    if(linkeSpalte > 0)
        laRusse(linkeSpalte, rechteSpalte, summe)
}

laRusse(99, 19)