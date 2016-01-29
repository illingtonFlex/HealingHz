var ns = HealingHz.createNS("HealingHz.data");

ns.ChordFactory = function() {

    this.C0  = new HealingHz.data.Note("C",     0,  0, 0);
    this.Db0 = new HealingHz.data.Note("C#/Db", 1,  0, 0);
    this.D0  = new HealingHz.data.Note("D",     2,  0, 0);
    this.Eb0 = new HealingHz.data.Note("D#/Eb", 3,  0, 0);
    this.E0  = new HealingHz.data.Note("E",     4,  0, 0);
    this.F0  = new HealingHz.data.Note("F",     5,  0, 0);
    this.Gb0 = new HealingHz.data.Note("F#/Gb", 6,  0, 0);
    this.G0  = new HealingHz.data.Note("G",     7,  0, 0);
    this.Ab0 = new HealingHz.data.Note("G#/Ab", 8,  0, 0);
    this.A0  = new HealingHz.data.Note("A",     9,  0, 0);
    this.Bb0 = new HealingHz.data.Note("A#/Bb", 10, 0, 0);
    this.B0  = new HealingHz.data.Note("B",     11, 0, 0);

    this.C_major   = new HealingHz.data.Chord("C major",     [ this.C0,  this.E0,   this.G0  ]);
    this.Db_major  = new HealingHz.data.Chord("C#/Db major", [ this.Db0, this.F0,   this.Ab0 ]);
    this.D_major   = new HealingHz.data.Chord("D major",     [ this.D0,  this.Gb0,  this.A0  ]);
    this.Eb_major  = new HealingHz.data.Chord("D#/Eb major", [ this.Eb0, this.G0,   this.Bb0 ]);
    this.E_major   = new HealingHz.data.Chord("E major",     [ this.E0,  this.Ab0,  this.B0  ]);
    this.F_major   = new HealingHz.data.Chord("F major",     [ this.F0,  this.A0,   this.C0  ]);
    this.Gb_major  = new HealingHz.data.Chord("F#/Gb major", [ this.Gb0, this.Bb0,  this.Db0 ]);
    this.G_major   = new HealingHz.data.Chord("G major",     [ this.G0,  this.B0,   this.D0  ]);
    this.Ab_major  = new HealingHz.data.Chord("G#/Ab major", [ this.Ab0, this.C0,   this.Eb0 ]);
    this.A_major   = new HealingHz.data.Chord("A major",     [ this.A0,  this.Bb0,  this.E0  ]);
    this.Bb_major  = new HealingHz.data.Chord("A#/Bb major", [ this.Bb0, this.D0,   this.F0  ]);
    this.B_major   = new HealingHz.data.Chord("B major",     [ this.B0,  this.Eb0,  this.Gb0 ]);

    this.major_triads = [this.C_major, this.Db_major, this.D_major, this.Eb_major, this.E_major, this.F_major, this.Gb_major, this.G_major, this.Ab_major, this.A_major, this.Bb_major, this.B_major];
    
    this.C_minor   = new HealingHz.data.Chord("C minor",     [ this.C0,  this.Eb0,   this.G0  ]);
    this.Db_minor  = new HealingHz.data.Chord("C#/Db minor", [ this.Db0, this.E0,    this.Ab0 ]);
    this.D_minor   = new HealingHz.data.Chord("D minor",     [ this.D0,  this.F0,    this.A0  ]);
    this.Eb_minor  = new HealingHz.data.Chord("D#/Eb minor", [ this.Eb0, this.Gb0,   this.Bb0 ]);
    this.E_minor   = new HealingHz.data.Chord("E minor",     [ this.E0,  this.G0,    this.B0  ]);
    this.F_minor   = new HealingHz.data.Chord("F minor",     [ this.F0,  this.Ab0,   this.C0  ]);
    this.Gb_minor  = new HealingHz.data.Chord("F#/Gb minor", [ this.Gb0, this.Bb0,   this.Db0 ]);
    this.G_minor   = new HealingHz.data.Chord("G minor",     [ this.G0,  this.Bb0,   this.D0  ]);
    this.Ab_minor  = new HealingHz.data.Chord("G#/Ab minor", [ this.Ab0, this.Cb0,   this.Eb0 ]);
    this.A_minor   = new HealingHz.data.Chord("A minor",     [ this.A0,  this.C0,    this.E0  ]);
    this.Bb_minor  = new HealingHz.data.Chord("A#/Bb minor", [ this.Bb0, this.Db0,   this.F0  ]);
    this.B_minor   = new HealingHz.data.Chord("B minor",     [ this.B0,  this.D0,    this.Gb0 ]);
    
    this.minor_triads = [this.C_minor, this.Db_minor, this.D_minor, this.Eb_minor, this.E_minor, this.F_minor, this.Gb_minor, this.G_minor, this.Ab_minor, this.A_minor, this.Bb_minor, this.B_minor];

};

ns.ChordFactory.prototype.getChord = function(numOfNotes) {
    return this.E_major;
};