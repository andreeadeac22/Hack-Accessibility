var apiKey = "09bb5bffbd85cba330358ded681c0b79";


function createCustomer(firstName, lastName, streetNumber, streetName, city, state, zip) {
	 $.ajax({
        url: "http://api.reimaginebanking.com/customers?key=09bb5bffbd85cba330358ded681c0b79",
        type: "POST",
        data: JSON.stringify({
		  "first_name": firstName,
		  "last_name": lastName,
		  "address": {
			"street_number": streetNumber,
			"street_name": streetName,
			"city": city,
			"state": state,
			"zip": zip
		  }
		}),
        contentType: "application/json",
        success: function (result) {
            switch (result) {
                case true:
                    processResponse(result);
                    break;
                default:
                    resultDiv.html(result);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
			alert(xhr.status);
			alert(thrownError);
        }
    });
}

function createAccount(userId, type, nickname, rewards, balance, accountNumber){
	var finalUrl = "http://api.reimaginebanking.com/customers/";
	finalUrl += userId;
	finalUrl += "/accounts?key=09bb5bffbd85cba330358ded681c0b79";
	 $.ajax({
        url: finalUrl,
        type: "POST",
        data: JSON.stringify({
		   "type": type,
           "nickname": nickname,
           "rewards": rewards,
           "balance": balance,
           "account_number": accountNumber
		  }
		),
        contentType: "application/json",
        success: function (result) {
            switch (result) {
                case true:
                    processResponse(result);
                    break;
                default:
                    resultDiv.html(result);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
			alert(xhr.status);
			alert(thrownError);
        }
    });
}

function getAccountBalance(accountId) {
	var account;
	var finalUrl = "http://api.reimaginebanking.com/accounts/";
	finalUrl += accountId;
	
	var request = $.ajax({ 
		type: "GET",
		url: finalUrl,
		data: "key=09bb5bffbd85cba330358ded681c0b79",
		async: false,
		dataType: 'application/json'});
		
	return JSON.parse(request.responseText).balance;
}

function pay(payerAccount, payeeAccount, amount) {
	var finalUrl = "http://api.reimaginebanking.com/accounts/";
	finalUrl += payerAccount;
	finalUrl += "/transfers?key=09bb5bffbd85cba330358ded681c0b79";
	 var request = $.ajax({
        url: finalUrl,
        type: "POST",
        data: JSON.stringify({
		 
			  "medium": "balance",
			  "payee_id": payeeAccount,
			  "amount": amount,
			  "transaction_date": "2016-10-29"
		  }
		),
        contentType: "application/json",
       
        error: function (xhr, ajaxOptions, thrownError) {
			alert(xhr.status);
			alert(thrownError);
        }
    });
	console.log(request)
}
