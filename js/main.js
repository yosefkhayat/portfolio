
      /*
       * Open the drawer when the menu ison is clicked.
       */
      var menu = document.querySelector('#menu');
      var navlist = document.querySelector('#nav-list');
      var navlink = document.querySelector('.nav-link');
      var nav = document.querySelector('#nav');

      menu.addEventListener('click', function(e) {
        nav.classList.toggle('open');
        
      });
      navlist.addEventListener('click', function() {
        nav.classList.remove('open');
      });
      navlink.addEventListener('click', function() {
        nav.classList.remove('open');
      });
      

    