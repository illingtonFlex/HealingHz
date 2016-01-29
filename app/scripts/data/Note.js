var ns = HealingHz.createNS("HealingHz.data");

ns.Note = function(name, index, startTime, stopTime) {
    this.name = name;
    this.index = index;
    this.startTime = startTime;
    this.stopTime = stopTime;
};