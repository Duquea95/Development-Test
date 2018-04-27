$(function(){
    var i = 0;
    var subMenu = $(".dropdown-toggle");
    var obj = {
        collection: {
            "title1": "St. Louis Classics",
            "title2": "St. Louis Mirrored",
            "title3": "Ward",
            "title4": "Franklin",
            "title5": "Irma",
            "title6": "Milan",
            "title7": "Press",
            "title8": "Orleans Windsor",
            "title9": "Earhart",
            "title10": "Simone",
            "title11": "CL-10",
            "title12": "Stl II Nylon",
            "title13": "Conti",
            "title14": "Clio Nylon",
            "title15": "Charles II",
            "title16": "STL II",
            "title17": "Orleans",
            "title18": "Felicity",
            "title19": "Cbd",
            "title20": "Breton",
            "title21": "Monroe",
            "title22": "Gravier",
            "title23": "Jackson",
            "title24": "Orleans Blinker",
            "title25": "Olivier",
            "title26": "Octavia",
            "title27": "Valence",
            "title28": "L.G.D",
            "title29": "Laveau",
            "title30": "Lafitte",
            "title31": "Huey",
            "title32": "Julia",
            "title33": "Iris",
            "title34": "Lyons",
            "title35": "Toulouse",
            "title36": "Louisa",
            "title37": "Gift Card"
        }

    }

    subMenu.on("click", function(){
            var sub = $(this).text();
            if($(this).next().hasClass('open-sub')){
                $(".open-sub").removeClass("open-sub");
                return false;
            };

            $(".open-sub").removeClass("open-sub");
            $(this).next().addClass('open-sub');
            $(this).next().children().css('opacity', '1');
    })

    for (var set in obj) {
        // console.log(set);
        var sets = obj[set]
        for (var title in sets){
            createCollection(sets[title])
        }
    }

    function openNav(){
        $(".navbar-nav").addClass("navbar-nav-open");
        $(".hamburger-menu").css("display", "none");
        $(".close-js").removeClass("display-none");
        $("main").css({"opacty": "1", "display": "none"});
    }
    function closeNav(){}

    $(".close-js").on("click",function(){
        $(".navbar-nav").removeClass("navbar-nav-open");
        $(".hamburger-menu").css("display", "block");
        $(".close-js").addClass("display-none");
        $("main").css({"opacty": "0", "display": "block"});
    });


    function createCollection(title){
        if(i == 0){
            var productSet = $(".product-set").clone();
            $(".product-set").addClass("set"+i);
            $(".title").text(title);
        }
        else{
            var productSet = $(".product-set").clone();
            productSet.removeClass().addClass(".product-set .set"+i);
            productSet.children(".title").text(title);
            // console.log(title);
            productSet.appendTo('div.mobile-display');
        }
        i++;



    }

});
