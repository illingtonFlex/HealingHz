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

HealingHz.stage = null;

HealingHz.testPlanResults = {
    "notesPresented" : [],
    "notesSubmitted" : [],
    "voice" : null
};

HealingHz.SETTINGS = {
    "mode" : "standalone",
    "testPlanIterator" : 0,
    "currentTestPlan" : null,
    "currentVoice" : 0
};


HealingHz.postResults = function(results) {
    console.log(results);
};


HealingHz.handleCorrectAnswer = function() {
    if(HealingHz.SETTINGS.mode != "testplan") {
        $("#victoryDiv").modal("show");
    } else {
        HealingHz.processSubmission();
    }
};

HealingHz.handleInorrectAnswer = function() {
    if(HealingHz.SETTINGS.mode != "testplan") {
        $("#failureDiv").modal("show");
    } else {
        HealingHz.processSubmission();
    }
};

HealingHz.processSubmission = function() {

    var notesPresented = [];

    for(var i=0; i< HealingHz.noteMarkers.length; i++) {
        notesPresented.push(HealingHz.noteMarkers[i].note);
    }

    HealingHz.testPlanResults.notesPresented.push(notesPresented);
    HealingHz.testPlanResults.voice = HealingHz.SETTINGS.currentVoice;

    HealingHz.postResults(HealingHz.testPlanResults);

    for (i = 0; i < HealingHz.noteMarkers.length; i++) {
        HealingHz.stage.removeChild(HealingHz.noteMarkers[i].circle);
        HealingHz.stage.removeChild(HealingHz.markerBoxes[i].box);
    }

    HealingHz.SETTINGS.testPlanIterator++;

    var appElement = document.querySelector('[ng-app="HealingHz-CurriculumUI"]');
    var $scope = angular.element(appElement).scope();

    if(HealingHz.SETTINGS.testPlanIterator < HealingHz.SETTINGS.currentTestPlan.chords.length) {
        var chord = HealingHz.getCurrentChord();
        HealingHz.init(chord, HealingHz.SETTINGS.currentVoice);

        $scope.$apply(function() {
            $scope.testPlanIterator = HealingHz.SETTINGS.testPlanIterator;
        });
    }
    else
    {
        $scope.$apply(function() {
                $scope.results = HealingHz.testPlanResults;
        });
        $("#resultsDiv").modal("show");
    }
};

HealingHz.getCurrentChord = function() {
    var chord = new HealingHz.data.ChordFactory().getChord(
        HealingHz.SETTINGS.currentTestPlan.chords[HealingHz.SETTINGS.testPlanIterator].name
    );

    return chord;
};

HealingHz.checkNoteOrder = function() {
                
    var ret = true;
    var index = 0;
    var notesSubmitted = [];

    for(var checki=0; checki<HealingHz.markerBoxes.length; checki++) {
    
        if(!HealingHz.markerBoxes[checki].isFull()) {
            return false;
        } 

        var note = HealingHz.markerBoxes[checki].getNote();

        notesSubmitted.push(note);

        if(index <= note.index) {
            index = note.index;
        }
        else {
            ret = false;
        }
    }

    HealingHz.testPlanResults.notesSubmitted.push(notesSubmitted);

    if(ret === true) {
        HealingHz.handleCorrectAnswer();
    }
    else {
        HealingHz.handleInorrectAnswer();
    }
    
    return ret;
};

HealingHz.initAudio = function(chord, voice) {
    var notes = chord.getNotes();

    if(voice === "0") {
        voice = ((Math.floor(Math.random() * 4) + 1));
    }
    
    var audioPath = "audio/" + voice  + "/";

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
    var aChord = new HealingHz.data.ChordFactory().getChord();
    var rndVoice = ((Math.floor(Math.random() * 4) + 1));
    HealingHz.init(aChord, rndVoice);
};

HealingHz.initTestPlan = function(curriculum, voice) {

    $( "#explanationDiv" ).hide();
    $( "#testPlanStatusDiv" ).show();
    $( "#navBar" ).hide();

    var appElement = document.querySelector('[ng-app="HealingHz-CurriculumUI"]');
    var $scope = angular.element(appElement).scope();
    $scope.$apply(function() {
        $scope.selectedCurriculum = curriculum;
        $scope.testPlanIterator = HealingHz.SETTINGS.testPlanIterator;
    });

    var aChord = new HealingHz.data.ChordFactory().getChord(curriculum.chords[HealingHz.SETTINGS.testPlanIterator].name);
    HealingHz.init(aChord, voice);
    HealingHz.SETTINGS.mode = "testplan";
    HealingHz.SETTINGS.currentTestPlan = curriculum;
    HealingHz.SETTINGS.currentVoice = voice;
};

HealingHz.init = function(inChord, inVoice) {

    var canvas = document.getElementById("healingHzCanvas");
    canvas.addEventListener("touchstart", HealingHz.playSilentSound, false);

    var model = HealingHz.model;   

    if(HealingHz.stage === null) {
        HealingHz.stage = new createjs.Stage("healingHzCanvas");
        createjs.Touch.enable(HealingHz.stage);
    }

    HealingHz.initAudio(inChord, inVoice);

    HealingHz.noteMarkers = new model.NoteMarkerFactory().buildNoteMarkers(inChord);
    HealingHz.markerBoxes = [];

    
    for(var i=0; i<HealingHz.noteMarkers.length; i++)
    {
        HealingHz.noteMarkers[i].draw(HealingHz.stage);
    }

    for(i=0; i<inChord.getNotes().length; i++)
    {
        var xindex = (690+(10*i))/inChord.getNotes().length + (110*i);
        
        HealingHz.markerBoxes.push(
            new HealingHz.model.NoteMarkerBox(
                xindex, 50, "white", "black"));
        HealingHz.markerBoxes[i].draw(HealingHz.stage);
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

                    HealingHz.SETTINGS.currentVoice = params.v;
                    HealingHz.SETTINGS.currentTestPlan = json[i];

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