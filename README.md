[1]: https://secure.travis-ci.org/litejs/events-lite.png
[2]: https://travis-ci.org/litejs/events-lite
[3]: https://coveralls.io/repos/litejs/events-lite/badge.png
[4]: https://coveralls.io/r/litejs/events-lite
[npm package]: https://npmjs.org/package/events-lite
[GitHub repo]: https://github.com/litejs/events-lite


    @version  0.1.0
    @date     2015-05-22


Event &ndash; [![Build][1]][2] [![Coverage][3]][4]
=====

`Event.Emitter` can be mixed in to any object,
giving the object the ability to emit named events.


Usage
-----

Mix `Event.Emitter` to custom object.

```javascript
function MyObj(name) {
    this.name = name
}
Object.assign(MyObj.prototype, Event.Emitter)

var obj = new MyObj("obj1")

obj.on("say", function(text) {
    console.log(this.name + " says: " + text)
})

obj.emit("say", "hello world")
```

Use in Mediator Pattern.

```javascript
// Define global mediator

var Mediator = Object.create(Event.Emitter)

// Listen login events in login controller
Mediator.on("login", function(user, pass) {
    // login code
})

// Emit login event from login view
Mediator.emit("login", "username", "secretPassword")

```


External links
--------------

-   [GitHub repo][]
-   [npm package][]


### Licence

Copyright (c) 2013-2015 Lauri Rooden &lt;lauri@rooden.ee&gt;  
[The MIT License](http://lauri.rooden.ee/mit-license.txt)


