(function(){
	var options = {
		image_list: [],
		container_css: {},
		animate_css: {
			over: {},
			left: {},
			right: {},
			other: {},
			duration: 100,
		}
	};
	var tile_handlers = {
		mouseenter:function(){
			var css = options.animate_css;
			$(this).removeClass('left right').addClass('over')
			.find('img.helper').animate(css.over, css.duration).end()
			.prev().trigger('_on_left').prevAll().trigger('_on_other').end().end()
			.next().trigger('_on_right').nextAll().trigger('_on_other').end().end();
			return false;
		},
		_on_right:function(){
			var css = options.animate_css;
			$(this).removeClass('over left').addClass('right')
			.find('img.helper').animate(css.right, css.duration);
			return false;
		},
		_on_left:function(){
			var css = options.animate_css;
			$(this).removeClass('over right').addClass('left')
			.find('img.helper').animate(css.left, css.duration);
			return false;
		},
		_on_other:function(){
			var css = options.animate_css;
			$(this).removeClass('over left right')
			.find('img.helper').animate(css.other, css.duration);
			return false;
		}
	};
	var method_list = {
		options: function(o){
			$.extend(options, o);
			return this
			.children().removeClass('over left right').css(options.container_css)
			.find('img.helper').css(options.animate_css.other).end().end();
		}
	};
	function hover_tile_init(){
		var my_tile_list = $.map(options.image_list, function(v, i){
			return '<div><div style="position:relative">' +
			  '<img style="display:block; position:relative; width:100%" src="' + v + '"/>' +
			  '<img class="helper" style="display:block; position:absolute" src="' + v + '"/>' +
			'</div></div>';
		});
		return this.append(my_tile_list)
		.children().removeClass('over left right').css(options.container_css)
		.on(tile_handlers)
		.find('img.helper').css(options.animate_css.other).end().end();
	}
	$.fn.hover_tiles = function(method_name){ // plugin convention
		if(method_name){
			var args = Array.prototype.slice.call(arguments, 1);
			if(typeof method_name === 'object'){ 
				$.extend(true, options, method_name);
				return hover_tile_init.apply(this, args);
			} else {  // argument not object
				if(method_name in method_list){
					return method_list[method_name].apply(this, args);
				} else {
					$.error('hover_tile method(' +  method_name + ') not found.');					
				}
			}
		} else { // no arguments
			return hover_tile_init.apply(this);
		}
	};
})()