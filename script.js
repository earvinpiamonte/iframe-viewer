$(function(){

	// on click on submit
	$('#submit').on('click', function(){
		// set body
		var $body = $('body');

		// set website url
		var $website_url = $('[name="website_url"]');

		// set location
		var $location = $('[name="location"]:checked');

		// if website url or location is not set then do nothing
		if ($website_url.val().trim() == '' || $location.val() == undefined) {
			return false;
		}

		var url_parts = $website_url.val().split('/');

		var url_protocol = url_parts[0];

		if (location.protocol == 'https:' && location.protocol != url_protocol) {
			alert('You are using '+location.protocol.slice(0, location.protocol.length - 1 )+', but you are trying to load a website having '+url_protocol.slice(0, url_protocol.length - 1)+' protocol.');
			return false;
		}

		// log location
		console.log({ location: $location.val() });

		// replace body content with contents from entered website URL
		$body.html('<iframe class="iframe" src="'+$website_url.val()+'"></iframe>');

	});
});
