(function (w) {
	var tracking; try {
		tracking = (new RegExp('[?&]as-tracking=([^&]*)').exec(location.search))[1];
	} catch(e) {}

	var img = function(url) {
		document.createElement('img').src = '//rtb.com.ru/' + url;
	};

	w.ADSPEND.retargeting = function(segment, ymlid) {
		if (ymlid === undefined) {
			var segments = [],
				rawSegments = document.cookie.match('(?:^|; )as-segments=([^;]*)');

			if (rawSegments !== null) segments = JSON.parse(rawSegments[1]);
			if (segments.indexOf(segment) !== -1) return;

			segments.push(segment);
			document.cookie = 'as-segments=' + JSON.stringify(segments) + '; path=/; max-age=600';
		}

		var utmSource = document.location.search.match('[?&]utm_source=([^&]*)');

		img(
			'remarketing-sync' +
			'?segment=' + encodeURIComponent(segment) +
			'&domain=' + encodeURIComponent(document.location.host) +
			'&page=' + encodeURIComponent(document.location.pathname) +
			(document.referrer !== '' ? '&referrer=' + encodeURIComponent(document.referrer) : '') +
			(utmSource !== null ? '&utmsource=' + encodeURIComponent(utmsource[1]) : '') +
			(ymlid !== undefined && ymlid !== '<offerId>' ? '&ymlid=' + encodeURIComponent(ymlid) : '')
		);
	};

	w.ADSPEND.conversion = function() {
		if (tracking === undefined) return;

		img(
			'event' + 
			'?type=conversion' +
			'&tracking=' + tracking
		);
	};
})(window);