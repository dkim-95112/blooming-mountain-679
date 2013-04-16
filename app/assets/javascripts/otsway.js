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
		e: "emerges",
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
	var lerp_amt = 0;
	var p = new Processing(this[0]);
	var pp; // off-screen buffer
	var letter = function(c){
		this.c = c;
		this.next_line_number = 0.25;
		this.draw = function(){
			var animated_line_number = pp.lerp(this.next_line_number - 1, this.next_line_number, lerp_amt);
			var x = l_width/2;
			var y = container_height - animated_line_number * line_height;
			var z = - animated_line_number * line_height/2;
			pp.text(this.c + (this.c == " " ? "" : " - ") + my_text[this.c], x, y, z);
			//p.text(this.c, x, y, z);
		}
		return this;
	};
	p.setup = function() {
		p.size(container_width, container_height, p.P3D);
		pp = p.createGraphics(container_width, container_height, p.P3D);
		pp.beginDraw();
		pp.stroke(0);
		pp.textSize(l_height);
		l_width = pp.textWidth('m');
		pp.endDraw();
		p.loop();
	}
	p.draw = function(){
		if(lerp_amt < 1){
			lerp_amt += 0.1;
		}
		pp.beginDraw();
		pp.background(255);
		pp.noFill();
		pp.rect(0,0,container_width, container_height);
		pp.fill(64);
		$.each(l, function(i, v){
			v.draw();
		})
		pp.endDraw();
		p.image(pp.get(), 0, 0);
	}		
	function handle_char_code(c){
		if(c in my_text){
			$.each(l, function(i, v){
				v.next_line_number++;
			})
			l.push(new letter(c));
			if(l.length > 12){
				l.shift();
			}
			lerp_amt = 0;
		}		
	}
	this.keypress(function(e){
		function get_char_code(){
			if (e.which == null) 
			return String.fromCharCode(e.keyCode);    // old IE
			else if (e.which != 0 && e.charCode != 0)
			return String.fromCharCode(e.which);	  // All others
			else {
				debugger // special key
				return false;
			}			
		}
		var c = get_char_code();
		c && handle_char_code(c);
	})

	p.setup();
	$.each("hello world".split(""), function(i, v){
		handle_char_code(v);
	})
	return this;
}