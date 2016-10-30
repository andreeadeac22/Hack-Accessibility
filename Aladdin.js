function getPortofolio() {
	var account;
	var finalUrl = "https://www.blackrock.com/tools/hackathon/portfolio-analysis";
	
	var request = $.ajax({ 
		type: "GET",
		url: finalUrl,
		data: {"positions": "DTECX~3.52|ISJSX~0.03|4042~0.15|CTMX~0.36|LGLCX~0.45|ANBEX~0.06|MRGAX~0.64|PRRLX~0.18|SCCVX~0.66|HTECX~0.49|GOPIX~0.16|DOMAX~0.35|TISBX~0.25|IIPVX~0.88|CFGAX~0.73|SAR~0.39|MMIAX~0.76|SSTK~0.92|EAPEX~0.32|NBHIX~0.98|HWCAX~0.11|GQRE~0.49|IDVGX~0.78|ALSAX~0.97|VITRX~0.83|NFMIX~0.11|HRAUX~0.52|NCMAX~0.55|IAMOX~0.8|GSPH~0.85|PQIZX~0.91|IAUYX~0.97|CGRWX~0.68|ECAC~0.58|LMIYX~0.11|ACLLX~0.31|PFINX~0.52|SPMCX~0.85|MFNDX~0.72|SHOCX~0.91|ABNZX~0.33|ERO~0.15|JAAPX~0.55|JLKWX~0.77|MPSFX~0.11|WDYAX~0.27|PSFYX~0.65|FRGEX~0.68|ACLMX~0.52|HIIDY~0.28|CMT~0.33|GSTRX~0.84|MPLSX~0.34|TWODY~0.08|SSCBX~0.89|RLCAX~0.04|MLTKX~0.79|HRATX~0.9|NELYX~0.5|JCDXY~0.73|OREAX~0.25|EMICX~0.92|MSYAX~0.17|PIKIX~0.94|BBW~0.87|PIVRX~0.01|REITX~0.9|PHO~0.26|GRRGX~0.71|JEMAX~0.17|IREBX~0.64|MBBIX~0.52|ALESX~0.01|PSXP~0.29|ECCPX~0.14|JOBYX~0.02|CVIAX~0.68|IVTAX~0.74|REBTX~0.03|JENSX~0.18|KCVIX~0.59|AXDX~0.45|BFIBX~0.74|PLMAX~0.56|RICHX~0.85|VBTX~0.9|BSMIX~0.73|EIMGX~0.14|RAEBX~0.08|VOHIX~0.08|CGEIX~0.07|HFLCX~0.51|NSSC~0.67|NIEAX~0.45|USCRX~0.32|MMJZX~0.53|TFENX~0.13|PLT~0.1|LSMBX~0.04|AUNAX~0.38|MHORX~0.91|CFJAX~0.12|ABETX~0.94|GMCQX~0.75|IGBBX~0.51|ONGFX~0.34|BGY~0.64|BOPBX~0.29|BMBQX~0.27|IVTYX~0.12|KTRIX~0.26|GHYG~0.68|MDHIX~0.03|OIGYX~0.67|ANET~0.64|OSMYX~0.12|IOT~0.68|VEXPX~0.1|DCOIX~0.23|LAPCX~0.11|MOM~0.74|GDPM~0.61|HDRW~0.3|JCVHX~0.58|CNRMX~0.32|VIGCX~0.99|MRGBX~0.61|PRNMX~0.3|SPRT~0.07|ML5YR~0.6|WASBX~0.77|GIDCX~0.35|VISN~0.52|ASQCX~0.49|PYMAX~0.09|PBINX~0.6|HLEMX~0.58|SCBLX~0.21|HPEAX~0.49|NMOAX~0.24|PUTCX~0|TVRVX~0.14|LFESX~0.53|BN~0.65|FIGCX~0.63|MXPPX~0.91|IRCLX~0.87|VSZAX~0.97|SYRX~0.19|ACXCX~0.32|TIILX~0.47|MTCHX~0.36|RIPWX~0.06|XINA~0.33|PLAY~0.94|MFRBX~0.2|FWHBX~0.49|PPLIX~0.51|TKYMY~0.2|RYDHX~0.89|NMFAX~0.69|IZIYX~0.05|PFC~0.88|MIIFX~0.63|MYREX~0.87|PVQDX~0.67|PLDSX~0.78|GMSEX~0.27|PSYGX~0.25|ADX~0.3|ICMUX~0.56|IKNX~0.52|JTSSX~0.06|SMP~0.71|ADRE~0.9|FDN~0.39|WUSDX~0.04|RSPTX~0.24|RRFCX~0.48|TCPIX~0.93|NTKLX~0.1|LDLTX~0.27|HKUS~0.58|IUENX~0.4|IWB~0.47|CG_WGBI~0.58|UXI~0.71|RPEBX~0.37|JFUAX~0.36|PWMDX~0.23|EIREX~0.9|OHYFX~0.87|FAC~0.16|WBA~0.75|HCMLY~0.86|FTMKX~0.9|MRVSY~0.92|RAMBX~0.87|RCCIX~0.37|NQM~0.28|"},
		async: false,
		dataType: 'json'});
		
	return JSON.parse(request.responseText);
}

var port = [];
port = getPortofolio().resultMap.PORTFOLIOS[0].portfolios[0];

function getDescriptions() {
	var holding = [];
	holding = port.holdings;
	
	//console.log(holding);
	for(i in holding)
		console.log(holding[i].description);
}

function getBest() {
	var holding = [];
	var cnt = 0;
	
	for(i in port.holdings) {
		if(port.holdings[i].performanceMap)
			holding[cnt++] = port.holdings[i];
	}
	
	
	holding.sort(function(obj1, obj2) {
		if(!obj1.performanceMap.grossReturnY1)
			obj1.performanceMap.grossReturnY1 = 0;
		if(!obj2.performanceMap.grossReturnY1)
			obj2.performanceMap.grossReturnY1 = 0;
		if(!obj1.performanceMap.grossReturnY5)
			obj1.performanceMap.grossReturnY5 = 0;
		if(!obj2.performanceMap.grossReturnY5)
			obj2.performanceMap.grossReturnY5 = 0;
		return obj2.performanceMap.grossReturnY1 - obj1.performanceMap.grossReturnY1;
	});
	
	holding = holding.slice(0, 100);
	holding.sort(function(obj1, obj2) {
		if(!obj1.performanceMap.grossReturnY5)
			obj1.performanceMap.grossReturnY5 = 0;
		if(!obj2.performanceMap.grossReturnY5)
			obj2.performanceMap.grossReturnY5 = 0;
		return obj2.performanceMap.grossReturnY5 - obj1.performanceMap.grossReturnY5;
	});
	
	var toReturn = [];
	var counter = 0;
	
	for(i in holding) {
		toReturn[counter++] = holding[i];
		if(counter == 3)
			return toReturn;
	}
}

/*var best = getBest();
for(i in best) {
	console.log(best[i].description);
	console.log(best[i].performanceMap.grossReturnY5);
}*/
 

