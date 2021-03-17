'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Spanien',
                urlName: 'spain',
                capital: 'Madrid',
                id: 12,
                language: 'de',
                "map": "mapbox://styles/gleblagutko1/ckm4joamzd6k917l9ow2csvlv",
                "video": "https://www.youtube.com/embed/YGAsG6_JgAI",
                "timezone": "Europe/Madrid",
                "image": "assets/images/spain.jpg",
                "coordinates": '{"lat": "40.416775", "lon": "-3.703790"}',
                "currency": "EUR",
                "description": "Die Größe eines Kalifenpalastes, sybaritische, sonnenverwöhnte mediterrane Strände, der Stakkato-Stempel der Fersen eines Flamencotänzers, die beeindruckende Stille der Pilger, die nach wochenlangem Spaziergang durch El Camino die Kathedrale von Santiago de Compostela betreten. Die Seele Spaniens finden Sie in solchen Touristenattraktionen, die die turbulente Geschichte, die reiche Kultur und die bezaubernde Naturschönheit des Landes widerspiegeln.",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Barcelonas Sagrada Familia",
                    image: "assets/images/spain/sagrada.jpg",
                    description: "Antoni Gaudi hat den als Jugendstil bekannten Baustil einen Schritt weiter gebracht, sogar, wie einige argumentiert haben, in die Absurdität. Die phantasievollen und empörenden Gebäude, die er in Barcelona geschaffen hat, sind zu Wahrzeichen geworden, den charakteristischen Attraktionen dieser katalanischen Stadt. An erster Stelle steht die Sagrada Família-Kirche, offiziell der Tempel Expiatori de la Sagrada Família oder die Kirche der Heiligen Familie des Sühnopfers. Eine der unkonventionellsten Kirchen Europas.",
                    CountryId: 12,
                }, {
                name: "San Lorenzo de El Escorial",
                image: "assets/images/spain/lorenzo.jpg",
                description: "San Lorenzo de El Escorial, etwa 45 Kilometer nordwestlich von Madrid, war die Sommerresidenz der spanischen Könige. 1563 wurde hier mit der Arbeit an einem riesigen Komplex begonnen, der ein Kloster, eine Kirche, einen königlichen Palast, ein Mausoleum, eine Bibliothek und eine Bibliothek umfassen sollte Museum, alle als Denkmal für Philipp II. und seine Regierungszeit konzipiert.",
                CountryId: 12,
            }, {
                name: "Kathedrale von Sevilla und Alcazar",
                image: "assets/images/spain/seville.jpg",
                description: "Der Turm La Giralda, die Kathedrale von Sevilla und der Alcazar bilden zusammen ein UNESCO-Weltkulturerbe. Der Turm ist ein Minarett, laut UNESCO ein \"Meisterwerk der Almohaden-Architektur\". Die Kathedrale hat mehr Innenraum als der Petersdom in Rom und einen 37 Meter hohen Hauptaltar aus geschnitzten Statuen, die vollständig mit Gold bedeckt sind.",
                CountryId: 12,
            }, {
                name: "Toledos Altstadt",
                image: "assets/images/spain/toledo.jpg",
                description: "Die maurische, gotische und Renaissance-Architektur verschmilzt und verschmilzt mit einer Stadt, die El Greco in einem seiner berühmtesten Gemälde festgehalten hat. Hoch auf einem Granithügel und an drei Seiten von der tiefen Schlucht des Tejo umgeben, bietet es ein atemberaubendes Profil. Es ist ein unvergesslicher Anblick, sich ihm von unten zu nähern.",
                CountryId: 12,
            }, {
                name: "Die Alhambra und Generalife Gärten",
                image: "assets/images/spain/gardens.jpg",
                description: "Egal wie viel Sie gelesen haben oder wie viele Bilder Sie von Granadas Alhambra-Palästen gesehen haben, dieser maurische Vergnügungspalast wird Ihnen immer noch den Atem rauben.",
                CountryId: 12,
            }, {
                name: "Plaza Mayor, Madrid",
                image: "assets/images/spain/madrid.jpg",
                description: "Es diente als Bühne für zeremonielle Ereignisse - die Verkündigung eines neuen Königs, die Heiligsprechung von Heiligen, das Verbrennen von Ketzern - und öffentliche Unterhaltung wie Ritterturniere und Stierkämpfe.",
                CountryId: 12,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
