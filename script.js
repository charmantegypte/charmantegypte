


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
  
});
