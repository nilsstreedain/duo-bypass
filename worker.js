async function duoBypass(request) {
  // Get API URL from request
  const { url } = await request.json();

  // POST new device to DUO
  const duo = await fetch(url, {
	method: 'POST',
	headers: {'User-Agent': 'okhttp/2.7.5',},
	body: {"jailbroken":"false","architecture":"arm64","region":"US","app_id":"com.duosecurity.duomobile","full_disk_encryption":"true","passcode_status":"true","platform":"Android","app_version":"3.49.0","app_build_number":"323001","version":"11","manufacturer":"unknown","language":"en","model":"Pixel 3a","security_patch_level":"2021-02-01"}
  });

  // Parse customer_name and hotp_secret from DUO response
  const { response: { customer_name, hotp_secret} } = await duo.json();

  // Respond to user with cust and hotp
  return new Response(`{"cust":"${customer_name}","hotp":"${hotp_secret}"}`);
}

addEventListener('fetch', event => {
  const { request } = event;
  if (request.method === 'POST')
	event.respondWith(duoBypass(request));
  else
	event.respondWith("Invalid request");
});
