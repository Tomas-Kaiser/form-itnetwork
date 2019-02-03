// /**
//  * Taken from https://developer.mozilla.org/en-US/docs/Web/Events
//  */
// // TODO: Add multiple descriptions
// class Events {
// 	/**
// 	 * The loading of a resource has been aborted.
// 	 * @type {string}
// 	 */
// 	const ABORT = 'abort';
// 	/**
// 	 * The associated document has started printing or the print preview has been closed.
// 	 * @type {string}
// 	 */
// 	const AFTER_PRINT = 'afterprint';
// 	/**
// 	 * A CSS animation has completed.
// 	 * @type {string}
// 	 */
// 	const ANIMATION_END = 'animationend';
// 	/**
// 	 * A CSS animation is repeated.
// 	 * @type {string}
// 	 */
// 	const ANIMATION_ITERATION = 'animationiteration';
// 	/**
// 	 * A CSS animation has started.
// 	 * @type {string}
// 	 */
// 	const ANIMATION_START = 'animationstart';
// 	/**
// 	 * A web application is successfully installed as a progressive web app.
// 	 * @type {string}
// 	 */
// 	const APP_INSTALLED = 'appinstalled';
// 	/**
// 	 * The input buffer of a ScriptProcessorNode is ready to be processed.
// 	 * @type {string}
// 	 */
// 	const AUDIO_PROCESS = 'audioprocess';
// 	/**
// 	 * The user agent has finished capturing audio for speech recognition.
// 	 * @type {string}
// 	 */
// 	const AUDIO_END = 'audioend';
// 	/**
// 	 * The user agent has started to capture audio for speech recognition.
// 	 * @type {string}
// 	 */
// 	const AUDIO_START = 'audiostart';
// 	/**
// 	 * The associated document is about to be printed or previewed for printing.
// 	 * @type {string}
// 	 */
// 	const BEFORE_PRINT = 'beforeprint';
// 	/**
// 	 * The window, the document and its resources are about to be unloaded.
// 	 * @type {string}
// 	 */
// 	const BEFORE_UNLOAD = 'beforeunload';
// 	/**
// 	 * A SMIL animation element begins.
// 	 * @type {string}
// 	 */
// 	const BEGIN_EVENT = 'beginEvent';
// 	/**
// 	 * An open connection to a database is blocking a versionchange transaction on the same database.
// 	 * @type {string}
// 	 */
// 	const BLOCKED = 'blocked';
// 	/**
// 	 * An element has lost focus (does not bubble).
// 	 * @type {string}
// 	 */
// 	const BLUR = 'blur';
// 	/**
// 	 * Web Speech API	The spoken utterance reaches a word or sentence boundary
// 	 * @type {string}
// 	 */
// 	const BOUNDARY = 'boundary';
// 	/**
// 	 * Offline	The resources listed in the manifest have been downloaded, and the application is now cached.
// 	 * @type {string}
// 	 */
// 	const CACHED = 'cached';
// 	/**
// 	 * HTML5 media	The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.
// 	 * @type {string}
// 	 */
// 	const CAN_PLAY = 'canplay';
// 	/**
// 	 * HTML5 media	The user agent can play the media up to its end without having to stop for further buffering of content.
// 	 * @type {string}
// 	 */
// 	const CAN_PLAY_THROUGH = 'canplaythrough';
// 	/**
// 	 * The change event is fired for <input>, <select>, and <textarea> elements when a change to the element's value is committed by the user.
// 	 * @type {string}
// 	 */
// 	const CHANGE = 'change';
// 	/**
// 	 * The battery begins or stops charging.
// 	 * @type {string}
// 	 */
// 	const CHARGING_CHANGE = 'chargingchange';
// 	/**
// 	 * The chargingTime attribute has been updated.
// 	 * @type {string}
// 	 */
// 	const CHARGING_TIME_CHANGE = 'chargingtimechange';
// 	/**
// 	 * The user agent is checking for an update, or attempting to download the cache manifest for the first time.
// 	 * @type {string}
// 	 */
// 	const CHECKING = 'checking';
// 	/**
// 	 * A pointing device button has been pressed and released on an element.
// 	 * @type {string}
// 	 */
// 	const CLICK = 'click';
// 	/**
// 	 * A WebSocket connection has been closed.
// 	 * @type {string}
// 	 */
// 	const CLOSE = 'close';
// 	/**
// 	 * A transaction successfully completed.
// 	 * @type {string}
// 	 */
// 	const COMPLETE = 'complete';
// 	/**
// 	 * The composition of a passage of text has been completed or canceled.
// 	 * @type {string}
// 	 */
// 	const COMPOSITION_END = 'compositionend';
// 	/**
// 	 * The composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition).
// 	 * @type {string}
// 	 */
// 	const COMPOSITION_START = 'compositionstart';
// 	/**
// 	 * A character is added to a passage of text being composed.
// 	 * @type {string}
// 	 */
// 	const COMPOSITION_UPDATE = 'compositionupdate';
// 	/**
// 	 * The right button of the mouse is clicked (before the context menu is displayed).
// 	 * @type {string}
// 	 */
// 	const CONTEXT_MENU = 'contextmenu';
// 	/**
// 	 * The text selection has been added to the clipboard.
// 	 * @type {string}
// 	 */
// 	const COPY = 'copy';
// 	/**
// 	 * The text selection has been removed from the document and added to the clipboard.
// 	 * @type {string}
// 	 */
// 	const CUT = 'cut';
// 	/**
// 	 * A pointing device button is clicked twice on an element.
// 	 * @type {string}
// 	 */
// 	const DOUBLE_CLICK = 'dblclick';
// 	/**
// 	 * A media device such as a camera, microphone, or speaker is connected or removed from the system.
// 	 * @type {string}
// 	 */
// 	const DEVICE_CHANGE = 'devicechange';
// 	/**
// 	 * Fresh data is available from a light sensor.
// 	 * @type {string}
// 	 */
// 	const DEVICE_LIGHT = 'devicelight';
// 	/**
// 	 * Fresh data is available from a motion sensor.
// 	 * @type {string}
// 	 */
// 	const DEVICE_MOTION = 'devicemotion';
// 	/**
// 	 * Fresh data is available from an orientation sensor.
// 	 * @type {string}
// 	 */
// 	const DEVICE_ORIENTATION = 'deviceorientation';
// 	/**
// 	 * Fresh data is available from a proximity sensor (indicates an approximated distance between the device and a nearby object).
// 	 * @type {string}
// 	 */
// 	const DEVICE_PROXIMITY = 'deviceproximity';
// 	/**
// 	 * The dischargingTime attribute has been updated.
// 	 * @type {string}
// 	 */
// 	const DISCHARGING_TIME_CHANGE = 'dischargingtimechange';
// 	/**
// 	 * A button, link or state changing element is activated (use click instead).
// 	 * @type {string}
// 	 */
// 	const DOM_ACTIVE = 'DOMActivate';
// 	/**
// 	 * The name of an attribute changed (use mutation observers instead).
// 	 * @type {string}
// 	 */
// 	const DOM_ATTRIBUTE_NAME_CHANGED = 'DOMAttributeNameChanged';
// 	/**
// 	 * The value of an attribute has been modified (use mutation observers instead).
// 	 * @type {string}
// 	 */
// 	const DOM_ATTRIBUTE_MODIFIED = 'DOMAttrModified';
// 	/**
// 	 * A text or another CharacterData has changed (use mutation observers instead).
// 	 * @type {string}
// 	 */
// 	const DOM_CHARACTER_DATA_MODIFIED = 'DOMCharacterDataModified';
// 	/**
// 	 * The document has finished loading (but not its dependent resources).
// 	 * @type {string}
// 	 */
// 	const DOM_CONTENT_LOADED = 'DOMContentLoaded';
// 	/**
// 	 * The name of an element changed (use mutation observers instead).
// 	 * @type {string}
// 	 */
// 	const DOM_ELEMENT_NAME_CHANGED = 'DOMElementNameChanged';
// 	/**
// 	 * An element has received focus (use focus or focusin instead).
// 	 * @type {string}
// 	 */
// 	const DOM_FOCUS_IN = 'DOMFocusIn';
// 	/**
// 	 * An element has lost focus (use blur or focusout instead).
// 	 * @type {string}
// 	 */
// 	const DOM_FOCUS_OUT = 'DOMFocusOut';
// 	/**
// 	 * A node has been added as a child of another node (use mutation observers instead).
// 	 * @type {string}
// 	 */
// 	const DOM_NODE_INSERTED = 'DOMNodeInserted';
// 	/**
// 	 * A node has been inserted into the document (use mutation observers instead).
// 	 * @type {string}
// 	 */
// 	const DOM_NODE_INSERTED_INTO_DOCUMENT = 'DOMNodeInsertedIntoDocument';
// 	/**
// 	 * A node has been removed from its parent node (use mutation observers instead).
// 	 * @type {string}
// 	 */
// 	const DOM_NODE_REMOVED = 'DOMNodeRemoved';
// 	/**
// 	 *  A node has been removed from the document (use mutation observers instead).
// 	 * @type {string}
// 	 */
// 	const DOM_NODE_REMOVED_FROM_DOCUMENT = 'DOMNodeRemovedFromDocument';
// 	/**
// 	 * A change happened in the document (use mutation observers instead).
// 	 * @type {string}
// 	 */
// 	const DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified';
// 	/**
// 	 * The user agent has found an update and is fetching it, or is downloading the resources listed by the cache manifest for the first time.
// 	 * @type {string}
// 	 */
// 	const DOWNLOADING = 'downloading';
// 	/**
// 	 * An element or text selection is being dragged (every 350ms).
// 	 * @type {string}
// 	 */
// 	const DRAG = 'drag';
// 	/**
// 	 * A drag operation is being ended (by releasing a mouse button or hitting the escape key).
// 	 * @type {string}
// 	 */
// 	const DRAG_END = 'dragend';
// 	/**
// 	 * A dragged element or text selection enters a valid drop target.
// 	 * @type {string}
// 	 */
// 	const DRAG_ENTER = 'dragenter';
// 	/**
// 	 * A dragged element or text selection leaves a valid drop target.
// 	 * @type {string}
// 	 */
// 	const DRAG_LEAVE = 'dragleave';
// 	/**
// 	 * An element or text selection is being dragged over a valid drop target (every 350ms).
// 	 * @type {string}
// 	 */
// 	const DRAG_LEAVE = 'dragover';
// 	/**
// 	 * The user starts dragging an element or text selection.
// 	 * @type {string}
// 	 */
// 	const DRAG_START = 'dragstart';
// 	/**
// 	 * An element is dropped on a valid drop target.
// 	 * @type {string}
// 	 */
// 	const DROP = 'drop';
// 	/**
// 	 * HTML5 media	The duration attribute has been updated.
// 	 * @type {string}
// 	 */
// 	const DURATION_CHANGE = 'durationchange';
// 	/**
// 	 * The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.
// 	 * @type {string}
// 	 */
// 	const EMPTIED = 'emptied';
// 	/**
// 	 * The speech recognition service has disconnected.
// 	 * @type {string}
// 	 */
// 	const END = 'end';
// 	/**
// 	 * Playback has stopped because the end of the media was reached.
// 	 * @type {string}
// 	 */
// 	const ENDED = 'ended';
// 	/**
// 	 * A SMIL animation element ends.
// 	 * @type {string}
// 	 */
// 	const END_EVENT = 'endEvent';
// 	/**
// 	 * A resource failed to load.
// 	 * @type {string}
// 	 */
// 	const ERROR = 'error';
// 	/**
// 	 * An element is about to receive focus (bubbles).
// 	 * @type {string}
// 	 */
// 	const FOCUS_IN_UNIMPLEMENTED = 'focusinUnimplemented';
// 	/**
// 	 * An element is about to lose focus (bubbles).
// 	 * @type {string}
// 	 */
// 	const FOCUS_OUT_UNIMPLEMENTED = 'focusoutUnimplemented';
// 	/**
// 	 * An element was turned to fullscreen mode or back to normal mode.
// 	 * @type {string}
// 	 */
// 	const FULLSCREEN_CHANGE = 'fullscreenchange';
// 	/***
// 	 * It was impossible to switch to fullscreen mode for technical reasons or because the permission was denied.
// 	 * @type {string}
// 	 */
// 	const FULLSCREEN_ERROR = 'fullscreenerror';
// 	/**
// 	 * Gamepad	A gamepad has been connected.
// 	 * @type {string}
// 	 */
// 	const GAMEPAD_CONNECTED = 'gamepadconnected';
// 	/**
// 	 * A gamepad has been disconnected.
// 	 * @type {string}
// 	 */
// 	const GAMEPAD_DISCONNECTED = 'gamepaddisconnected';
// 	/**
// 	 * Element receives pointer capture.
// 	 * @type {string}
// 	 */
// 	const GOT_POINTER_CAPTURE = 'gotpointercapture';
// 	/**
// 	 * The fragment identifier of the URL has changed (the part of the URL after the #).
// 	 * @type {string}
// 	 */
// 	const HASH_CHANGE = 'hashchange';
// 	/**
// 	 * Element lost pointer capture.
// 	 * @type {string}
// 	 */
// 	const LOST_POINTER_CAPTURE = 'lostpointercapture';
// 	/**
// 	 * The value of an element changes or the content of an element with the attribute contenteditable is modified.
// 	 * @type {string}
// 	 */
// 	const INPUT = 'input';
// 	/**
// 	 * A submittable element has been checked and doesn't satisfy its constraints.
// 	 * @type {string}
// 	 */
// 	const INVALID = 'invalid';
// 	/**
// 	 * A key is pressed down.
// 	 * @type {string}
// 	 */
// 	const KEY_DOWN = 'keydown';
// 	/**
// 	 * A key is pressed down and that key normally produces a character value (use input instead).
// 	 * @type {string}
// 	 */
// 	const KEY_PRESS = 'keypress';
// 	/**
// 	 * A key is released.
// 	 * @type {string}
// 	 */
// 	const KEY_UP = 'keyup';
// 	/**
// 	 * The user's preferred languages have changed.
// 	 * @type {string}
// 	 */
// 	const LANGUAGE_CHANGE = 'languagechange';
// 	/**
// 	 * The level attribute has been updated. (Battery status)
// 	 * @type {string}
// 	 */
// 	const LEVEL_CHANGE = 'levelchange';
// 	/**
// 	 *  resource and its dependent resources have finished loading.
// 	 * @type {string}
// 	 */
// 	const LOAD = 'load';
// 	/**
// 	 * The first frame of the media has finished loading.
// 	 * @type {string}
// 	 */
// 	const LOADED_DATA = 'loadeddata';
// 	/**
// 	 * The metadata has been loaded.
// 	 * @type {string}
// 	 */
// 	const LOADED_META_DATA = 'loadedmetadata';
// 	/**
// 	 * Progress has stopped (after "error", "abort" or "load" have been dispatched).
// 	 * @type {string}
// 	 */
// 	const LOAD_END = 'loadend';
// 	/**
// 	 * Progress has begun.
// 	 * @type {string}
// 	 */
// 	const LOAD_START = 'loadstart';
// 	/**
// 	 * The spoken utterance reaches a named SSML "mark" tag.
// 	 * @type {string}
// 	 */
// 	const MARK = 'mark';
// 	/**
// 	 * A message is received through a WebSocket.
// 	 * @type {string}
// 	 */
// 	const MESSAGE = 'message';
// 	/**
// 	 * A pointing device button (usually a mouse) is pressed on an element.
// 	 * @type {string}
// 	 */
// 	const MOUSE_DOWN = 'mousedown';
// 	/**
// 	 * A pointing device is moved onto the element that has the listener attached.
// 	 * @type {string}
// 	 */
// 	const MOUSE_ENTER = 'mouseenter';
// 	/**
// 	 * A pointing device is moved off the element that has the listener attached.
// 	 * @type {string}
// 	 */
// 	const MOUSE_LEAVE = 'mouseleave';
// 	/**
// 	 * A pointing device is moved over an element.
// 	 * @type {string}
// 	 */
// 	const MOUSE_MOVE = 'mousemove';
// 	/**
// 	 * A pointing device is moved off the element that has the listener attached or off one of its children.
// 	 * @type {string}
// 	 */
// 	const MOUSE_OUT = 'mouseout';
// 	/**
// 	 * A pointing device is moved onto the element that has the listener attached or onto one of its children.
// 	 * @type {string}
// 	 */
// 	const MOUSE_OVER = 'mouseover';
// 	/**
// 	 * A pointing device button is released over an element.
// 	 * @type {string}
// 	 */
// 	const MOUSE_UP = 'mouseup';
// 	/**
// 	 * The speech recognition service returns a final result with no significant recognition.
// 	 * @type {string}
// 	 */
// 	const NO_MATCH = 'nomatch';
// 	/**
// 	 * A system notification spawned by ServiceWorkerRegistration.showNotification() has been clicked.
// 	 * @type {string}
// 	 */
// 	const NOTIFICATION_CLICK = 'notificationclick';
// 	/**
// 	 * The manifest hadn't changed.
// 	 * @type {string}
// 	 */
// 	const NO_UPDATE = 'noupdate';
// 	/**
// 	 * The manifest was found to have become a 404 or 410 page, so the application cache is being deleted.
// 	 * @type {string}
// 	 */
// 	const OBSOLETE = 'obsolete';
// 	/**
// 	 * The browser has lost access to the network.
// 	 * @type {string}
// 	 */
// 	const OFFLINE = 'offline';
// 	/**
// 	 * The browser has gained access to the network (but particular websites might be unreachable).
// 	 * @type {string}
// 	 */
// 	const ONLINE = 'online';
// 	/**
// 	 * A WebSocket connection has been established.
// 	 * @type {string}
// 	 */
// 	const OPEN = 'open';
// 	/**
// 	 * The orientation of the device (portrait/landscape) has changed
// 	 * @type {string}
// 	 */
// 	const ORIENTATION_CHANGE = 'orientationchange';
// 	/**
// 	 * A session history entry is being traversed from.
// 	 * @type {string}
// 	 */
// 	const PAGE_HIDE = 'pagehide';
// 	/**
// 	 * A session history entry is being traversed to.
// 	 * @type {string}
// 	 */
// 	const PAGE_SHOW = 'pageshow';
// 	/**
// 	 * Data has been transferred from the system clipboard to the document.
// 	 * @type {string}
// 	 */
// 	const PASTE = 'paste';
// 	/**
// 	 * HTML5 media	Playback has been paused.
// 	 * @type {string}
// 	 */
// 	const PAUSE = 'pause';
// 	/**
// 	 * Pointer Events	The pointer is unlikely to produce any more events.
// 	 * @type {string}
// 	 */
// 	const POINTER_CANCEL = 'pointercancel';
// 	/**
// 	 * The pointer enters the active buttons state.
// 	 * @type {string}
// 	 */
// 	const POINTER_DOWN = 'pointerdown';
// 	/**
// 	 * Pointing device is moved inside the hit-testing boundary.
// 	 * @type {string}
// 	 */
// 	const POINTER_ENTER = 'pointerenter';
// 	/**
// 	 * Pointing device is moved out of the hit-testing boundary.
// 	 * @type {string}
// 	 */
// 	const POINTER_LEAVE = 'pointerleave';
// 	/**
// 	 * The pointer was locked or released.
// 	 * @type {string}
// 	 */
// 	const POINTER_LOCK_CHANGE = 'pointerlockchange';
// 	/**
// 	 * It was impossible to lock the pointer for technical reasons or because the permission was denied.
// 	 * @type {string}
// 	 */
// 	const POINTER_LOCK_ERROR = 'pointerlockerror';
// 	/**
// 	 * The pointer changed coordinates.
// 	 * @type {string}
// 	 */
// 	const POINTER_MOVE = 'pointermove';
// 	/**
// 	 * The pointing device moved out of hit-testing boundary or leaves detectable hover range.
// 	 * @type {string}
// 	 */
// 	const POINTER_OUT = 'pointerout';
// 	/**
// 	 * The pointing device is moved into the hit-testing boundary.
// 	 * @type {string}
// 	 */
// 	const POINTER_OVER = 'pointerover';
// 	/**
// 	 * The pointer leaves the active buttons state.
// 	 * @type {string}
// 	 */
// 	const POINTER_UP = 'pointerup';
// 	/**
// 	 * Playback has begun.
// 	 * @type {string}
// 	 */
// 	const PLAY = 'play';
// 	/**
// 	 * HTML5 media	Playback is ready to start after having been paused or delayed due to lack of data.
// 	 * @type {string}
// 	 */
// 	const PLAYING = 'playing';
// 	/**
// 	 * A session history entry is being navigated to (in certain cases).
// 	 * @type {string}
// 	 */
// 	const POP_STATE = 'popstate';
// 	/**
// 	 * XMLHttpRequess in progress.
// 	 * @type {string}
// 	 */
// 	const PROGRESS = 'progress';
// 	/**
// 	 * A Service Worker has received a push message.
// 	 * @type {string}
// 	 */
// 	const PUSH = 'push';
// 	/**
// 	 * A PushSubscription has expired.
// 	 * @type {string}
// 	 */
// 	const PUSH_SUBSCRIPTION_CHANGE = 'pushsubscriptionchange';
// 	/**
// 	 * The playback rate has changed.
// 	 * @type {string}
// 	 */
// 	const RATE_CHANGE = 'ratechange';
// 	/**
// 	 * The readyState attribute of a document has changed.
// 	 * @type {string}
// 	 */
// 	const READY_STATE_CHAHNGE = 'readystatechange';
// 	/**
// 	 * A SMIL animation element is repeated. (SVG)
// 	 * @type {string}
// 	 */
// 	const REPEAT_EVENT = 'repeatEvent';
// 	/**
// 	 * A form is reset.
// 	 * @type {string}
// 	 */
// 	const RESET = 'reset';
// 	/**
// 	 *
// 	 * @type {string}
// 	 */
// 	const RESIZE = 'resize';
// 	/**
// 	 * The browser's resource timing buffer is full.
// 	 * @type {string}
// 	 */
// 	const RESOURCE_TIMING_BUFFER_FULL = 'resourcetimingbufferfull';
// 	/**
// 	 * The speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app.
// 	 * @type {string}
// 	 */
// 	const RESULT = 'result';
// 	/**
// 	 * A paused utterance is resumed.
// 	 * @type {string}
// 	 */
// 	const RESUME = 'resume';
// 	/**
// 	 * The document view or an element has been scrolled.
// 	 * @type {string}
// 	 */
// 	const SCROLL = 'scroll';
// 	/**
// 	 * HTML5 media	A seek operation completed.
// 	 * @type {string}
// 	 */
// 	const SEEKED = 'seeked';
// 	/**
// 	 * A seek operation began. (HTML 5 media)
// 	 * @type {string}
// 	 */
// 	const SEEKING = 'seeking';
// 	/**
// 	 * Some text is being selected.
// 	 * @type {string}
// 	 */
// 	const SELECT = 'select';
// 	/**
// 	 * A selection just started.
// 	 * @type {string}
// 	 */
// 	const SELECT_START = 'selectstart';
// 	/**
// 	 * The selection in the document has been changed.
// 	 * @type {string}
// 	 */
// 	const SELECTION_CHANGE = 'selectionchange';
// 	/**
// 	 * A contextmenu event was fired on/bubbled to an element that has a contextmenu attribute
// 	 * @type {string}
// 	 */
// 	const SHOW = 'show';
// 	/**
// 	 * Any sound — recognisable speech or not — has stopped being detected.
// 	 * @type {string}
// 	 */
// 	const SOUND_END = 'soundend';
// 	/**
// 	 * Any sound — recognisable speech or not — has been detected.
// 	 * @type {string}
// 	 */
// 	const SOUND_START = 'soundstart';
// 	/**
// 	 * Speech recognised by the speech recognition service has stopped being detected.
// 	 * @type {string}
// 	 */
// 	const SPEECH_END = 'speechend';
// 	/**
// 	 * Sound that is recognised by the speech recognition service as speech has been detected.
// 	 * @type {string}
// 	 */
// 	const SPEECH_START = 'speechstart';
// 	/**
// 	 * The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.
// 	 * @type {string}
// 	 */
// 	const STALLED = 'stalled';
// 	/**
// 	 * The speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition
// 	 * @type {string}
// 	 */
// 	const START = 'start';
// 	/**
// 	 * A storage area (localStorage or sessionStorage) has changed.
// 	 * @type {string}
// 	 */
// 	const STORAGE = 'storage';
// 	/**
// 	 * A form is submitted.
// 	 * @type {string}
// 	 */
// 	const SUBMIT = 'submit';
// 	/**
// 	 * A request successfully completed.
// 	 * @type {string}
// 	 */
// 	const SUCCESS = 'success';
// 	/**
// 	 * Media data loading has been suspended. (HTML5 media)
// 	 * @type {string}
// 	 */
// 	const SUSPEND = 'suspend';
// 	/**
// 	 * Page loading has been stopped before the SVG was loaded.
// 	 * @type {string}
// 	 */
// 	const SVG_ABORT = 'SVGAbort';
// 	/**
// 	 * An error has occurred before the SVG was loaded.
// 	 * @type {string}
// 	 */
// 	const SVG_ERROR = 'SVGError';
// 	/**
// 	 * An SVG document has been loaded and parsed.
// 	 * @type {string}
// 	 */
// 	const SVG_LOAD = 'SVGLoad';
// 	/**
// 	 * An SVG document is being resized.
// 	 * @type {string}
// 	 */
// 	const SVG_RESIZE = 'SVGResize';
// 	/**
// 	 * An SVG document is being scrolled.
// 	 * @type {string}
// 	 */
// 	const SVG_SCROLL = 'SVGScroll';
// 	/**
// 	 * An SVG document has been removed from a window or frame.
// 	 * @type {string}
// 	 */
// 	const SVG_UNLOAD = 'SVGUnload';
// 	/**
// 	 * An SVG document is being zoomed.
// 	 * @type {string}
// 	 */
// 	const SVG_ZOOM = 'SVGZoom';
// 	/**
// 	 * A XMLHttpRequest time out
// 	 * @type {string}
// 	 */
// 	const TIME_OUT = 'timeout';
// 	/**
// 	 * The time indicated by the currentTime attribute has been updated.
// 	 * @type {string}
// 	 */
// 	const TIME_UPDATE = 'timeupdate';
// 	/**
// 	 * A touch point has been disrupted in an implementation-specific manners (too many touch points for example).
// 	 * @type {string}
// 	 */
// 	const TOUCH_CANCEL = 'touchcancel';
// 	/**
// 	 * A touch point is removed from the touch surface.
// 	 * @type {string}
// 	 */
// 	const TOUCH_END = 'touchend';
// 	/**
// 	 * A touch point is moved along the touch surface.
// 	 * @type {string}
// 	 */
// 	const TOUCH_MOVE = 'touchmove';
// 	/**
// 	 * A touch point is placed on the touch surface.
// 	 * @type {string}
// 	 */
// 	const TOUCH_START = 'touchstart';
// 	/**
// 	 * A CSS transition has completed.
// 	 * @type {string}
// 	 */
// 	const TRANSITION_END = 'transitionend';
// 	/**
// 	 * The document or a dependent resource is being unloaded.
// 	 * @type {string}
// 	 */
// 	const UNLOAD = 'unload';
// 	/**
// 	 * Offline	The resources listed in the manifest have been newly redownloaded, and the script can use swapCache() to switch to the new cache.
// 	 * @type {string}
// 	 */
// 	const UPDATE_READY = 'updateready';
// 	/**
// 	 * An attempt was made to open a database with a version number higher than its current version. A versionchange transaction has been created.
// 	 * @type {string}
// 	 */
// 	const UPGRADE_NEEDED = 'upgradeneeded';
// 	/**
// 	 * Fresh data is available from a proximity sensor (indicates whether the nearby object is near the device or not).
// 	 * @type {string}
// 	 */
// 	const USER_PROXIMITY = 'userproximity';
// 	/**
// 	 * The list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed (when the voiceschanged event fires.)
// 	 * @type {string}
// 	 */
// 	const VOICES_CHANGED = 'voiceschanged';
// 	/**
// 	 * A versionchange transaction completed.
// 	 * @type {string}
// 	 */
// 	const VERSION_CHANGE = 'versionchange';
// 	/**
// 	 * Page visibility	The content of a tab has become visible or has been hidden.
// 	 * @type {string}
// 	 */
// 	const VISIBILITY_CHANGE = 'visibilitychange';
// 	/**
// 	 * HTML5 media	The volume has changed.
// 	 * @type {string}
// 	 */
// 	const VOLUME_CHANGE = 'volumechange';
// 	/**
// 	 * A compatible VR device has been connected to the computer.
// 	 * @type {string}
// 	 */
// 	const VR_DISPLAY_CONNECTED = 'vrdisplayconnected';
// 	/**
// 	 * A compatible VR device has been disconnected from the computer.
// 	 * @type {string}
// 	 */
// 	const VR_DISPLAY_DISCONNECTED = 'vrdisplaydisconnected';
// 	/**
// 	 * The presenting state of a VR device has changed — i.e. from presenting to not presenting, or vice versa.
// 	 * @type {string}
// 	 */
// 	const VR_DISPLAY_PRESENT_CHANGE = 'vrdisplaypresentchange';
// 	/**
// 	 * HTML5 media	Playback has stopped because of a temporary lack of data.
// 	 * @type {string}
// 	 */
// 	const WAITING = 'waiting';
// 	/**
// 	 * A wheel button of a pointing device is rotated in any direction.
// 	 * @type {string}
// 	 */
// 	const WHEEL = 'wheel';
// }