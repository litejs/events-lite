


/*
 * @version    0.1.0
 * @date       2015-05-22
 * @stability  2 - Unstable
 * @author     Lauri Rooden <lauri@rooden.ee>
 * @license    MIT License
 */



!function(exports) {
	var Event = exports.Event || (exports.Event = {})

	Event.Emitter = {
		on: on,
		non: non,
		off: non,
		once: once,
		one: once,
		emit: emit
	}

	function on(type, fn, scope, _origin) {
		var emitter = this
		, events = emitter._e || (emitter._e = {})
		;(events[type] || (events[type] = [])).unshift(scope, _origin, fn)
		return emitter
	}

	function non(type, fn, scope) {
		var i
		, emitter = this
		, events = emitter._e && emitter._e[type]
		if (events) {
			if (fn) for (i = events.length; i--; i--) {
				if ((events[i--] === fn || events[i] === fn) && events[i - 1] == scope) {
					events.splice(i - 1, 3)
					break
				}
			}
			else events.length = 0
		}
		return emitter
	}

	function once(type, fn, scope) {
		var emitter = this
		function remove() {
			emitter.non(type, fn, scope).non(type, remove, scope)
		}
		return emitter.on(type, remove, scope).on(type, fn, scope)
	}

	function emit(type) {
		var args, i
		, emitter = this
		if (type = (emitter._e && emitter._e[type])) {
			type = type.slice()
			for (i = type.length, args = type.slice.call(arguments, 1); i--; ) {
				type[i--].apply(type[--i] || emitter, args)
			}
		}
		return emitter
	}

}(this)



