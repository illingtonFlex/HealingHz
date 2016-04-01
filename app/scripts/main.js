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



HealingHz.showVictoryText = function() {
    var modal = document.getElementById('victoryDiv');
    modal.style.display = "block";
};

HealingHz.showFailureText = function() {
    var modal = document.getElementById('failureDiv');
    modal.style.display = "block";
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
        sounds.push({id:pushNote.name, src:pushNote.name+".ogg"});
    }

    createjs.Sound.alternateExtensions = ["mp3", "wav"];
    createjs.Sound.registerSounds(sounds, audioPath);

};

HealingHz.reset = function() {

    var modal = document.getElementById('failureDiv');
    modal.style.display = "none";

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

HealingHz.init = function() {
    var model = HealingHz.model;   
    var data = HealingHz.data;

//    HealingHz.NUM_MARKERS = 3; //(Math.floor(Math.random() * 3) + 1) + 2;

    var stage = new createjs.Stage("healingHzCanvas");
    createjs.Touch.enable(stage);
    
    var chordFactory = new data.ChordFactory();
    var theChord = chordFactory.getChord();
    HealingHz.NUM_MARKERS = theChord.getNotes().length;

    HealingHz.initAudio(theChord);

    var factory = new model.NoteMarkerFactory();
    HealingHz.noteMarkers = factory.buildNoteMarkers(theChord);
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