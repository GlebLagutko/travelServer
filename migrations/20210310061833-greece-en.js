'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Greece',
                urlName: 'greece',
                capital: 'Athens',
                id: 13,
                language: 'en',
                "map": "mapbox://styles/gleblagutko1/ckm4imiau21be17lhw911ac77",
                "video": "https://www.youtube.com/embed/WsX_SOsgvPI",
                "timezone": "Europe/Athens",
                "image": "assets/images/greece.jpg",
                "coordinates": '{"lat": "37.983810","lon": "23.727539"}',
                "currency": "EUR",
                "description": "Home to some of the world's most important historical sites, along with some 6,000 islands, Greece is known for its natural beauty and fascinating culture. Ancient archaeological sites, cliffs tumbling into sparkling blue water, sand and pebble beaches, and a balmy Mediterranean climate make Greece one of Europe's prime tourist destinations.",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Acropolis, Athens",
                    image: "assets/images/greece/athens.jpg",
                    description: "Considered the symbol of Athens and Greece, and indeed of Western civilization, the Acropolis is a rocky mound rising in the heart of modern Athens, crowned by three magnificent temples dating from the 5th century BC.",
              CountryId:13,
                }, {
                name: "Santorini",
                image: "assets/images/greece/santorini.jpg",
                description: "Stunning Santorini is the most dramatic of all the Greek isles. It is best known for the west coast cliff-top towns of Fira and Oia, which appear to hang over a deep, blue sea-filled caldera. Made up of typical Cycladic whitewashed cubic buildings, many of which have been converted into boutique hotels with infinity pools, both Fira and Oia are considered romantic destinations, popular for weddings and honeymoons.",
                CountryId:13,
            }, {
                name: "Delphi",
                image: "assets/images/greece/delphi.jpg",
                description: "On the Greek mainland, Delphi is a UNESCO World Heritage site. Built on the lower slopes of Mount Parnassus, overlooking a dramatic ravine, the site was sacred to the ancients, who came here on pilgrimages to worship Apollo (god of light, prophecy, music, and healing) and to ask advice from the mythical Oracle.",
                CountryId:13,
            }, {
                name: "Corfu",
                image: "assets/images/greece/corfu.jpg",
                description: "One of Greece's top tourist destinations, Corfu sits in the Ionian Sea off the west coast of the mainland. The capital, Corfu Town, is a UNESCO World Heritage site, thanks to its elegant Italianate architecture — it was ruled by the Venetians for several centuries.",
                CountryId:13,
            }, {
                name: "Rhodes Town",
                image: "assets/images/greece/rhodes.jpg",
                description: "Lying on the Aegean Sea, close to Turkey, Rhodes is the largest of the Dodecanese islands. Its capital, UNESCO-listed Rhodes Town, is one of Greece's top tourist destinations. It is enclosed by an impressive fortification system, including monumental towers and gates built by the Knights of St. John after they took control of the island in the 14th century.",
                CountryId:13,
            }, {
                name: "Zákynthos",
                image: "assets/images/greece/sea.jpg",
                description: "Home to gorgeous scenery both above and under the sea surrounding it, Zákynthos (Zante) island is another top tourist destination in Greece. It is also easy to access, with a locale just 16 kilometers off Peloponnese's west coast in the Ionian Sea.",
                CountryId:13,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
