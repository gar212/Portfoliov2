// Get modal element
var modal = document.getElementById('simpleModal');
// Get Close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

var $owl = $('.owl-carousel');

// Function to open modal
function openModal(){
	modal.style.display = 'flex';
	$owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
	$owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-hidden');
}
	
function closeModal(){
	$(modal).fadeOut();
}

// function to close modal if outside click
function outsideClick(e){
	if (e.target == modal){
		$(modal).fadeOut();
	}
}

var modalText = {
	reddew: {
		title: "Red Dew",
		desc: "Graphic Design Company Intro Concept. Site is written in HTML, CSS3, and Javascript",
		available: false,
		link: "https://red-dew.herokuapp.com/",
		images: ['reddew1.jpg', 'reddew2.jpg', 'reddew3.jpg']
	},
	persusvincere: {
		title: "Persus Vincere",
		desc: "Architect Design Company Intro Concept. Site is written in HTML, CSS3, and Javascript",
		available: false,
		link: "https://persusvincere.herokuapp.com/",
		images: ['persus1.jpg', 'persus2.jpg', 'persus3.jpg']
	},
	
	annex: {
		title: "Annex",
		desc: "Share your favourite places on Earth. Features user authentication. Create, delete, and update posts. Site uses MongoDB and written in Node.js",
		available: false,
		link: "https://gar-annex.herokuapp.com/campgrounds",
		images: ['annex1.jpg', 'annex2.jpg']
	},
	ruminate: {
		title: "Ruminate",
		desc: "Wine Review and information app. Currently in progress",
		available: false,
		link: "https://www.behance.net/gallery/58816171/Ruminate-Wine-InfoReview-App-Concept",
		images: ['ruminate1.jpg', 'ruminate2.jpg']
	},
	levelupworks: {
		title: "Level Up Works",
		desc: `Redesign of the Level Up Works website. Uses MongoDB, Express, React, NodeJS
		Design was created by UX/UI Designers. I was tasked to develop the website and add RESTful API functionality`,
		available: false,
		link: "https://levelupworksv3.herokuapp.com/",
		images: ['levelupworks1.jpg', 'levelupworks2.jpg']
	},
	fgc: {
		title: "Communication Design - FGC",
		desc: "General Graphic Designs.",
		available: true,
		link: "https://www.behance.net/gallery/58362571/Communication-Design-FGC",
		images: ['fgc1.jpg', 'fgc2.jpg']
	},
};

function addListeners() {
	document.querySelectorAll("button").forEach(function(elem) {
		elem.addEventListener("click", function() {
			openModal();
			console.log(event.target.id);
			fillModal(event.target.id);

		});
	});
}

addListeners();

function fillModal(id) {
	$('.modal-header').text(modalText[id].title);
	$('.modal-info').text(modalText[id].desc);
	
	if (modalText[id].available == true){
		$('.view-site').attr('href', modalText[id].link);
		$('.view-site').text("View Site");
	} else {
		$('.view-site').attr('href', modalText[id].link);
		$('.view-site').text("Unavailable");
		$('.view-site').removeAttr("href");
	}
	$owl.trigger('destroy.owl.carousel');
	
	var content = "";
		for (let i = 0; i < modalText[id].images.length; i++){
			content += '<div class="item"><img src="stylesheets/img/'+ event.target.id + "/" + modalText[id].images[i] +'"/></div>';
		}
	
	$owl.html(content);
	$owl.owlCarousel({
		items:1,
		margin:10,
		nav:true,
		dots: false,
		autoplay: true,
		autoplayTimeout:2500,
		autoplayHoverPause:true,
		loop: true
	});
	
	$owl.trigger('refresh.owl.stage');
}



//  function fillModal(id) {
//     $('#modal .title').text(modalText[id].title);
//     $('#modal .detail').text(modalText[id].detail);
//     $('#modal .tag').text(modalText[id].tag);
//     if (modalText[id].link) $('#modal .button').addClass('visible')
//                                                .parent()
//                                                .attr('href', modalText[id].link)

//     $.each($('#modal li'), function(index, value ) {
//       $(this).text(modalText[id].bullets[index]);
//     });
//     $.each($('#modal .slide'), function(index, value) {
//       $(this).css({
//         background: "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
//         backgroundSize: 'cover'
//       });
              
//     });
//   }
// })

// wrapper.addEventListener('click', (event) => {
//   var isButton = event.target.nodeName === 'BUTTON';
//   if (!isButton) {
//     return;
//   }
// this.addEventListener('click', openModal);
//   console.log(event.target.id);
// });