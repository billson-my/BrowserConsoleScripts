
//	Run in browser console for URL: https://your-keycloak.com/admin/master/console/#/sfa/users

document.querySelectorAll('tr[data-ouia-component-type]').forEach(hideDisabled);
var count = 0;
function hideDisabled(item, index, arr){
	
	var tdUsername = item.querySelector('td[data-label="Username"]')
	var tdStatus = item.querySelector('td[data-label="Status"]')
	
	var strMsg = "";
	var isDisabled = false;
	
	if( tdUsername ) {
//		console.log(tdUsername.textContent);
		if ( tdUsername.textContent == "" ) return;
		strMsg = tdUsername.textContent;
	
		if( tdStatus && tdStatus.firstChild && tdStatus.firstChild.firstChild ) {
			var textContent = item.querySelector('td[data-label="Status"]').firstChild.firstChild.textContent;
	//		console.log(`hideDisabled`);
	//		console.log(tdUsername.textContent + item.querySelector('td[data-label="Status"]').firstChild.firstChild.textContent);
			
			strMsg += " | ";
			strMsg += textContent;
			
			isDisabled = textContent == "Disabled";
		}
	
		if ( isDisabled ) {
			count++;
			console.log(count + " | " + strMsg + " | " + isDisabled);
			item.style.display = "none";
		}
	}
}
