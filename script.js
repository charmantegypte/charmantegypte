// Retrieve the saved language from local storage or default to 'en'
var savedLanguage = localStorage.getItem("userLanguage") || "en";

i18next.init(
  {
    lng: savedLanguage,
    resources: {
      en: {
        translation: {
          title: "Charming Egypt",
          about:
            "Welcome to Charming Egypt !  Discover the captivating beauty of Cairo through my photos.  My name is Baher Sabry, I have been working in the field of tourism in Egypt for ten years or more, I am French-speaking and I speak English so I know all the tourist places in Cairo.  If you want to enjoy Cairo, contact me, passionate about tourism and photography.  Explore with me the most beautiful places of this extraordinary city and let yourself be enchanted by the history and culture of Egypt.",
          trip: {
            "one.title": "Dinner Cruise On The Nile In Cairo",
            "one.about":
              " After a day rich in visits and emotions, what could be more pleasant than letting yourself sail on the waters of the sacred river of the pharaohs, while enjoying a delicious typical meal and attending an oriental folklore show?  I propose this two-hour cruise, on the Nile, in Cairo, aboard the 5-star Andrea Maady boat.  In the program, typical Egyptian dinner freshly prepared, belly dancing, dancing of whirling dervishes and oriental music.  After dinner, transfer and return to your hotel.",
            "two.title":
              "A day in the Coptic district and the churches of Mokattam",
            "two.about":
              " This tour is to tell the stories and miracles that happened in the churches of Cairo from place to place in order according to the period.  I know very well that many tour companies do this tour with exorbitant prices, but I do this tour with very low profit and it does not affect the success of the tour in any way",
            "three.title": "Private Quad Bike Tour Around the Pyramids",
            "three.about":
              " Enjoy the only place in Egypt where you can experience the wonders of the ancient world through Quad Bike Desert Safari Tour by Quad Bike Around Pyramids with a panoramic view of Cheops, Chephren and Mykerinus pyramids.  Combine modern thrills and ancient wonders on this speedy quad bike tour. Travel across vast stretches of sand and rolling dunes in bespoke buggies, designed for thrilling speeds.  Cover more sites in less time, reaching areas tourists traveling by foot or car can't see.  You will also enjoy a panoramic view of the pyramids.  A quick adventure to the Giza pyramids on a quad bike",
            "four.title": "Sound and Light Show at the Pyramids",
            "four.about":
              " Enjoy the hour-long sound and light show at the Pyramids of Giza.  Marvel at the images projected onto ancient monuments and feel swept away on a narrative journey through Egypt's history through a spectacular combination of storytelling, lights and music.  Try something different by witnessing the dazzling sound and light show that takes place at the pyramids of Giza, Cheops, Chefren and Mykerinus.  The Sound and Light show will take you on a narrative journey of Egyptian history through dramatic stories, lights and music.  Watch the lights illuminate the Sphinx and pyramids, in a spectacle considered one of Cairo's top tourist attractions.",
            "five.title":
              "Transfer from airport to any hotel in Cairo and Giza",
            "five.about":
              " Cairo Airport Private Transfer to Cairo I am not unique but honest and my experience with hotel locations helps me transfer faster.  The cars are modern and air-conditioned.",
          },
          explore: "Explore Now",
          trips: "Trips",
          book: "Book Now",
          contact: "Contact Us",
          gallery:"gallery",
        },
      },
      fr: {
        translation: {
          title: "Charmante Égypte",
          about:
            "Bienvenue sur Charmante Égypte ! Découvrez la beauté captivante du Caire à travers mes photos. C'est  Baher d'égypte, Je travaille dans le domaine du tourisme en Egypte depuis une dizaine d'années ou plus, je suis francophone et je parle l'anglais aussi je connais tous les lieux touristiques du Caire. Si vous voulez profiter du Caire, contactez-moi, passionné de tourisme et de photographie. Explorez avec moi les plus beaux endroits de cette ville extraordinaire et laissez-vous envoûter par l'histoire et la culture de l'Égypte.",
          trip: {
            "one.title": "Dîner Croisière Sur Le Nil Au Caire",
            "one.about":
              "Après une journée riche en visites et en émotions, quoi de plus agréable que de se laisser voguer sur les eaux du fleuve sacré des pharaons, tout en dégustant un délicieux repas typique et en assistant à un spectacle folklorique oriental? Je propose cette croisière de deux heures, sur le Nil, au Caire, à bord du bateau Andrea Maady 5 étoiles. Dans le programme, dîner typique égyptien fraîchement préparé, danse du ventre, danse de derviches tourneurs et musique orientale. Après le dîner, transfert et retour à votre hôtel.",
            "two.title":
              "Une journée dans le quartier copte et les églises de Mokattam",
            "two.about":
              "Cette visite consiste à raconter les histoires et les miracles qui se sont produits dans les églises du Caire d'un endroit à l'autre dans l'ordre selon la période. Je sais très bien que de nombreuses agences de voyages font ce circuit à des prix exorbitants, mais je fais ce circuit avec un profit très faible et cela n'affecte en rien le succès de la visite",
            "three.title": "Visite privée en quad autour des pyramides",
            "three.about":
              "Profitez du seul endroit en Egypte où vous pourrez découvrir les merveilles du monde antique à travers la visite en quad Safari Desert Safari par Quad Bike Around Pyramids avec une vue panoramique sur les pyramides de Khéops, Chephren et Mykerinus. Combinez sensations modernes et merveilles anciennes lors de cette visite rapide en quad Parcourez de vastes étendues sablonneuses et des dunes vallonnées dans des poussettes sur mesure, conçues pour atteindre des vitesses passionnantes. Couvrez plus de sites en moins de temps, atteignant des zones que les touristes voyageant à pied ou en voiture ne peuvent pas voir. Vous profiterez également d'une vue panoramique sur les pyramides. Une aventure rapide dans les pyramides de Gizeh sur un quad",
            "four.title": "Spectacle son et lumière aux pyramides",
            "four.about":
              "Profitez du spectacle son et lumière d'une heure dans les pyramides de Gizeh. Émerveillez-vous devant les images projetées sur les monuments antiques et sentez-vous emportés par un voyage narratif de l'histoire de l'Égypte par une combinaison spectaculaire de récits, de lumières et de musique. Essayez quelque chose de différent en assistant au spectacle son et lumière éblouissant qui se déroule dans les pyramides de Gizeh, Cheops, Chefren et Mykerinus. Le spectacle Son et Lumière vous emmènera dans un voyage narratif de l'histoire de l'Égypte à travers des histoires dramatiques, des lumières et de la musique. Observez les lumières illuminer le sphinx et les pyramides, dans un spectacle considéré comme l'une des meilleures attractions touristiques du Caire.",
            "five.title":
              "Transfert de l'aéroport à n'importe quel hôtel au Caire et à Gizeh",
            "five.about":
              "Transfert privé de l'aéroport du Caire au Caire Je ne suis pas unique mais honnête et mon expérience avec les emplacements d'hôtels m'aide à transférer plus rapidement. Les voitures sont modernes et climatisées.",
          },
          explore: "Explorez maintenant",
          trips: "Voyages",
          book: "Réservez maintenant",
          contact: "Contactez nous"
          ,gallery:"GALERIE"
        },
      },
      ru: {
        translation: {
          title: "Очаровательный Египет",
          about:
            "Добро пожаловать в Очаровательный Египет! Откройте для себя завораживающую красоту Каира с помощью моих фотографий. Меня зовут Бахер Сабри, я работаю в сфере туризма в Египте более десяти лет, я говорю по-французски и говорю по-английски, поэтому я знать все туристические места в Каире. Если вы хотите насладиться Каиром, свяжитесь со мной, увлеченным туризмом и фотографией. Исследуйте со мной самые красивые места этого необычного города и позвольте себе быть очарованным историей и культурой Египта",
          trip: {
            "one.title": "Круиз с ужином по Нилу в Каире",
            "one.about":
              "После дня, богатого посещениями и эмоциями, что может быть приятнее, чем позволить себе плыть по водам священной реки фараонов, наслаждаясь вкусной традиционной едой и посещая восточное фольклорное шоу? Я предлагаю этот двухчасовой круиз , на Ниле, в Каире, на борту 5-звездочного теплохода Andrea Maady. В программе типичный египетский ужин, свежеприготовленный, танец живота, танец кружащихся дервишей и восточная музыка. После ужина трансфер и возвращение в отель",
            "two.title":
              "День в Коптском районе и церквях Мокаттама",
            "two.about":
              " Этот тур предназначен для того, чтобы рассказать истории и чудеса, которые произошли в церквях Каира с места на место в порядке, соответствующем периоду. Я очень хорошо знаю, что многие туристические компании проводят этот тур с непомерно высокими ценами, но я делаю этот тур с очень низкая прибыль и это никак не влияет на успех тура",
            "three.title": "Частный тур на квадроциклах вокруг пирамид",
            "three.about":
              "Наслаждайтесь единственным местом в Египте, где вы можете испытать чудеса древнего мира во время сафари-тура по пустыне на квадроциклах вокруг пирамид с панорамным видом на пирамиды Хеопса, Хефрена и Микерина. Объедините современные острые ощущения и древние чудеса на этом скоростном квадроцикле. Велосипедный тур. Путешествуйте по обширным участкам песка и холмистым дюнам на сделанных на заказ багги, предназначенных для захватывающих дух скоростей. Объездите больше мест за меньшее время, добираясь до мест, которые туристы, путешествующие пешком или на машине, не могут увидеть туристы, путешествующие пешком или на машине. Вы также насладитесь панорамным видом на пирамиды. Быстрое приключение к пирамидам Гизы на квадроцикле",
            "four.title": "Звуковое и световое шоу у пирамид",
            "four.about":
              "Наслаждайтесь часовым звуковым и световым шоу в пирамидах Гизы. Полюбуйтесь изображениями, проецируемыми на древние памятники, и почувствуйте себя унесенными в повествовательном путешествии по истории Египта с помощью впечатляющего сочетания повествования, света и музыки. Попробуйте что-то другое от стать свидетелем ослепительного звукового и светового шоу, которое происходит у пирамид Гизы, Хеопса, Хефрена и Микерина. Шоу «Звук и свет» перенесет вас в повествовательное путешествие по истории Египта через драматические истории, свет и музыку. Посмотрите, как огни освещают Сфинкс и пирамиды в зрелище, которое считается одной из главных туристических достопримечательностей Каира.",
            "five.title":
              "Трансфер из аэропорта в любой отель Каира и Гизы",
            "five.about":
              "Частный трансфер из аэропорта Каира в Каир Я не уникален, но честен, и мой опыт работы с отелями помогает мне быстрее перемещаться. Автомобили современные и с кондиционерами.",
          },
          explore: "Исследуйте сейчас",
          trips: "Поездки",
          book: "Забронируйте сейчас",
          contact: "Связаться с нами",
          gallery:"ГАЛЕРЕЯ"
        },
      },
    },
  },
  function (err, t) {
    if (err) {
      console.error("Error initializing i18next:", err);
      return;
    }

    // Translate the elements with data-i18n attributes
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      element.textContent = t(key);
    });

    // Update the language dropdown with the saved language
    var languageDropdown = document.getElementById("language-select");
    languageDropdown.value = savedLanguage;

    // Bind language change to the dropdown menu
    languageDropdown.addEventListener("change", function () {
      var selectedLanguage = this.value;
      i18next.changeLanguage(selectedLanguage, function (err, t) {
        if (err) {
          console.error("Error changing language:", err);
          return;
        }

        // Translate the elements again after language change
        document.querySelectorAll("[data-i18n]").forEach(function (element) {
          var key = element.getAttribute("data-i18n");
          element.textContent = t(key);
        });

        // Save the selected language to local storage
        localStorage.setItem("userLanguage", selectedLanguage);
      });
    });
  }
);


  const imageLinks = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a4/f4/d4/coucher-de-soleil-avec.jpg?w=900&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/9f/05/5b/souk-khan-el-khalili.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/73/ca/bf/charmante-egypte.jpg?w=1100&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/72/65/87/charmante-egypte.jpg?w=1100&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/2e/3f/09/nos-clients.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/2e/3f/08/nos-clients.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/2e/3f/07/nos-clients.jpg?w=1100&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/2e/3f/05/nos-clients.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/2e/3f/04/nos-clients.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/2e/3f/03/nos-clients.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/12/b1/55/cairo-in-night.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/12/b1/54/cairo-in-night.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/26/0f/c1/l-excursion-de-foulouka.jpg?w=1200&h=-1&s=1",
   
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/8f/8c/d0/baher-sabry-ayoub-mikhail.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/8f/8b/c8/baher-sabry-ayoub-mikhail.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/8f/8b/c7/baher-sabry-ayoub-mikhail.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/8f/8b/c5/baher-sabry-ayoub-mikhail.jpg?w=1100&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/92/9c/5f/baher-sabry-ayoub-mikhail.jpg?w=800&h=-1&s=1"
    ,"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/92/9c/5d/baher-sabry-ayoub-mikhail.jpg?w=800&h=-1&s=1","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/92/9c/5c/baher-sabry-ayoub-mikhail.jpg?w=800&h=-1&s=1","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/92/9c/56/baher-sabry-ayoub-mikhail.jpg?w=800&h=-1&s=1","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/92/9c/50/baher-sabry-ayoub-mikhail.jpg?w=800&h=-1&s=1","https://i.imgur.com/JveUTwd.jpeg","https://i.imgur.com/LZ7ATp5.jpeg","https://i.imgur.com/4lIwpOv_d.webp?maxwidth=760&fidelity=grand",
    "https://i.imgur.com/ROGpJn2.jpeg","https://i.imgur.com/B3wmpPM.jpeg","https://i.imgur.com/HOJjQ6e_d.webp?maxwidth=1520&fidelity=grand","https://i.imgur.com/Rs47GNy.jpeg","https://i.imgur.com/SRDWalp.jpeg","https://i.imgur.com/hguAQhA_d.webp?maxwidth=760&fidelity=grand","https://i.imgur.com/aifLBFh.jpeg"
  ];

  // Function to create a div element with an image inside
  function createImageDiv(imageLink) {
    const divElement = document.createElement("div");
    const imgElement = document.createElement("img");
    imgElement.src = imageLink;
    imgElement.alt = "";
    divElement.appendChild(imgElement);
    return divElement;
  }

  // Function to add the image divs to elements with "owl-carousel" class
  function addImagesToCarousel() {
    const owlCarousels = document.querySelectorAll(".owl-carousel");
    owlCarousels.forEach((carousel) => {
      for (const imageLink of imageLinks) {
        const imageDiv = createImageDiv(imageLink);
        carousel.appendChild(imageDiv);
      }
    });
  }

  // Call the function to add images to the carousels on page load
  addImagesToCarousel();
  $(document).ready(function () {
    // Your existing JavaScript code goes here
    
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoWidth: false,
      autoHeight: true,
      items: 1,
      autoplay: true,
      nav: false, // Disable default navigation
     
      navText: [], // Remove default navigation text
    });
  
    // Add custom navigation events
    $('.custom-next').click(function() {
      $('.owl-carousel').trigger('next.owl.carousel');
    });
  
    $('.custom-prev').click(function() {
      $('.owl-carousel').trigger('prev.owl.carousel');
    });
  });
  