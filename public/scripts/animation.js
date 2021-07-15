$(window).scroll(function() {
    if ($(window).scrollTop() >= 0) {
        $('.nav-menu ul li:nth-child(1) a').css('border-left', 'solid 4px white');
    } else {
        $('.nav-menu ul li:nth-child(1) a').css('border-left', 'solid 2px #777');
    }

    if ($(window).scrollTop() >= $('#aboutSection').height() / 1.5) {
        $('.nav-menu ul li:nth-child(2) a').css('border-left', 'solid 4px white');
        $('.nav-menu ul li:nth-child(1) a').css('border-left', 'solid 2px #777');
    } else {
        $('.nav-menu ul li:nth-child(2) a').css('border-left', 'solid 2px #777');
    }

    if ($(window).scrollTop() >= $('#projectSection').height() * 1.5) {
        $('.nav-menu ul li:nth-child(3) a').css('border-left', 'solid 4px white');
        $('.nav-menu ul li:nth-child(2) a').css('border-left', 'solid 2px #777');
    } else {
        $('.nav-menu ul li:nth-child(3) a').css('border-left', 'solid 2px #777');
    }

    if ($(window).scrollTop() >= $('#contactSection').height() * 3.2) {
        $('.nav-menu ul li:nth-child(4) a').css('border-left', 'solid 4px white');
        $('.nav-menu ul li:nth-child(3) a').css('border-left', 'solid 2px #777');
    } else {
        $('.nav-menu ul li:nth-child(4) a').css('border-left', 'solid 2px #777');
    }

    //After scrolling 100px from the top...
    if ($(window).scrollTop() >= 200) {
        $('.arrow').fadeOut('normal', function() {});
        //Otherwise remove inline styles and thereby revert to original stying
    } else {
        $('.arrow').fadeIn('normal', function() {});
    }
});

$('.nav-menu ul li a').hover(
    function() {
        $(this).css('border-left', 'solid 4px white');
    },
    function() {
        $(this).css('border-left', 'solid 2px #777');
    }
);

function scrollHome() {
    $('html, body').animate(
        { scrollTop: $('#homepage').offset().top - $(window).height() / 4.5 },
        0
    );
}

function scrollAbout() {
    $('html, body').animate(
        { scrollTop: $('.about-text').offset().top - $(window).height() / 4.5 },
        0
    );
}

function scrollProject() {
    $('html, body').animate(
        { scrollTop: $('#projectSection').offset().top - $(window).height() / 10 },
        0
    );
}

function scrollContact() {
    $('html, body').animate(
        { scrollTop: $('#contactSection').offset().top - $(window).height() / 10 },
        0
    );
}

function show() {
    console.log('Contact Form Sent');
    $('.sent').css('display', 'block');
}

function isInViewport(node) {
    var rect = node.getBoundingClientRect();
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();
    $('.parallax').each(function(index, element) {
        var initY = $(this).offset().top;
        var height = $(this).height();
        var endY = initY + $(this).height();

        // Check if the element is in the viewport.
        var visible = isInViewport(this);
        if (visible) {
            var diff = scrolled - initY;
            var ratio = Math.round(diff / height * 100);
            $(this).css('background-position', 'center ' + parseInt(-(ratio * 1.5)) + 'px');
        }
    });
});

// Background Rotation
var $background = $('#particles-js');
var $particleCanvas = $('.particles-js-canvas-el');

$(window).on('scroll', function() {
    var top = $(window).scrollTop() / 60;
    $background.css('transform', 'rotate(' + top + 'deg)');
});

//About Section Animation Trigger

var waypoints = $('#progress-bar-container').waypoint({
    handler: function() {
        var delay = 0;
        $('#progress-bar-container .progressBar').each(function() {
            var $li = $(this);
            var $ybar = $('.yellow-bar');
            setTimeout(function(direction) {
                $li.addClass('progress-bar-in');
                $ybar.addClass('fill-bar');
				$('.about-image').addClass('about-image-in');
            }, (delay += 150));
        });
    },
    offset: '90%'
});

var waypoints = $('.text-container').waypoint({
    handler: function() {
        var delay = 0;
        $('.text-container').each(function() {
            setTimeout(function(direction) {
				$('.text-container h3').addClass('about-text-in');
				$('.about-para').addClass('about-text-para-in');
            }, (delay += 150)); 
        });
    },
    offset: '90%'
});



// Project Animation Trigger
var waypoints = $('.project-container').waypoint({
    handler: function() {
        console.log('hit project');
        var delay = 0;
        $('.project-container .card').each(function() {
            var $li = $(this);
            var $projectTitle = $('.project-section h3');
            var $projectLine = $('.project-section h3 div');
            setTimeout(function(direction) {
                $li.addClass('card-fadein');
                $projectTitle.addClass('projectTitle-in');
				$('.project-section h3 div').addClass('project-line-in');
            }, (delay += 100));
        });
    },
    offset: '90%'
});