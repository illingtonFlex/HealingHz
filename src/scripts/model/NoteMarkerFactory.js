var ns = HealingHz.createNS("HealingHz.model");


ns.NoteMarkerFactory = function() {
};
ns.NoteMarkerFactory.prototype.generateColorCode = function() {
    return Math.floor(Math.random()*16777215);
};

ns.NoteMarkerFactory.prototype.randomizeNotes = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

ns.NoteMarkerFactory.prototype.buildNoteMarkers = function(chord) {

    var noteMarkers = [];
    var notes = chord.getNotes();
    
    this.randomizeNotes(notes);

    for(i=0; i<notes.length; i++)
    {
        var color = this.generateColorCode();

        var xindex = (690+(10*i))/HealingHz.NUM_MARKERS + (110*i) + 50;
        var nm = new HealingHz.model.NoteMarker(xindex, 200, 40, '#'+color.toString(16), "black", notes[i]);
        noteMarkers.push(nm);
    }

    return noteMarkers;
};