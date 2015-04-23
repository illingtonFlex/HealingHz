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

HealingHz.init = function() {
    
    var model = HealingHz.model;    
    var canvas = document.getElementById('myCanvas');
//    var audio = getElementById('FIXME');
    
    var ctx = canvas.getContext('2d');

    var note1 = new model.NoteMarker(250, 100, 45, 'blue', '#000000');
    note1.draw(ctx);
    
    var note2 = new model.NoteMarker(150, 100, 35, 'green', '#000000');
    note2.draw(ctx);  
    
    var note3 = new model.NoteMarker(400, 100, 65, 'orange', '#000000');
    note3.draw(ctx);
};

window.onload = function()
{
    HealingHz.init();
};