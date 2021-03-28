var textbox;
var isCaps = false;
var lowercase = document.getElementsByClassName('lowercase-row');
var uppercase = document.getElementsByClassName('uppercase-row');
var event = new Event('change');
var keyboards = document.getElementsByClassName('virtual-keyboard');
var textareas = document.getElementsByTagName('textarea');
var inputs = document.getElementsByTagName('input');

function typeVirtualKeyboardKey(key) {

	if (textbox != null && key != 'Caps' && key != 'Shift') {
		if (key == 'Backspace') {
			textbox.value = textbox.value.substring(0, textbox.value.length - 1);
		} else if (key == 'Clear') {
			textbox.value = '';
		} else if (key == 'Tab') {
			textbox.value += '    ';
		} else if (key == 'Enter') {
			textbox.value += '\r';
		} else {
			if (key == '&lt;') {
				textbox.value += '<';
			} else if (key == '&gt;') {
				textbox.value += '>';
			} else if (key == '&amp;') {
				textbox.value += '&';
			} else {
				textbox.value += key;
			}
		}
	}

	if (key == 'Caps') {
			isCaps = !isCaps;
	}

	if (!isCaps) {
		for (row of lowercase) {
			row.style.display = 'block';
		}
		for (row of uppercase) {
			row.style.display = 'none';
		}
	} else {
		for (row of lowercase) {
			row.style.display = 'none';
		}
		for (row of uppercase) {
			row.style.display = 'block';
		}
	}

	if (key == 'Shift') {
		for (row of lowercase) {
			row.style.display = 'none';
		}
		for (row of uppercase) {
			row.style.display = 'block';
		}
	}
	if (textbox != null) {
		window.setTimeout(function ()
        {   
            textbox.dispatchEvent(event);
            textbox.focus();
		}, 0);
	}
	
}


function selectTextbox(newTextbox) {
	textbox = newTextbox;
}

for (keyboard of keyboards) {
	keyboard.innerHTML = '<div class="lowercase-row"> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">`</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">1</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">2</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">3</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">4</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">5</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">6</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">7</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">8</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">9</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">0</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">-</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">=</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 100px;">Backspace</span> </div> <div class="uppercase-row"> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">~</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">!</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">@</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">#</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">$</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">%</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">^</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">&</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">*</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">(</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">)</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">_</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">+</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 100px;">Clear</span> </div><div class="lowercase-row"> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 55px;">Tab</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">q</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">w</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">e</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">r</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">t</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">y</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">u</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">i</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">o</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">p</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">[</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">]</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 75px;">\\</span> </div> <div class="uppercase-row"> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 55px;">Tab</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">Q</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">W</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">E</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">R</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">T</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">Y</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">U</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">I</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">O</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">P</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">{</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">}</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 75px;">|</span> </div><div class="lowercase-row"> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 65px;">Caps</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">a</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">s</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">d</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">f</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">g</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">h</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">j</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">k</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">l</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">;</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">\'</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 100px;">Enter</span> </div> <div class="uppercase-row"> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 65px;">Caps</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">A</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">S</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">D</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">F</span><span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">G</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">H</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">J</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">K</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">L</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">:</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">"</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 100px;">Enter</span> </div><div class="lowercase-row"> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 85px;">Shift</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">z</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">x</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">c</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">v</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">b</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">n</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">m</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">,</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">.</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">/</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 115px;">Shift</span> </div> <div class="uppercase-row"> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 85px;">Shift</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">Z</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">X</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">C</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">V</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">B</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">N</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">M</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)"><</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">></span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)">?</span> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 115px;">Shift</span> </div> <span class="key" onmousedown="typeVirtualKeyboardKey(this.innerHTML)" style="width: 240px; display: block; margin: 0 auto; margin-top: 5px;"> </span>';
}

for (textarea of textareas) {
	textarea.setAttribute('onclick', 'selectTextbox(this)');
}

for (input of inputs) {
	if (input.type == 'text' || input.type == 'password') {
		input.setAttribute('onclick', 'selectTextbox(this)');
	}
}