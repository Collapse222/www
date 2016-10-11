$(document).ready(function() {
	
	var wwidth = $('.slide-cont').width();
	var slidew = wwidth/5;
	var curpos = 0;
	$('.slide').css('width', slidew+'px');
    
	$(window).resize(function () {
		wwidth = $('.slide-cont').width();
		slidew = wwidth/5;
		$('.slide').css('width', slidew+'px');
		$('.slide-cont').scrollLeft(wwidth*curpos);
	});
	
	$('.next').click(function () { ChangeSlide(1); });
	$('.prev').click(function () { ChangeSlide(-1); });
	
	function ChangeSlide(num) {
		curpos = curpos + num;
		if(curpos < 0) {
			curpos = 0;			
		} else if(curpos > 2) {
			curpos = 2;
		} else if(curpos == 0) {
			$('.prev img').attr('src', 'img/prev.png');
			$('.slide-cont').animate({scrollLeft: wwidth*curpos}, 500);
		} else if(curpos == 2) {
			$('.next img').attr('src', 'img/next.png');
			$('.slide-cont').animate({scrollLeft: wwidth*curpos}, 500);
		} else {
			$('.next img').attr('src', 'img/next-a.png');
			$('.prev img').attr('src', 'img/prev-a.png');
			$('.slide-cont').animate({scrollLeft: wwidth*curpos}, 500);
		}
	}
	
	$('.tel').mask('+7 (999) 999-99-99');
	
	$('.opencall').click(function() {
		$('.olb').show();
		$('.ordcall').show();
		$('.lb-1').show();
		wh = $(window).height();
		ww = $(window).width();
		lh = $('.ordcall').height();
		lw = $('.ordcall').width();
		th = (wh-lh)/2;
		tw = (ww-lw)/2;
		$('.ordcall').css('left', tw+'px');
		$('.ordcall').css('top', th+'px');
		return false;
	});
	
	$('body, html').click(function(e) {
		if($(e.target).closest(".ordcall").length==0) {
			$(".olb").css("display","none");
			$($('.olb').children()).each(function(){ $(this).hide(); });
			$('.lb-1').hide();
			$('.lb-99').hide();
		}
	});
	
	$('.closepop').click(function() {
		$(".olb").css("display","none");
		$($('.olb').children()).each(function(){ $(this).hide(); });
		$('.lb-1').hide();
		$('.lb-99').hide();
	});
	
	$('a').click(function () {
        
        var dw = $(document).width();
        
		elementClick = $(this).attr("href").replace("/", "");
        if(elementClick == '#b_services' && dw < 960) return false;
		destination = $(elementClick).offset().top;
		$("html, body").animate({scrollTop: destination}, 1000);
		return false;
	});
	
	$('form').submit(function () {
		var msg = $(this).serialize();
		var form = $(this);
		var formType = form.find('[name="type"]').val();
		$.ajax({
			type: 'POST',
			url: 'sendmail.php',
			data: msg,
			response: 'text',
			success: function(data) {
				if(data == 'ok') {
                    //яндекс метрика цели
                    switch (formType) {
                            case 'Get-Book':
                                yaCounter11137807.reachGoal('get9sovetov');
                                break;
                            case 'Order-Call':
                                yaCounter11137807.reachGoal('callme');
                                break;
                            case 'Join-Clean':
                                yaCounter11137807.reachGoal('getClean');
                                break;
                            case 'Get-Book-2':
                                yaCounter11137807.reachGoal('get5sovetovVrach');
                                break;
                            case 'Join-Prikus':
                                yaCounter11137807.reachGoal('getConsultationPrikus');
                                break;
                            case 'Join-Doctor':
                                yaCounter11137807.reachGoal('getConsultation');
                                break;
                            default:
                                break;
                    }
                    if(formType == 'Get-Book' || formType == 'Get-Book-2') {
                        $('.closepop').trigger('click');
                        $('.olb').show();
                        $('.ordcall').show();
                        $('.lb-98').show();
                        wh = $(window).height();
                        ww = $(window).width();
                        lh = $('.ordcall').height();
                        lw = $('.ordcall').width();
                        th = (wh-lh)/2;
                        tw = (ww-lw)/2;
                        $('.ordcall').css('left', tw+'px');
					    $('.ordcall').css('top', th+'px');
                    } else {
                        $('.closepop').trigger('click');
                        $('.olb').show();
                        $('.ordcall').show();
                        $('.lb-99').show();
                        wh = $(window).height();
                        ww = $(window).width();
                        lh = $('.ordcall').height();
                        lw = $('.ordcall').width();
                        th = (wh-lh)/2;
                        tw = (ww-lw)/2;
                        $('.ordcall').css('left', tw+'px');
					    $('.ordcall').css('top', th+'px');
                    }
                    if(form.find('input[name=type]').data('b') == '9') {
                        location.href = '/9sovetov.zip';
                    }
                    if(form.find('input[name=type]').data('b') == '5') {
                        location.href = '/5sovetov.zip';
                    }
				} else {
					var errors = data.split('|');
					if(errors[0] == '1') form.find('input[name=name]').css('border-color', 'red');
					if(errors[1] == '1') form.find('input[name=phone]').css('border-color', 'red');
					if(errors[2] == '1') form.find('input[name=mail]').css('border-color', 'red');
					if(errors[3] == '1') form.find('select[name=address]').css('border-color', 'red');
				}
			}
		});  
		
		return false;
	});
	
	$('input.input1').click(function () { $(this).css('border-color', 'rgb(63, 187, 239)'); });
	$('select.input1').click(function () { $(this).css('border-color', 'rgb(63, 187, 239)'); });
	
	
    $('.link-lb').click(function () {
		$('.spec-lb').show();
        $.get($(this).children('a').attr('href'), function(data) {
            $('#specblock').html(data);
            
            $('#specblock').find('button').click(function() {
                $('.spec-lb').hide();
                $('#specblock').html(' ');
            });
            
        });
        return false;
	});
    
    $('body, html').click(function(e) {
		if($(e.target).closest("#specblock").length==0) {
			$('.spec-lb').hide();
            $('#specblock').html(' ');
		}
	});
	
	$('ul.menu-list li:nth-child(2)').hover(function () {
		$(this).children('.services_t').show();
	}, function () {
		$(this).children('.services_t').hide();
	});

	$('ul.menu-footer li:nth-child(2)').hover(function () {
		$(this).children('.services_t').show();
	}, function () {
		$(this).children('.services_t').hide();
	});

jQuery( document ).ready(function() {
	jQuery('#scrollup img').mouseover( function(){
		jQuery( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		jQuery( this ).animate({opacity: 1},100);
	}).click( function(){
		window.scroll(0 ,0); 
		return false;
	});

	jQuery(window).scroll(function(){
		if ( jQuery(document).scrollTop() > 0 ) {
			jQuery('#scrollup').fadeIn('fast');
		} else {
			jQuery('#scrollup').fadeOut('fast');
		}
	});
});
    
	$('.autoplay').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		dots: true,
		arrows: false,
	});
	
	$('#slick-slide00').html('<img src="assets/templates/gs_karat/sot/16.jpg" alt="Подвальников Максим Сергеевич" /><div class="slide-info"><span class="f15 cr-b"><h3>Подвальников Максим Сергеевич</h3></span><br/><span class="f13">Врач-стоматолог ортодонт</span></div>');
    
	$('#slick-slide01').html('<img src="assets/templates/gs_karat/sot/14.jpg" alt="Цукманова Любовь Васильевна" /><div class="slide-info"><span class="f15 cr-b"><h3>Цукманова Любовь Васильевна</h3></span><br/><span class="f13">Врач-стоматолог терапевт</span></div>');
    
	$('#slick-slide02').html('<img src="assets/templates/gs_karat/sot/7.jpg" alt="Москалев Виталий Викторович" /><div class="slide-info"><span class="f15 cr-b"><h3>Москалев Виталий Викторович</h3></span><br/><span class="f13">Врач-стоматолог ортопед</span></div>');
    
	$('#slick-slide03').html('<img src="assets/templates/gs_karat/sot/17.jpg" alt="Анохина Виктория Александровна" /><div class="slide-info"><span class="f15 cr-b"><h3>Анохина Виктория Александровна</h3></span><br/><span class="f13">Врач-стоматолог пародонтолог</span></div>');
    
	$('#slick-slide04').html('<img src="assets/templates/gs_karat/sot/2.jpg" alt="Бондаренко Любовь Леонидовна" /><div class="slide-info"><span class="f15 cr-b"><h3>Бондаренко Любовь Леонидовна</h3></span><br/><span class="f13">Зубной врач</span></div>');
    
	$('#slick-slide05').html('<img src="assets/templates/gs_karat/sot/4.jpg" alt="Зайко Владимир Валентинович" /><div class="slide-info"><span class="f15 cr-b"><h3>Зайко Владимир Валентинович</h3></span><br/><span class="f13">Врач-стоматолог ортопед</span></div>');
    
	$('#slick-slide06').html('<img src="assets/templates/gs_karat/sot/8.jpg" alt="Вострикова Ирина Сергеевна" /><div class="slide-info"><span class="f15 cr-b"><h3>Вострикова Ирина Сергеевна</h3></span><br/><span class="f13">Гигиенист стоматологический</span></div>');
    
	$('#slick-slide07').html('<img src="assets/templates/gs_karat/sot/12.jpg" alt="Фоменко Юрий Юрьевич" /><div class="slide-info"><span class="f15 cr-b"><h3>Фоменко Юрий Юрьевич</h3></span><br/><span class="f13">Врач-стоматолог терапевт</span></div>');
    
	$('#slick-slide08').html('<img src="assets/templates/gs_karat/sot/15.jpg" alt="Подвальников Сергей Васильевич" /><div class="slide-info"><span class="f15 cr-b"><h3>Подвальников Сергей Васильевич</h3></span><br/><span class="f13">Главный врач, врач-стоматолог ортопед</span></div>');
    
	$('#slick-slide09').html('<img src="assets/templates/gs_karat/sot/6.jpg" alt="Воробьева Марина Михайловна" /><div class="slide-info"><span class="f15 cr-b"><h3>Воробьева Марина Михайловна</h3></span><br/><span class="f13">Врач-стоматолог ортодонт</span></div>');
    
	$('#slick-slide010').html('<img src="assets/templates/gs_karat/sot/19.jpg" alt="Кузнецова Светлана Михайловна" /><div class="slide-info"><span class="f15 cr-b"><h3>Кузнецова Светлана Михайловна</h3></span><br/><span class="f13">Врач-стоматолог терапевт</span></div>');
    
	$('#slick-slide011').html('<img src="assets/templates/gs_karat/sot/5.jpg" alt="Дунайцева Марина Владимировна" /><div class="slide-info"><span class="f15 cr-b"><h3>Дунайцева Марина Владимировна</h3></span><br/><span class="f13">Зубной врач</span></div>');
    
	$('#slick-slide012').html('<img src="assets/templates/gs_karat/sot/13.jpg" alt="Фроленко Людмила Александровна" /><div class="slide-info"><span class="f15 cr-b"><h3>Фроленко Людмила Александровна</h3></span><br/><span class="f13">Врач-стоматолог терапевт</span></div>');
    
	$('#slick-slide013').html('<img src="assets/templates/gs_karat/sot/3.jpg" alt="Жаринова Светлана Алексеевна" /><div class="slide-info"><span class="f15 cr-b"><h3>Жаринова Светлана Алексеевна</h3></span><br/><span class="f13">Врач-стоматолог терапевт</span></div>');
    
	$('#slick-slide014').html('<img src="assets/templates/gs_karat/sot/1.jpg" alt="Мишарина Инна Александровна" /><div class="slide-info"><span class="f15 cr-b"><h3>Мишарина Инна Александровна</h3></span><br/><span class="f13">Врач-стоматолог терапевт</span></div>');
    
	$('#slick-slide015').html('<img src="assets/templates/gs_karat/sot/20.jpg" alt="Степанченко Полина Николаевна" /><div class="slide-info"><span class="f15 cr-b"><h3>Степанченко Полина Николаевна</h3></span><br/><span class="f13">Врач-стоматолог терапевт</span></div>');
    
	
	$('.item a').vanillabox({
        grouping: true
    });
    
    $('.autoplay').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log($('ul.slick-dots li').length+'|'+nextSlide);
        if(nextSlide <= 11)
            $('.dots-wrap').scrollLeft((nextSlide-3)*120);
        else
            $('.dots-wrap').scrollLeft(8*120);
    });
	
        $("ul.slick-dots").css('width','10000px').wrap("<div class='dots-wrap'></div>");
	
});