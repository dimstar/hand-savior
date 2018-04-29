// get ignored .env keys
require("dotenv").config();
const api_key = process.env.GKEY;
const Speakable = require('speakable');
const speakable = new Speakable({key: api_key});
const robot = require('robotjs');

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
    speakable.recordVoice();
});
   
speakable.on('speechResult', function(recognizedWords) {
    log('onSpeechResult:')
    log(recognizedWords);
    if((recognizedWords.indexOf('swipe') > -1) && (recognizedWords.indexOf('left') > -1)){
        robot.keyToggle('control', 'down');
        robot.keyTap('left');
        robot.keyToggle('control', 'up');
    }

    if((recognizedWords.indexOf('swipe') > -1) && (recognizedWords.indexOf('right') > -1)){
        robot.keyToggle('control', 'down');
        robot.keyTap('right');
        robot.keyToggle('control', 'up');
    }
    
    speakable.recordVoice();
});
   
speakable.recordVoice();