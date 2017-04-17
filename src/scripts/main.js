var HealingHz = HealingHz || {};

HealingHz.createNS = function (namespace) {
    var nsparts = namespace.split(".");
    var parent = HealingHz;
 
    if (nsparts[0] === "HealingHz") {
        nsparts = nsparts.slice(1);
    }
 
    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];

        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }

        parent = parent[partname];
    }

    return parent;
};

HealingHz.postResults = function(correct) {

    // var solutionNotes = [];
    //
    // for(si=0; si<HealingHz.NUM_MARKERS; si++)
    // {
    //     solutionNotes.push(HealingHz.markerBoxes[si].getNote());
    // }
    //
    // var jsonData =
    //     '{' +
    //     '"correctAnswer": "' + correct + '", ' +
    //     '"chordName": "' + HealingHz.theChord.getName() + '", ' +
    //     '"notesPresented": ' + JSON.stringify(HealingHz.theChord.getNotes()) + ', ' +
    //     '"solutionNotes": ' + JSON.stringify(solutionNotes) +
    //     '}';
    // console.log(jsonData);
    // $.ajax({
    //     type: 'POST',
    //     url: 'http://104.131.64.136:8080/submitSolution',
    //     crossDomain: true,
    //     data: jsonData,
    //     contentType: "application/json; charset=utf-8",
    //     dataType: "json",
    //     success: function(responseData, textStatus, jqXHR) {
    //         console.log('POST Succeeded: ' + JSON.stringify(responseData));
    //     },
    //     error: function (responseData, textStatus, errorThrown) {
    //         console.log('POST failed: ' + JSON.stringify(responseData));
    //     }
    // });
};


HealingHz.handleCorrectAnswer = function() {
    $("#victoryDiv").modal("show");
};

HealingHz.handleInorrectAnswer = function() {
    $("#failureDiv").modal("show");
};

HealingHz.checkNoteOrder = function() {
                
    var ret = true;
    var index = 0;

    for(checki=0; checki<HealingHz.NUM_MARKERS; checki++) {
    
        if(!HealingHz.markerBoxes[checki].isFull()) {
            return false;
        } 
        
        var note = HealingHz.markerBoxes[checki].getNote();        

        if(index <= note.index) {
            index = note.index;
        }
        else {
            ret = false;
        }
    }

    HealingHz.postResults(ret);

    if(ret === true) {
        HealingHz.handleCorrectAnswer();
    }
    else {
        HealingHz.handleInorrectAnswer();
    }
    
    return ret;
};

HealingHz.initAudio = function(chord, voice) {
    console.log("Initializing chord: " + chord.name);
    var notes = chord.getNotes();
    
    var audioPath = "audio/" + voice  + "/";

    console.log("audiopath: " + audioPath);
    var sounds = [];
    
    for(var i = 0; i<notes.length; i++)
    {
        var pushNote = notes[i];
        sounds.push({id:pushNote.fileName, src:pushNote.fileName+".ogg"});
    }

    createjs.Sound.alternateExtensions = ["mp3", "wav"];
    createjs.Sound.registerSounds(sounds, audioPath);

    createjs.Sound.registerSound("audio/1/C.ogg", "voice1");
    createjs.Sound.registerSound("audio/2/C.ogg", "voice2");
    createjs.Sound.registerSound("audio/3/C.ogg", "voice3");
    createjs.Sound.registerSound("audio/4/C.ogg", "voice4");
};

HealingHz.playVoice = function(voice) {

    createjs.Sound.play("voice"+voice);
};

HealingHz.reset = function() {

    for(mi=0; mi<HealingHz.noteMarkers.length; mi++)
    {
        var marker = HealingHz.noteMarkers[mi];
        var c = marker.circle;

        createjs.Tween.get(c, { loop: false })
            .to({ alpha: 0 }, 50)
            .to({ alpha: 1 }, 50)
            .to({ alpha: 0 }, 50)
            .to({ alpha: 1 }, 50)
            .to({ x: c.origx, y: c.origy }, 1000, createjs.Ease.getPowInOut(4));
    }

};

HealingHz.playSilentSound = function() {
    //Necessary to initialize web audio in iOS
    createjs.WebAudioPlugin.playEmptySound();
};

HealingHz.initStandalone = function() {
    var chordFactory = new HealingHz.data.ChordFactory();
    var aChord = chordFactory.getChord();
    var rndVoice = ((Math.floor(Math.random() * 4) + 1));
    HealingHz.init(aChord, rndVoice);

};

HealingHz.initTestPlan = function(curriculum, voice) {

    if(voice === "0") {
        voice = ((Math.floor(Math.random() * 4) + 1));
    }

    console.log(curriculum);

    var chordFactory = new HealingHz.data.ChordFactory();
    var aChord = chordFactory.getChord(curriculum.chords[0].name);
    console.log(aChord);
    HealingHz.init(aChord, voice);
};

HealingHz.init = function(inChord, inVoice) {

    HealingHz.curriculums = [];

    var canvas = document.getElementById("healingHzCanvas");
    canvas.addEventListener("touchstart", HealingHz.playSilentSound, false);

    var model = HealingHz.model;   

    var stage = new createjs.Stage("healingHzCanvas");
    createjs.Touch.enable(stage);

    HealingHz.NUM_MARKERS = inChord.getNotes().length;

    HealingHz.initAudio(inChord, inVoice);

    var factory = new model.NoteMarkerFactory();
    HealingHz.noteMarkers = factory.buildNoteMarkers(inChord);
    HealingHz.markerBoxes = [];

    
    for(i=0; i<HealingHz.noteMarkers.length; i++)
    {
        HealingHz.noteMarkers[i].draw(stage);
    }

    for(i=0; i<HealingHz.NUM_MARKERS; i++)
    {
        var xindex = (690+(10*i))/HealingHz.NUM_MARKERS + (110*i);
        
        HealingHz.markerBoxes.push(
            new HealingHz.model.NoteMarkerBox(
                xindex, 50, "white", "black"));
        HealingHz.markerBoxes[i].draw(stage);
    }
};

window.onload = function() {

    if (location.search) {
        var params = {};
        var parts = location.search.substring(1).split('&');

        for (var i = 0; i < parts.length; i++) {
            var nv = parts[i].split('=');
            if (!nv[0]) continue;
            params[nv[0]] = nv[1] || true;
        }

        $.getJSON("curriculums.json", function(json) {
            for(var i=0; i<json.length; i++) {
                if(json[i].id === params.c) {
                    HealingHz.initTestPlan(json[i], params.v);
                }
            }
        });
    }
    else
    {
        HealingHz.initStandalone();
    }
};