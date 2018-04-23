$(function(){
    var i = 0;
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
            "title26": "Valence",
            "title27": "L.G.D",
            "title28": "Laveau",
            "title29": "Lafitte",
            "title30": "Huey",
            "title31": "Julia",
            "title32": "Iris",
            "title33": "Lyons",
            "title34": "Toulouse",
            "title35": "Louisa",
            "title36": "Gift Card"
        }
    }

    for (var set in obj) {
        // console.log(set);
        var sets = obj[set]
        for (var title in sets){
            createCollection(sets[title])
        }
    }

    function createCollection(title){
        if(i == 0){
            var productSet = $('.product-set').clone();
            $(".product-set").addClass("set"+i);
            $(".title").text(title);
            console.log(productSet);
        }
        else{
            var productSet = $(".product-set").clone();
            productSet.removeClass().addClass(".product-set .set"+i);
            // console.log(productSet.children(".title"));
            productSet.children(".title").text(title);
            // $(".title"+i).text(title);
            console.log(title);
            // console.log(aTitle);
            // aTitle.text(title);
            // console.log(productSet);
            productSet.appendTo('div.mobile-display');
        }
        i++;



    }

});
