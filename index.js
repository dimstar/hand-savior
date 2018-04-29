// get ignored .env keys
require("dotenv").config();
const api_key = process.env.GKEY;
const Speakable = require('speakable');
const speakable = new Speakable({key: api_key});
const log = console.log;

// log(api_key);

speakable.on('speechStart', ()=>{
    log('speechStart');
});

speakable.on('speechStop', ()=>{
    log('speechStop');
});

speakable.on('speechReady', ()=>{
    log('speechReady');
});

speakable.on('error', function(err) {
    console.log('onError:');
    console.log(err);
    l
});
   
speakable.on('speechResult', function(recognizedWords) {
    console.log('onSpeechResult:')
    console.log(recognizedWords);
    speakable.recordVoice();
});
   
speakable.recordVoice();