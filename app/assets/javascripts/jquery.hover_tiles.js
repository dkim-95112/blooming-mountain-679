$.fn.hovertiles = function (
	options
) {
	var o = this . o = {}
	$ .extend ( o , options )

	o .image_list && (
		o .$this = this .empty () . append (
			$ .map ( o .image_list , function (
				v
			){
				return $( '<div/>' ) .append (
					$( '<div style="position:relative"/>' ) .append (
						o . $img = $ ( '<img/>' ) .attr ({
							src : v
						}) . css ({
							display : 'block' , position : 'relative' , width : '100%' 
						}) . css (
							o . css_animate . other
						) ,
						( o .$helper = o . $img .clone ()) . css ({
							position : 'absolute'
						}) .addClass (
							'helper'
						) // css
					) // append div relative
				) // append
			}) // map
		) // append widget
	) // && image_list
	return o . $this .off (
		'.hovertile'
	) . on (
		'mouseenter.hovertile' , '> div' , function ( // delegate to parent div
			e
		){
			e . preventDefault () ;
			o . $left = $( e . currentTarget ) . prev ( 'div' ) . triggerHandler ( 'onLeft' )
			o . $left && o . $left .prevAll ( 'div' ) . triggerHandler ( 'onOther' )
			
			o .$right = $( e . currentTarget ) .next ( 'div' ) . triggerHandler ( 'onRight' )
			o . $right && o .$right .nextAll ( 'div' ) . triggerHandler ( 'onOther' )
			
			o . $target = $( e . currentTarget ) . triggerHandler ( 'onOver' )
		}
	) . find ( '> div ' ) . off (
		'.hovertile'
	) . on ({
		'onLeft.hovertile' : function (
		){
			return $( this ) . removeClass ( 'right over other' ) . find (
				'img.helper'
			) .animate (
				o . css_animate . left , o .css_animate .duration
			) . end () . addClass (
				'left'
			)
		} ,
		'onRight.hovertile' : function (
		){
			return $( this ) . removeClass ( 'left over other' ) . find (
				'img.helper'
			) . animate (
				o . css_animate . right , o .css_animate .duration
			) . end () . addClass (
				'right'
			)
		} ,
 		'onOther.hovertile' : function (
 		){
 			return $ ( this ) . removeClass ( 'left right over' ) . find (
 				'img.helper'
 			) . animate (
 				o . css_animate . other , o .css_animate .duration
 			) . end () . addClass (
 				'other'
 			)
 		} ,
 		'onOver.hovertile' : function (
 		){
 			return $ ( this ) .removeClass ( 'left right other' ) . find (
 				'img.helper' 
 			) . animate (
 				o . css_animate .over , o .css_animate .duration
 			) . end () . addClass (
 				'over'
 			)
 		}
 	}) . css (
		o . container_css
	) // css
} // $.fn.hovertiles
