<!-- supersized -->	
			jQuery(function($){
				
				$.supersized({
				
					// Functionality
					slide_interval          :   5000,		// Length between transitions
					transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	700,		// Speed of transition
															   
					// Components							
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					slides 					:  	[			// Slideshow Images
														{image : 'img/pixel07.jpg', title : '<h1>Cover und Booklets</h1><br>Cover- und Bookletgestaltung vieler Preston Sturges Klassiker, im Auftrag von Cine Qua Non.'},
														{image : 'img/pixel06.jpg', title : '<h1>Corporate Design und Illustration</h1><br>Für die Sexualpädagogin Daniela Kühling durfte ich ein kleines Corporate Design entwickeln, Illustrationen und eine Website erstellen sowie diverse Drucksachen gestalten.'},
														{image : 'img/pixel05.jpg', title : '<h1>Illustration und Flyergestaltung</h1><br>Illustration und Gestaltung eines Flyers für die Schönwalde Apotheke im Auftrag der Werbeagentur Sunshine Marketing.'},
														{image : 'img/pixel04.jpg', title : '<h1>Corporate Design</h1><br>DJ und Ostgut Ton Artist Marcel Fengler habe ich bei der Gründung seines Labels, mit der Entwicklung eines Logos, dem Design des Plattencovers und weiteren Drucksachen, zur Seite gestanden.'},
														{image : 'img/pixel03.jpg', title : '<h1>Katalogdesign</h1><br>Im Auftrag der Omstudios Berlin durfte ich einen Katalog für den Lang & Laufladen gestalten.'},
														{image : 'img/pixel02.jpg', title : '<h1>Flyer- und Logodesign</h1><br>Logoentwicklung und Gestaltung diverser Flyer für die Stuttgarter Partyreihe POPOFF.'},
														{image : 'img/pixel01.jpg', title : '<h1>Flyer- und Logodesign</h1><br>Für den KRAWALLSCHACHTELCLUB entwickelte ich ein Logo und gestalte zahlreiche Flyer.'}
												]
					
				});
		    });
		    