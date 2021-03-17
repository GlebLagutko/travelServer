'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Deutschland',
                urlName: 'germany',
                capital: 'Berlin',
                id: 6,
                language: 'de',
                "map": "mapbox://styles/gleblagutko1/ckm3upm0p0wi417nwy240y01a",
                "video": "https://www.youtube.com/embed/GZZulzn5xR8",
                "timezone": "Europe/Berlin",
                "image": "assets/images/germany.jpg",
                coordinates: '{"lat": "52.520008","lon": "13.404954"}',
                "currency": "EUR",
                "description": "Deutschland ist ein Land im Herzen Westeuropas. Es grenzt an Dänemark, Polen, Tschechien, Österreich, die Schweiz, Frankreich, Luxemburg, Belgien, die Niederlande, die Nordsee und die Ostsee. Deutschland hat eine strategische Lage in der nordeuropäischen Ebene und am Eingang zur Ostsee.",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Kölner Dom",
                    image: "assets/images/germany/cologne.jpg",
                    description: "Der hoch aufragende Kölner Dom - der Dom von St. Peter und St. Mary - liegt am Rheinufer und ist zweifellos das beeindruckendste Wahrzeichen Kölns. Dieses Meisterwerk der hochgotischen Architektur, eine der größten Kathedralen Europas, wurde 1248 begonnen und war das ehrgeizigste Bauprojekt des Mittelalters.",
                    CountryId:6,
                }, {
                name: "Der Schwarzwald",
                image: "assets/images/germany/forest.jpg",
                description: "Der wunderschöne Schwarzwald mit seinen dunklen, dicht bewaldeten Hügeln ist eine der meistbesuchten Hochlandregionen in ganz Europa. Das Hotel liegt im Südwesten Deutschlands und erstreckt sich 160 Kilometer von Pforzheim im Norden bis Waldshut am Hochrhein im Süden. Es ist ein Paradies für Wanderer.",
                CountryId:6,
            }, {
                name: "Berlins Brandenburger Tor",
                image: "assets/images/germany/gate.jpg",
                description: "Das monumentale Brandenburger Sandsteintor im Berliner Stadtteil Mitte nach dem Vorbild der Akropolis in Athen und 1791 für König Friedrich Wilhelm II. Erbaut, war das erste neoklassizistische Bauwerk der Stadt.",
                CountryId:6,
            }, {
                name: "Neuschwanstein",
                image: "assets/images/germany/castle.jpg",
                description: "Die malerische Altstadt von Füssen, zwischen den Alpen Ammergau und Allgäu gelegen und ein beliebter Ferienort und Wintersportzentrum, ist ein guter Ausgangspunkt, um das nahe gelegene Schloss Neuschwanstein, eine der berühmtesten (und malerischsten) königlichen Burgen Europas, zu erkunden.",
                CountryId:6,
            }, {
                name: "Bamberg und die Bürgerstadt",
                image: "assets/images/germany/bamberg.jpg",
                description: "Bamberg, die alte Reichsstadt und wichtigste Stadt in Oberfranken, liegt im Regnitz-Tal, wo sich der Fluss in zwei Arme teilt, und ist eine der am besten erhaltenen der vielen charmanten Altstädte Deutschlands und eine der besten zu erkunden zu Fuß.",
                CountryId:6,
            }, {
                name: "Königssee",
                image: "assets/images/germany/lake.jpg",
                description: "Der schöne bayerische Königssee ist einer der schönsten Orte der Region Deutschland, der als Berchtesgadener Land bezeichnet wird. Dieses Gebiet in der Nähe von Salzburg, auch als Königssee bekannt, ist dank seines ausgedehnten Wegenetzes ein Wander- (und Rad-) Paradies.",
                CountryId:6,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
