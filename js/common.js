$(document).ready(function() {

	function heightDetect() {
		$('.main_head').css('height', $(window).height())
	};

	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});

	$('.popup_content').magnificPopup({type:'inline', midClick: true});

	$('#service .container').each(function(i) {
		$(this).find('a').attr('href', '#post_' + i);
		$(this).find('.post_descr').attr('id', 'post_' + i);
		$(this).find('img').attr('alt', 'Post ' + (i+1));
		$(this).find('img').attr('src', 'img/section1/post' + (i+1) + '.jpg');
	});

	$('#blog .container').each(function(i) {
		$(this).find('a').attr('href', '#blog_' + i);
		$(this).find('.post_descr').attr('id', 'blog_' + i);
		$(this).find('img').attr('alt', 'Post ' + (i+1));
		$(this).find('img').attr('src', 'img/section4/post' + (i+1) + '.jpg');
	});

	$('.gallery_item').each(function(i) {
		$(this).find('a').attr('href', '#work_' + i);
		$(this).find('.post_descr').attr('id', 'work_' + i);
		$(this).find('img').attr('alt', 'Work ' + (i+1));
		$(this).find('img').attr('src', 'img/section2/img' + (i+1) + '.jpg');
	});


	$('#gallery_grid').mixItUp();

	$('#works li').click(function() {
		$('#works li').removeClass('active');
		$(this).addClass('active');
	});

	// $('.main_head li').click(function() {
	// 	$('#works li').removeClass('active');
	// 	$(this).addClass('active');
	// });

	$('input, select, textarea').jqBootstrapValidation();


	$('.menu ul a').mPageScroll2id();
	$('.arrow').mPageScroll2id();

/*	Скрипт для label на форме*/

$('#name').focus(function () {
	$('#hint').hide(500);
});

$('#name').blur(function () {
	if ($(this).val().trim() === '') {
		$('#hint').show(500);
	}
});


$('#affiliation').focus(function () {
	$('#hint2').hide(500);
});

$('#affiliation').blur(function () {
	if ($(this).val().trim() === '') {
		$('#hint2').show(500);
	}
});

$('#email').focus(function () {
	$('#hint3').hide(500);
});

$('#email').blur(function () {
	if ($(this).val().trim() === '') {
		$('#hint3').show(500);
	}
});

$('#message').focus(function () {
	$('#hint4').hide(500);
});

$('#message').blur(function () {
	if ($(this).val().trim() === '') {
		$('#hint4').show(500);
	}
});

/*	Скрипт для label на форме*/

$('#name2').focus(function () {
	$('#hint_2').hide(500);
});

$('#name2').blur(function () {
	if ($(this).val().trim() === '') {
		$('#hint_2').show(500);
	}
});


$('#affiliation2').focus(function () {
	$('#hint2_2').hide(500);
});

$('#affiliation2').blur(function () {
	if ($(this).val().trim() === '') {
		$('#hint2_2').show(500);
	}
});

$('#email2').focus(function () {
	$('#hint3_2').hide(500);
});

$('#email2').blur(function () {
	if ($(this).val().trim() === '') {
		$('#hint3_2').show(500);
	}
});

$('#message2').focus(function () {
	$('#hint4_2').hide(500);
});

$('#message2').blur(function () {
	if ($(this).val().trim() === '') {
		$('#hint4_2').show(500);
	}
});


$(".slider").owlCarousel({
	loop:true,
	autoplay:true,
	autoplayTimeout:4000,
	autoplayHoverPause:true,
	items : 1
});

});