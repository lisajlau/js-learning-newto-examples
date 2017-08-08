function NewEvent(id, eventName, callback, emitter) {
    this.id = id;
    this.eventName = eventName;
    this.callback = callback;
    this.emitter = emitter;
}

NewEvent.prototype.release = function() {
    this.emitter.release(this.id);
}

function Emitter() {
    this.events = [];
    this.count = 0;
}

Emitter.prototype.subscribe = function(event_name, callback) {
    let event = new NewEvent(this.count++, event_name, callback, this);
    this.events.push(event);
    return event;
}

Emitter.prototype.emit = function(eventName) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    this.events.forEach(function(event, index) {
        if(event.eventName === eventName) {
            event.callback.apply(null, args);
        }
    });
}

Emitter.prototype.release = function(id) {
    for (let i = 0; i < this.count; i++) {
        let event = this.events[i];
        if(event.id === id) {
            this.events.splice(i, 1);
            return;
        }
    }
}

// Question
const emitter = new Emitter();

const sub1 = emitter.subscribe("event_name", function() {
    console.log(1);
    console.log(arguments);
});

const sub2 = emitter.subscribe("event_name", function() {
    console.log(2);
    console.log(arguments);
});

const sub3 = emitter.subscribe("event_name", function() {
    console.log(3);
    console.log(arguments);
});

emitter.emit("event_name", "foo", "bar");

sub2.release();

