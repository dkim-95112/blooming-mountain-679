$ ( document ) .ready ( function (
) {
	var o = {}
	o .image_list = []
	for (
		var i = 0 ; i < 17 ; i++
	) {
		o .image_list .push( 
			'/assets/samples/jquery_plugin/images-' + i + '.jpeg'
		)
	}

	window . make_horizontal = function (
		my_button
	){
		$ ( '#my-hover-tiles' ) .hovertiles ( {
			image_list : o .image_list ,
			container_css : {
				width : 40 , position : '', 'float' : 'left'
			} ,
			css_animate : {
				over : {width : 122 , top : 100 },
				left : {width : 66 , top : 50 },
				right : {width : 66 , top : 50 },
				other : {width : 40 , top : '0px' , left : '0px' },
				duration : 100
			}
		});

		my_button.innerHTML = 'make vertical';
		$(my_button).one('click', function(e){
			make_vertical(my_button);
			return false;
		})
	}

	window . make_vertical = function (
		my_button
	){
		$ ( '#my-hover-tiles' ) .hovertiles ({
			image_list : o .image_list ,
			container_css : {
				width : 40, position : 'relative', 'float' : 'none'
			} ,
			css_animate : {
				over : {width : 122, left : 100 , top : 0 },
				left : {width : 66, left : 50 , top : 0},
				right : {width : 66, left : 50 , top : 0},
				other : {width : 40, left : 0, top : 0},
				duration :  100
			}
		})

		my_button.innerHTML = 'make horizontal';
		$(my_button).one('click', function(e){
			make_horizontal(my_button);
			return false;
		})
	}
	make_horizontal($('#my-widget button')[0]);
}) // doc ready
