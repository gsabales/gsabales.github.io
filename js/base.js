	var myFullpage = new fullpage('#fullpage', {
		licenseKey: ' OPEN-SOURCE-GPLV3-LICENSE',
		sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu:'menu',
		lazyLoad: true,
		scrollOverflow: true
	});


	function sendEmail(){
		this.Email.send({
			To: "glenn.sabales@novare.com.hk",
			From: this.document.getElementById("email").value,
			Subject: this.document.getElementById("subject").value,
			Body: this.document.getElementById("message").value,
			SecureToken: "8b03d16c-57cd-4925-9102-7f5367cc418c"
		}).then(message => alert(message));
	}

	let random;
	fetch("https://type.fit/api/quotes")
			.then(function(response) {
				return response.json();
			})
			.then(
				function(data) {
					let randomQuote = () => {
						random = Math.round(Math.random() * 1643);
						this.document.getElementById('quote').innerHTML = '\"' + data[random].text + '\"';
						if(data[random].author !== null)
							this.document.getElementById('author').innerHTML = '- ' + data[random].author;
						else
							this.document.getElementById('author').innerHTML = '- Anonymous';
					};
					randomQuote();
					setInterval(()=> {randomQuote()}, 900000);
				}
			);


	$(".box-about-me").tilt({
		maxTilt: 3,
		scale: 1.1
	});

	$(".box-skills").tilt({
		maxTilt: 3,
	});
