
function toggleMenu() {
    $('#page-wrapper').toggleClass('shift');
    $('#nav-el').toggleClass('nav-color-change');
}

$('#burger-el').click(toggleMenu);

// window.onload = getHeights();


// WORKED

// var proj1 = $('#proj1').offset().top;
// var proj2 = $('#proj2').offset().top;

// function textChange() {
//     var scrollPos = window.scrollY;

//     if(scrollPos < proj2) {
//         console.log('scroll is before project 2');
//     } else if (scrollPos > proj2) {
//         console.log('scroll is after project 2');
//         $('#project-title').html('test');
//     } 
// }



// THOUGHTS

// target project title element

// define top of proj section
// define bottom of proj section 

// event listener for scroll event
// on scroll run function for:

// if scroll position is more than top of section,
// but less than bottom of section 
//     display data summary in project title header 

// if scroll position is more than position of section title {
//     set section number
//     display section title
// else if scroll position is less than position of section title
//   set previous section number
//   display previous section title 
//   .position()  .offset()


//   something to do with selecting current section
//   var proj = $(section:first)
//   values between two project values 
//      $('#proj1').offset().top + $('#proj1').height()
//   538.46875
//   $(proj1).data('summary')

// }

