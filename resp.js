burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', ()=>{
	rightNav.classList.toggle('v-class-resp');
	navList.classList.toggle('v-class-resp');
	navbar.classList.toggle('h-nav-resp');

})
/*<section class="contact" id="contact">
           <h2 class="text-center">Contact Me</h2>
           <div class="form">
              <input class="form input" type="text" name="name" id="name" placeholder="Your Name:">     
              <input class="form input" type="text" name="Phone number" id="Phone number" placeholder="Your Phone number:"> 
              <input class="form input" type="text" name="E-Mail" id="E-Mail" placeholder="Your E-Mail">       
                <textarea name="text" id="text" cols="50" rows="20" placeholder="What do you wanna ask?"></textarea>

               <button class="btn btn-sm btn-dark">Submit</button>
      </div>
  </section> */

  /*
       <div class="contact-form">
            <form id="contact-form" method="post" action="contact.php">
            <input name="name" type="text" class="form-control" placeholder="Your Name" required>
            <br>
            <input name="name" type="email" class="form-control" placeholder="Your Email"required><br>
                <textarea name="message" class="form-control" placeholder="Message" row="4" required></textarea><br>
                <input type="submit" class="form-control-submit" value="Send Message"></form></div> */


   /* <div class="contact-title">
          <h1>Hoped you liked the website</h1>
          <h2>Make sure to drop your suggestions down below in the comment box</h2>
        </div>*/