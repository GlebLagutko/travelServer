'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Germany',
                urlName: 'germany',
                capital: 'Berlin',
                id: 4,
                language: 'en',
                "map": "mapbox://styles/gleblagutko1/ckm3upm0p0wi417nwy240y01a",
                "video": "https://www.youtube.com/embed/GZZulzn5xR8",
                "timezone": "Europe/Berlin",
                "image": "assets/images/germany.jpg",
                coordinates: '{"lat": "52.520008","lon": "13.404954"}',
                "currency": "EUR",
                "description": "Germany is a country located in the heart of Western Europe. It is bordered by Denmark, Poland, Czechia, Austria, Switzerland, France, Luxembourg, Belgium, Netherlands, the North Sea, and the Baltic Sea. Germany has a strategic location on the North European Plain and along the entrance to the Baltic Sea. ",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Cologne Cathedral",
                    image: "assets/images/germany/cologne.jpg",
                    description: "The towering Cologne Cathedral (Kölner Dom) - the Cathedral of St. Peter and St. Mary - is located on the banks of the Rhine and is undoubtedly Cologne's most impressive landmark. This masterpiece of High Gothic architecture, one of the largest cathedrals in Europe, was begun in 1248 and was the most ambitious building project of the Middle Ages.",
                    CountryId: 4,
                }, {
                name: "The Black Forest",
                image: "assets/images/germany/forest.jpg",
                description: "The beautiful Black Forest with its dark, densely-wooded hills is one of the most visited upland regions in all of Europe. Situated in the southwestern corner of Germany and extending 160 kilometers from Pforzheim in the north to Waldshut on the High Rhine in the south, it's a hiker's heaven.",
                CountryId: 4,
            }, {
                name: "Berlin's Brandenburg Gate",
                image: "assets/images/germany/gate.jpg",
                description: "Modeled on the Acropolis in Athens and built for King Frederick William II in 1791, the monumental sandstone Brandenburg Gate in Berlin's Mitte district was the city's first Neoclassical structure. ",
                CountryId: 4,
            }, {
                name: "Neuschwanstein",
                image: "assets/images/germany/castle.jpg",
                description: "The quaint old town of Füssen, situated between the Ammergau and Allgäu Alps and a popular alpine resort and winter sports center, is a good base from which to explore nearby Neuschwanstein Castle, one of Europe's most famous (and picturesque) royal castles.",
                CountryId: 4,
            }, {
                name: "Bamberg and the Bürgerstadt",
                image: "assets/images/germany/bamberg.jpg",
                description: "Located in the valley of the Regnitz, where the river divides into two arms, Bamberg, the old imperial city and the most important town in Upper Franconia, is one of the best preserved of Germany's many charming old towns and one of the best to explore on foot.",
                CountryId: 4,
            }, {
                name: "Königssee (King's Lake)",
                image: "assets/images/germany/lake.jpg",
                description: "The lovely Bavarian lake of Königssee is one of the great beauty spots of the region of Germany referred to as Berchtesgadener Land. Also known as the King's Lake, this area near Salzburg is a hiking (and biking) paradise thanks to its vast network of trails.",
                CountryId: 4,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
