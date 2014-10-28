$(function() {
	'use strict';
	$('body').css('opacity', '0').fadeTo(1500, 1,'swing');

	var $introLine = $('.hero-unit article');

	// $introLine.eq(0).css('opacity', '0.2').fadeTo(1350, 1,'swing');
	// $introLine.eq(1).css('opacity', '0.2').delay(1000).fadeTo(1350, 1,'swing');
	// $introLine.eq(2).css('opacity', '0.2').delay(2000).fadeTo(1350, 1,'swing');
	// $introLine.eq(3).css('opacity', '0.2').delay(3000).fadeTo(1350, 1,'swing');

	// $('.hero-unit article').eq(1).delay(5000).addClass('visible');
	// $('.hero-unit article').eq(2).delay(7000).addClass('visible');
	// $('.hero-unit article').eq(2).delay(9000).addClass('visible');

	// $('.hero-unit article').eq(1).hide().delay(1500).fadeIn(1000);
	// $('.hero-unit article').eq(2).hide().delay(2500).fadeIn(1000);
	// $('.hero-unit article').eq(3).hide().delay(3500).fadeIn(1000);
	$(".hero-unit article").fitText(1.5, {
		minFontSize: "65px"
	});
	$('nav').delay(2000).addClass('visible');
});


