$(function(){
    var i = 0;
    var a = 0;
    var subMenu = $(".dropdown-toggle");
    var itemName = $(".item-name");
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
        },
        names:{
            "title1": "Bengal Polarized 24k",
            "title2": "Matte Oyster 24k",
            "title3": "Matte Tokyo Tortoise 24k",
            "title4": "Oyster To Black Polarized",
            "title5": "Tobacco To Champagne Polarized 24k",
            "title6": "Butterscotch to Black 24k",
            "title7": "Ivy 24k",
            "title8": "Matte AU Lait To Clear 24k",
            "title9": "Matte Blonde",
            "title10": "Blonde Tortoise To Champagne 24k",
            "title11": "Matte Sunday Tortoise 24k",
            "title12": "Matte Black 24k",
            "title13": "Neptune 24k",
            "title14": "Matte Cosmo to Blush",
            "title15": "Galactic To Blush Rose Gold",
            "title16": "Seaglass To Marine Rose Gold",
            "title17": "Crystal 24k",
            "title18": "Bengal Blue 24k",
            "title19": "Camellia 24k",
            "title20": "Matte Audubon 24k",
            "title21": "Audubon Rose",
            "title22": "Stardust To Champagne 24k",
            "title23": "Matte Ciel To Blue Crystal",
            "title24": "Bone To Black",
            "title25":"Matte Isle To Champagne 24k",
            "title26":"Blue Steel To Burgundy",
            "title27": "Matte Bengal",
            "title28": "White Linen 24k",
            "title29": "Interstellar",
            "title30": "Matte Plume To Palm 24k",
            "title31": "Stella to Magnolia",
            "title32": "Crystal",
            "title33": "Blue Steel To Crystal 24k",
            "title34": "Confetti To Marine 24k",
            "title35": "24k Titanium + Zulu",
            "title36": "Matte Black To 24k Titanium Stella",
            "title37": "Matte Black Titanium Rex",
            "title38": "Titanium + White Linen"
            // "title39": "Titanium + White Linen"
        }
    }

    // desktop menu
    // $(".nav-list-level-1-item").on("mouseover", function(){
    //     console.log($(this).children(".dropdown-menu"));
    //     $(this).children(".dropdown-menu").css("visibility", 'visible');
    // })
    // mouseleave: function() {
    // }
    $(".nav-list-level-1-item").on({
        mouseenter: function() {
            $(this).children(".dropdown-menu").css("visibility", 'visible');
        },
        mouseleave: function() {
            $(this).children(".dropdown-menu").css("visibility", 'none');
        }
    });



    // Mobile menu
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
        if(set == "collection"){
            var sets = obj[set];
            // console.log(sets);
            for (var title in sets){
                createCollection(sets[title]);
            }
            i = 0;
        }
        else if(set == "names") {
            var styles = obj[set];
            for (var name in styles){
                createStyle(styles[name]);
            }
        }
    }

    function createStyle(name){
        if(a == 0){
            // console.log(name);
            var itemName = $(".item-name")
            console.log(itemName[a]);
            $(itemName[a]).addClass("name"+a);
            $(itemName[a]).text(name);
        }
        else{
            var itemName = $(".item-name")
            $(itemName[a]).addClass("name"+a);
            $(itemName[a]).text(name);
        }
        a++;
        // console.log(a);
    }

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
        // console.log(i);
    }

    $(".open-js").on("click",function(){
        $(".navbar-nav").addClass("navbar-nav-open");
        $(".hamburger-menu").css("display", "none");
        $(".close-js").removeClass("display-none");
        $("main").css({"opacty": "1", "display": "none"});
    });

    $(".close-js").on("click",function(){
        $(".navbar-nav").removeClass("navbar-nav-open");
        $(".hamburger-menu").css("display", "block");
        $(".close-js").addClass("display-none");
        $("main").css({"opacty": "0", "display": "block"});
    });
});
