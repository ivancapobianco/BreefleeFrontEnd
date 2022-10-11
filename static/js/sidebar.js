// MenuToggle
        let toggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation');
        let navtitle = document.querySelector('.title');
        let topbar = document.querySelector('.topbar');
        let main = document.querySelector('.main');
        let hometable = document.querySelector('.hometable');


        // navigation.onmouseenter
        toggle.onclick = function(){
            navigation.classList.toggle('active');
            navtitle.classList.toggle('active');
            topbar.classList.toggle('active');
            hometable.classList.toggle('active');
            main.classList.toggle('active');
        }

        //navigation.onmouseleave = function(){
        //    navigation.classList.remove('active');
        //    navtitle.classList.remove('active');
        //    topbar.classList.remove('active');
        //    hometable.classList.remove('active');
        //    main.classList.remove('active');
        //}