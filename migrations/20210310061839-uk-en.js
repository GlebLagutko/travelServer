'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Uk',
                urlName: 'uk',
                capital: 'London',
                id: 19,
                language: 'en',
                "map": "mapbox://styles/gleblagutko1/ckm3tjiv09qrs17lbtyv7g8yx",
                "video": "https://www.youtube.com/embed/XkRFSnxXQ_w",
                "timezone": "Europe/London",
                "image": "assets/images/uk.jpg",
                "coordinates": '{"lat": "51.509865", "lon": "-0.118092"}',
                "currency": "GBP",
                description: "United Kingdom, island country located off the northwestern coast of mainland Europe. The United Kingdom comprises the whole of the island of Great Britain—which contains England, Wales, and Scotland—as well as the northern portion of the island of Ireland. The name Britain is sometimes used to refer to the United Kingdom as a whole. The capital is London, which is among the world’s leading commercial, financial, and cultural centres. ",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Stonehenge",
                    image: "assets/images/uk/stone.jpg",
                    description: "Stonehenge, 10 miles north of the historic city of Salisbury on Salisbury Plain, is Europe's best-known prehistoric monument. Exhibitions at the excellent Stonehenge visitor center set the stage for a visit, explaining through audio-visual experiences and more than 250 ancient objects how the megaliths were erected between 3000 and 1500 BC, and sharing information about life during this time.",
               CountryId:19,
                }, {
                name: "Tower of London",
                image: "assets/images/uk/tower.jpg",
                description: "Prison, palace, treasure vault, observatory, and menagerie: the Tower of London has done it all and it's one of the top attractions in London. Widely considered the most important building in England, there's enough to see and do at this World Heritage Site to keep visitors busy for hours.",
                CountryId:19,
            }, {
                name: "The Roman Baths and Georgian City of Bath",
                image: "assets/images/uk/bath.jpg",
                description: "If you only have time to visit one smaller city in England, you couldn't do much better than Bath. This remarkably beautiful city in Somerset boasts more fantastic tourist attractions than you could hope to visit in a day.",
                CountryId:19,
            }, {
                name: "Chester Zoo",
                image: "assets/images/uk/zoo.jpg",
                description: "Located in Upton, just over a mile north of Chester city center, Chester Zoo is England's most visited attraction outside of London and is one of the best places to visit in England for families.",
                CountryId:19,
            }, {
                name: "Devil's Bridge",
                image: "assets/images/uk/bridge.jpg",
                description: "Located 12 miles from the seaside town of Aberystwyth, Devil's Bridge is actually three bridges spectacularly stacked atop each other, with the oldest dating from the 11th century and the newest built in 1901. They span the Rheidol Gorge, where the River Mynach plunges 300 feet into the valley far below.",
                CountryId:19,
            }, {
                name: "Edinburgh Castle",
                image: "assets/images/uk/castle.jpg",
                description: "The stone towers and walls of Edinburgh Castle have dominated the Edinburgh skyline since the 13th century. Perched atop black basalt rock, it offers magnificent views of the city and a trip through Scotland's tumultuous history.",
                CountryId:19,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
