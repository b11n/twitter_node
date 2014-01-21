var util = require('util'),
    twitter = require('twitter');

var sentiment = require('sentiment');

var twit = new twitter({
    consumer_key: 'yOwkPRTMVYDiG1sdjc0PA',
    consumer_secret: 'PiiNjFpyC0VoIm2aQPdGas4vqLCg4zsYjEPLABoIs8',
    access_token_key: '20232865-rRyvWiNxmgzd0Al07YDotNuLi2UyPdKjd1vBv6zXE',
    access_token_secret: 'o73Zt5DJSXe6juRsU8xNvRT01yZ5Sn0pLB83FZ5nETHTr'
});


key = "data";

var io = require('socket.io').listen(8111);

io.sockets.on('connection', function (socket) {

		setInterval(function(){
			//socket.emit('news', { value: count, keyword:key });
			count = 0;
		},1000)


});

count = 0;



twit.stream('filter', {track:key}, function(stream) {
    stream.on('data', function(data) {
        if(data.lang == 'en')
        {
            sentiment(data.text, function (err, result) {
                    console.log(data.text);
                    console.log(result.score);    // Score: -2, Comparative: -0.666
            });
        }
        count++
    });
 
});


