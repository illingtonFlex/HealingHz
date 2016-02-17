var ns = HealingHz.createNS("HealingHz.data");

ns.ChordFactory = function() {

    this.C4  = new HealingHz.data.Note("C",    0);
    this.Db4 = new HealingHz.data.Note("C#Db", 1);
    this.D4  = new HealingHz.data.Note("D",    2);
    this.Eb4 = new HealingHz.data.Note("D#Eb", 3);
    this.E4  = new HealingHz.data.Note("E",    4);
    this.F4  = new HealingHz.data.Note("F",    5);
    this.Gb4 = new HealingHz.data.Note("F#Gb", 6);
    this.G4  = new HealingHz.data.Note("G",    7);
    this.Ab4 = new HealingHz.data.Note("G#Ab", 8);
    this.A4  = new HealingHz.data.Note("A",    9);
    this.Bb4 = new HealingHz.data.Note("A#Bb", 10);
    this.B4  = new HealingHz.data.Note("B",    11);


    this.C_major   = new HealingHz.data.Chord("C major",     [ this.C4,  this.E4,   this.G4  ]);
    this.Db_major  = new HealingHz.data.Chord("C#/Db major", [ this.Db4, this.F4,   this.Ab4 ]);
    this.D_major   = new HealingHz.data.Chord("D major",     [ this.D4,  this.Gb4,  this.A4  ]);
    this.Eb_major  = new HealingHz.data.Chord("D#/Eb major", [ this.Eb4, this.G4,   this.Bb4 ]);
    this.E_major   = new HealingHz.data.Chord("E major",     [ this.E4,  this.Ab4,  this.B4  ]);
    this.F_major   = new HealingHz.data.Chord("F major",     [ this.F4,  this.A4,   this.C4  ]);
    this.Gb_major  = new HealingHz.data.Chord("F#/Gb major", [ this.Gb4, this.Bb4,  this.Db4 ]);
    this.G_major   = new HealingHz.data.Chord("G major",     [ this.G4,  this.B4,   this.D4  ]);
    this.Ab_major  = new HealingHz.data.Chord("G#/Ab major", [ this.Ab4, this.C4,   this.Eb4 ]);
    this.A_major   = new HealingHz.data.Chord("A major",     [ this.A4,  this.Db4,  this.E4  ]);
    this.Bb_major  = new HealingHz.data.Chord("A#/Bb major", [ this.Bb4, this.D4,   this.F4  ]);
    this.B_major   = new HealingHz.data.Chord("B major",     [ this.B4,  this.Eb4,  this.Gb4 ]);

    
    this.C_minor   = new HealingHz.data.Chord("C minor",     [ this.C4,  this.Eb4,   this.G4  ]);
    this.Db_minor  = new HealingHz.data.Chord("C#/Db minor", [ this.Db4, this.E4,    this.Ab4 ]);
    this.D_minor   = new HealingHz.data.Chord("D minor",     [ this.D4,  this.F4,    this.A4  ]);
    this.Eb_minor  = new HealingHz.data.Chord("D#/Eb minor", [ this.Eb4, this.Gb4,   this.Bb4 ]);
    this.E_minor   = new HealingHz.data.Chord("E minor",     [ this.E4,  this.G4,    this.B4  ]);
    this.F_minor   = new HealingHz.data.Chord("F minor",     [ this.F4,  this.Ab4,   this.C4  ]);
    this.Gb_minor  = new HealingHz.data.Chord("F#/Gb minor", [ this.Gb4, this.Bb4,   this.Db4 ]);
    this.G_minor   = new HealingHz.data.Chord("G minor",     [ this.G4,  this.Bb4,   this.D4  ]);
    this.Ab_minor  = new HealingHz.data.Chord("G#/Ab minor", [ this.Ab4, this.B4,   this.Eb4 ]);
    this.A_minor   = new HealingHz.data.Chord("A minor",     [ this.A4,  this.C4,    this.E4  ]);
    this.Bb_minor  = new HealingHz.data.Chord("A#/Bb minor", [ this.Bb4, this.Db4,   this.F4  ]);
    this.B_minor   = new HealingHz.data.Chord("B minor",     [ this.B4,  this.D4,    this.Gb4 ]);

    this.chords = [ this.C_major, 
                    this.Db_major, 
                    this.D_major, 
                    this.Eb_major, 
                    this.E_major, 
                    this.F_major, 
                    this.Gb_major, 
                    this.G_major, 
                    this.Ab_major, 
                    this.A_major, 
                    this.Bb_major, 
                    this.B_major, 
                    this.C_minor, 
                    this.Db_minor, 
                    this.D_minor, 
                    this.Eb_minor, 
                    this.E_minor, 
                    this.F_minor, 
                    this.Gb_minor, 
                    this.G_minor, 
                    this.Ab_minor, 
                    this.A_minor, 
                    this.Bb_minor, 
                    this.B_minor ];

};

ns.ChordFactory.prototype.getChord = function(numOfNotes) {
    return this.chords[Math.floor(Math.random() * this.chords.length)];
};