$.fn.ot = function(){
	var my_text = {
		" ": "",
		0: "the empty one",
		1: "the risen one",
		2: "rises",
		3: "parts",
		4: "the fallen one",
		5: "falls",
		6: "reflects up in",
		7: "steps upon",
		8: "a reflection",
		9: "reflects upon",
		a: "out right under",
		b: "out all",
		c: "turn out",
		d: "out down",
		e: "",
		f: "a way far",
		g: "out gravity",
		h: "on all",
		i: "to out",
		j: "out gravity",
		k: "looking back",
		l: "all",
		m: "single'ness of all",
		n: "on",
		o: "besides",
		p: "out fallen",
		q: "out rising",
		r: "out now",
		s: "halves",
		t: "a way through",
		u: "on under",
		v: "gotten",
		w: "many'ness of all",
		x: "not a way",
		y: "a way got",
		z: "a way gravity"
	};
	var l = [];
	var l_height = 32, l_width;
	var line_height = 28;
	var container_width = 300, container_height = 240;
	var frame_rate = 10;
	var lerp_amt = 1; // 0 <= animating > 1 (not animating)
	var target_top = 0, cur_top = 0;
	var cur_code;
	var steps = [];
	var p = new Processing(this[0]);
	var pp; // off-screen buffer
	p.setup = function() {
		p.size(container_width, container_height, p.P3D);
		
		// off screen buffer
		pp = p.createGraphics(container_width, container_height, p.P3D);
		pp.beginDraw();
		pp.stroke(0);
		// set text height and preserve m-width
		pp.textSize(l_height);
		l_width = pp.textWidth('m');
		pp.endDraw();
		
		p.loop();
	}
	function direction(){
		return target_top === cur_top ? 0 : target_top > cur_top ? 1 : -1
	}
	function is_backspace(code){
		return code === 8 || code === 127
	}
	function my_animate(lerp_amt){
		pp.beginDraw();
		pp.background(255);
		pp.noFill();
		pp.rect(0,0,container_width, container_height);
		pp.fill(64);
		$.each(l, function(i, v){
			var line = cur_top - i;
			var line_lerp = direction() * pp.lerp(0, 1, lerp_amt);
			var x = l_width/2;
			var y = container_height - (line + line_lerp - 0.5) * line_height;
			var z = -(line + line_lerp - 0.5) * line_height/2;
			var v_text = my_text[v];
			pp.text(v + (v_text.length ? ' - ' : '') + my_text[v], x, y, z);
		})	
		pp.endDraw();
		p.image(pp.get(), 0, 0);
	}
	p.draw = function(){
		if(lerp_amt < 1){ // animating
			lerp_amt += 0.2;
			my_animate(lerp_amt);
		} else { // not animating
			if(direction() === 0){ // wasn't moving
			} else { // was moving
				var old_direction = direction();
				cur_top += old_direction;
				cur_code = null;
				if(old_direction < 0){ // was backspacing
					l.pop();
					my_animate(0);
				} else { // was going forward
				}
			}
			if(cur_code){
				if(is_backspace(cur_code)){
					if(target_top){
						target_top--;
						lerp_amt = 0;
					} else { // at first line
						cur_code = null; // just toss it
					}
				} else { // not backspace
					var c = String.fromCharCode(cur_code);
					if(c in my_text){
						l.push(c);
						target_top++;
						lerp_amt = 0;
					} else { // not in list
						cur_code = null; // just toss it
					}
				}
			} else { // no cur_code
				if(steps.length){
					cur_code = steps.shift();
				} else { // nothing to do
				}
			}
		}
	}		
	this.keypress(function(e){
		function get_char_code(){
			if (e.which == null) 
			return e.keyCode;    // old IE
			else if (e.which != 0 && e.charCode != 0)
			return e.which;	  // All others
			else {
				debugger // special key
				return false;
			}			
		}
		var char_code = get_char_code();
		steps.push(char_code);
	})

	p.setup();
	$.each("hello world".split(""), function(i, v){
		steps.push(v.charCodeAt());
	})
	return this;
}