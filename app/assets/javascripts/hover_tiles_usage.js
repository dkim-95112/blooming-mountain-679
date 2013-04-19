$(document).ready(function(){
	
	var my_image_list = [];
	for(var i = 0; i < 17; i++){
		my_image_list.push('/assets/samples/jquery_plugin/images-' + i + '.jpeg');
	}
	var $my_hover_tiles = $('#my-hover-tiles')
	.hover_tiles({
		image_list: my_image_list,
	});
	
	window.make_horizontal = function(my_button){
		$my_hover_tiles.hover_tiles('options', {
			container_css: {width:'40px', position:'', 'float':'left'},
			animate_css: {
				over:{width:'122px', top:'100px'},
				left:{width:'66px', top:'50px'},
				right:{width:'66px', top:'50px'},
				other:{width:'40px', top:'0px', left:'0px'},
				duration:100
			},
		})
		my_button.innerHTML = 'make vertical';
		$(my_button).one('click', function(e){
			make_vertical(my_button);
			return false;
		})
	}
	window.make_vertical = function(my_button){
		$my_hover_tiles.hover_tiles('options', {
			container_css: {width:'40px', position:'relative', 'float':''},
			animate_css: {
				over:{width:'122px', left:'100px'},
				left:{width:'66px', left:'50px'},
				right:{width:'66px', left:'50px'},
				other:{width:'40px', left:'0px', top:'0px'},
				duration: 100
			}
		})
		my_button.innerHTML = 'make horizontal';
		$(my_button).one('click', function(e){
			make_horizontal(my_button);
			return false;
		})
	}
	make_horizontal($('#my-widget button')[0]);
})
