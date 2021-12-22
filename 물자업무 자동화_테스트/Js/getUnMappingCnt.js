function getUnMappingCnt(args)
{
	var iframeIdx = args.split('|')[0];
	var tdClassName = args.split('|')[1];
	
	var result = '';
	
	var frameDoc = document.getElementsByTagName('iframe')[iframeIdx].contentWindow.document;	
	var tdElements = frameDoc.querySelectorAll(tdClassName);
	
	for (var i = 0; i < tdElements.length; i++)
	{
		var tdElem = tdElements[i];
		//var sibleElem = tdElem.nextElementSibling;
		result += tdElem.innerText + ';' + tdElem.getAttribute('rowspan') + '\n';
	}
	
	return result.trim('\n');
}

return getUnMappingCnt(arguments[0]);
