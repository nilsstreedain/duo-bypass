function b32encode(s) {
	var l = Math.ceil((s.length << 3) / 5) * 5;
	var c, b;
	var o = '';
	var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

	// Loop over each bit of the string & parse 8 bit chars into 5 bit segments
	for (var i = 0; i < l; i++) {
		if ((i & 7) == 0)                           // Get new char every 8 bits
			c = s.charCodeAt(i >> 3);        	    // "i & 7" = "i % 8"
		
		b = (b << 1) | (c >> 7 - (i & 7));			// Concatenate bits together
		
		if (i % 5 == 4)                             // Grab segment every 5 bits
			o += a[b & 0x1F];                       // "b & 0x1F" last 5 bits
	}
	return o;
}

async function duoBypass() {
	// Parse API parameters from DUO QR code image URL
	const apiParams = urlInput.value.split('=').pop().split('-');
	
	// Post new device to DUO API
	const response = await fetch(`https://${atob(apiParams[1])}/push/v2/activation/${apiParams[0]}?customer_protocol=1`, {
		method: 'POST',
		headers: {'User-Agent': 'okhttp/2.7.5',},
		body: {"jailbroken":"false","architecture":"arm64","region":"US","app_id":"com.duosecurity.duomobile","full_disk_encryption":"true","passcode_status":"true","platform":"Android","app_version":"3.49.0","app_build_number":"323001","version":"11","manufacturer":"unknown","language":"en","model":"Pixel 3a","security_patch_level":"2021-02-01"}
	});
	
	// Create QR code from DUO API response
	response.json().then(data => {
		const key = b32encode(data.response.hotp_secret);
		const url = `otpauth://hotp/${data.response.customer_name}?secret=${key}&issuer=DUO`;
		new QRCode(document.getElementById('qrcode'), url);
		document.getElementById('key').innerText = key;
	});
}

function setPage(o, n, e) {
	document.getElementById(o).style.display = 'none';
	document.getElementById(n).style.display = 'inline-block';
	document.getElementById('curr').removeAttribute('id');
	e.id = 'curr';
}
