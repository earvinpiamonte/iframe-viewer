$(function(){

	// on click on submit
	$('#submit').on('click', function(){
		// set body
		var $body = $('body');

		// set website url
		var $website_url = $('[name="website_url"]');

		// set location
		var $location = $('[name="location"]:checked');

		// if website url is not set then do nothing
		if ($website_url.val().trim() == '') {
			$website_url.focus();
			return false;
		}

		// log location
		console.log({ location: $location.val() });

		// replace body content with contents from entered website URL
		$body.html('<iframe class="iframe" src="'+$website_url.val()+'"></iframe>');

	});
});
