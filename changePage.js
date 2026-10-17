let DynamicPage = document.getElementById("dictPage").innerHTML;
const mainPage = DynamicPage;

async function changePage(PNum){
	if(PNum > 0){
		const verifPage = await fetch('pages/page' + PNum + '.html');
		
		if(verifPage.ok){
			const tempPage = await verifPage.text()
			document.getElementById("dictPage").innerHTML = "";
			document.getElementById("dictPage").insertAdjacentHTML("afterbegin", tempPage);
		}else{
			alert("Page failed to load or it doesn't exist.");
		}
	}else{
		document.getElementById("dictPage").innerHTML = mainPage;
	}
}
