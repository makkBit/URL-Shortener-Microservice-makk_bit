# shorten-this-url

<strong>live site:</strong>
https://shorten-this-url.herokuapp.com/

<i>Made using nodejs, mongodb, expressjs, pugjs.</i>

For <a href="https://www.freecodecamp.com/challenges/url-shortener-microservice">Free Code Camp - API Challenges - url shortener microservice<a/>

<strong>User Stories:</strong>
1.  I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead
3. When I visit that shortened URL, it will redirect me to my original link.

<strong>Example Usage</strong>
<p>https://shorten-this-url.herokuapp.com/new/https://www.google.com <br>
https://shorten-this-url.herokuapp.com/new/https://github.com/makkBit/shorten-this-url/blob/master/app/api/url-shortener.js
</p>
<br>
<p>json response:</p>
```
{ "original_url":"https://shorten-this-url.herokuapp.com/new/https://github.com/makkBit/shorten-this-url/blob/master/app/api/url-shortener.js", "short_url":"https://shorten-this-url.herokuapp.com/4838511" }
```
