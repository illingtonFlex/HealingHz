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

    var solutionNotes = [];

    for(si=0; si<HealingHz.NUM_MARKERS; si++)
    {
        solutionNotes.push(HealingHz.markerBoxes[si].getNote());
    }

    var jsonData =
        '{' +
        '"correctAnswer": "' + correct + '", ' +
        '"chordName": "' + HealingHz.theChord.getName() + '", ' +
        '"notesPresented": ' + JSON.stringify(HealingHz.theChord.getNotes()) + ', ' +
        '"solutionNotes": ' + JSON.stringify(solutionNotes) +
        '}';

    console.log(jsonData);
    $.ajax({
        type: 'POST',
        url: 'http://104.131.64.136:8080/submitSolution',
        crossDomain: true,
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(responseData, textStatus, jqXHR) {
            console.log('POST Succeeded: ' + JSON.stringify(responseData));
        },
        error: function (responseData, textStatus, errorThrown) {
            console.log('POST failed: ' + JSON.stringify(responseData));
        }
    });
};


HealingHz.showVictoryText = function() {
    console.log("PASS");
    $("#victoryDiv").modal("show");
};

HealingHz.showFailureText = function() {
    console.log("FAIL");
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
        HealingHz.showVictoryText();
    }
    else {
        HealingHz.showFailureText();
    }
    
    return ret;
};

HealingHz.initAudio = function(chord) {
    console.log("Initializing chord: " + chord.name); 
    var notes = chord.getNotes();
    
    var audioPath = "audio/" + ((Math.floor(Math.random() * 4) + 1))  + "/";
    console.log("audiopath: " + audioPath);
    var sounds = [];
    
    for(var i = 0; i<notes.length; i++)
    {
        var pushNote = notes[i];
        sounds.push({id:pushNote.fileName, src:pushNote.fileName+".ogg"});
    }

    createjs.Sound.alternateExtensions = ["mp3", "wav"];
    createjs.Sound.registerSounds(sounds, audioPath);

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

HealingHz.init = function() {

    var canvas = document.getElementById("healingHzCanvas");
    canvas.addEventListener("touchstart", HealingHz.playSilentSound, false);

    var model = HealingHz.model;   
    var data = HealingHz.data;

    var stage = new createjs.Stage("healingHzCanvas");
    createjs.Touch.enable(stage);
    
    var chordFactory = new data.ChordFactory();
    HealingHz.theChord = chordFactory.getChord();
    HealingHz.NUM_MARKERS = HealingHz.theChord.getNotes().length;

    HealingHz.initAudio(HealingHz.theChord);

    var factory = new model.NoteMarkerFactory();
    HealingHz.noteMarkers = factory.buildNoteMarkers(HealingHz.theChord);
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
    HealingHz.init();
};