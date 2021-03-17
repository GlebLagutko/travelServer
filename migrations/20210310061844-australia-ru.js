'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Австралия',
                urlName: 'australia',
                capital: 'Канберра',
                id: 24,
                language: 'de',
                "map": "mapbox://styles/gleblagutko1/ckm3vkip91f1z17lhwuslb4fj",
                "video": "https://www.youtube.com/embed/4fYOANcoDSI",
                "timezone": "Australia/Canberra",
                "image": "assets/images/australia.jpg",
                "description": "Australien ist ein Land der Träume. Von den heiligen Legenden der Traumzeit der Aborigines, als die großen Geister die Korallenriffe, Regenwälder und verbrannten roten Wüsten heraufbeschworen, bis zu Sesselreisenden, die Australien als ihr Traumziel bezeichnen, verdient das Land Down Under den ganzen Hype.",
                "coordinates": '{"lat": "-35.282001", "lon": "149.128998"}',
                "currency": "AUD",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Opernhaus in Sydney",
                    image: "assets/images/australia/opera.jpg",
                    description: "Erwähnen Sie \"Sydney, Australien\" und die meisten Leute denken an das Opernhaus. Dieses berühmte Gebäude am Bennelong Point in Sydney ist wie riesige Muscheln oder wogende Segel geformt und steht auf der Liste des UNESCO-Weltkulturerbes. Es ist eine der größten architektonischen Ikonen der Welt. Die Lage ist atemberaubend. Wasser umgibt die Struktur auf drei Seiten, und die Royal Botanic Gardens grenzen im Süden an sie.",
                    CountryId: 24,
                }, {
                name: "Great Barrier Reef Marine Park",
                image: "assets/images/australia/reef.jpg",
                description: "Das zum Weltkulturerbe gehörende Great Barrier Reef ist vom Weltraum aus sichtbar und eine der größten lebenden Strukturen der Welt. 1975 wurde der Great Barrier Reef Marine Park gegründet, um seine empfindlichen Ökosysteme zu schützen, zu denen mehr als 3.000 Korallenriffe gehören. 600 kontinentale Inseln, einschließlich der wunderschönen Whitsunday-Gruppe; 300 Coral Cays; und Küsten Mangroveninseln.",
                CountryId: 24,
            }, {
                name: "Daintree Nationalpark",
                image: "assets/images/australia/park.jpg",
                description: "Der Daintree National Park im hohen Norden von Queensland gehört zum Weltkulturerbe der Wet Tropics und gehört zu den ältesten Ökosystemen der Erde. Das Gebiet gehört den Ureinwohnern der östlichen Kuku Yalanji, und viele seiner natürlichen Merkmale haben eine große spirituelle Bedeutung.",
                CountryId: 24,
            }, {
                name: "Kakadu Nationalpark",
                image: "assets/images/australia/kakadu.jpg",
                description: "Der Kakadu-Nationalpark im Top End oder im Northern Territory ist ein Weltkulturerbe und eines der größten Wildnisgebiete der Welt. Mit mehr als 19.840 Quadratkilometern ist Kakadu der größte Nationalpark in Australien und der zweitgrößte der Welt.",
                CountryId: 24,
            }, {
                name: "Känguru-Insel",
                image: "assets/images/australia/island.jpg",
                description: "Auf der wunderschönen Kangaroo Island vor der Fleurieu-Halbinsel in Südaustralien steht die Natur im Mittelpunkt. Kängurus hüpfen an den pudrigen Ufern entlang, Seelöwen und Pinguine tummeln sich im kristallklaren Wasser, und Koalas klammern sich an die duftenden Eukalyptusbäume. Tauchen ist auch ausgezeichnet.",
                CountryId: 24,
            }, {
                name: "Melbourne",
                image: "assets/images/australia/melbourne.jpg",
                description: "Melbourne, Australiens zweitgrößte Stadt, ist ein beliebter Zwischenstopp auf vielen australischen Reiserouten - insbesondere für Kulturbegeisterte. Galerien, Theater, Restaurants, Geschäfte und das ausgesprochen europäische Flair sind die Hauptattraktionen dieser raffinierten Stadt am Yarra River.",
                CountryId: 24,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
