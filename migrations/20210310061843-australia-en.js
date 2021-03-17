'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Australia',
                urlName: 'australia',
                capital: 'Canberra',
                id: 22,
                language: 'en',
                "map": "mapbox://styles/gleblagutko1/ckm3vkip91f1z17lhwuslb4fj",
                "video": "https://www.youtube.com/embed/4fYOANcoDSI",
                "timezone": "Australia/Canberra",
                "image": "assets/images/australia.jpg",
                "description": "Australia is a land of dreams. From the sacred legends of the aboriginal Dreamtime, when the great spirits conjured the coral reefs, rainforests, and scorched red deserts, to armchair travelers who describe Australia as their dream destination, the Land Down Under deserves all the hype.",
                "coordinates": '{"lat": "-35.282001", "lon": "149.128998"}',
                "currency": "AUD",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Sydney Opera House",
                    image: "assets/images/australia/opera.jpg",
                    description: "Mention \"Sydney, Australia\" and most people think of the Opera House. Shaped like huge shells or billowing sails, this famous building on Sydney's Bennelong Point graces the list of UNESCO World Heritage Sites and is one of the world's great architectural icons. The location is stunning. Water surrounds the structure on three sides, and the Royal Botanic Gardens border it to the south.",
               CountryId:22,
                }, {
                name: "Great Barrier Reef Marine Park",
                image: "assets/images/australia/reef.jpg",
                description: "Visible from outer space, the World Heritage-listed Great Barrier Reef is one of the largest living structures on the planet. In 1975, the Great Barrier Reef Marine Park was established to protect its fragile ecosystems, which include more than 3,000 coral reefs; 600 continental islands, including the beautiful Whitsunday group; 300 coral cays; and inshore mangrove islands.",
                CountryId:22,
            }, {
                name: "Daintree National Park",
                image: "assets/images/australia/park.jpg",
                description: "A Wet Tropics World Heritage Area, Daintree National Park in Far North Queensland is among the most ancient ecosystems on Earth. The area belongs to the Eastern Kuku Yalanji Aboriginal people, and many of its natural features hold great spiritual significance. ",
                CountryId:22,
            }, {
                name: "Kakadu National Park",
                image: "assets/images/australia/kakadu.jpg",
                description: "Kakadu National Park, in the Top End or the Northern Territory, is a World Heritage Site and one of the planet's great wilderness areas. Covering more than 19,840 square kilometers, Kakadu is the largest national park in Australia and the second largest in the world.",
                CountryId:22,
            }, {
                name: "Kangaroo Island",
                image: "assets/images/australia/island.jpg",
                description: "Nature takes center stage at beautiful Kangaroo Island off the Fleurieu Peninsula in South Australia. Kangaroos hop along the powdery shores, sea lions and penguins frolic in the crystal-clear waters, and koalas cling to the fragrant eucalyptus trees. Diving is also excellent.",
                CountryId:22,
            }, {
                name: "Melbourne",
                image: "assets/images/australia/melbourne.jpg",
                description: "Melbourne, Australia's second largest city, is a popular stop on many Australian itineraries - especially for culture vultures. Galleries, theaters, restaurants, shops, and its distinctly European feel are the main draws of this sophisticated city on the Yarra River.",
                CountryId:22,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
