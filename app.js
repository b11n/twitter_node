var util = require('util'),
    twitter = require('twitter');
var twit = new twitter({
    consumer_key: 'yOwkPRTMVYDiG1sdjc0PA',
    consumer_secret: 'PiiNjFpyC0VoIm2aQPdGas4vqLCg4zsYjEPLABoIs8',
    access_token_key: '20232865-rRyvWiNxmgzd0Al07YDotNuLi2UyPdKjd1vBv6zXE',
    access_token_secret: 'o73Zt5DJSXe6juRsU8xNvRT01yZ5Sn0pLB83FZ5nETHTr'
});


var io = require('socket.io').listen(80);

io.sockets.on('connection', function (socket) {

		setInterval(function(){
			socket.emit('news', { value: count });
			count = 0;
		},1000)


});

count = 0;



twit.stream('filter', {track:'AktifSabır'}, function(stream) {
    stream.on('data', function(data) {
        //console.log(data.text)
        count++
    });
 
});


