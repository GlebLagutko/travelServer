'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Spain',
                urlName: 'spain',
                capital: 'Madrid',
                id: 10,
                language: 'en',
                "map": "mapbox://styles/gleblagutko1/ckm4joamzd6k917l9ow2csvlv",
                "video": "https://www.youtube.com/embed/YGAsG6_JgAI",
                "timezone": "Europe/Madrid",
                "image": "assets/images/spain.jpg",
                "coordinates": '{"lat": "40.416775", "lon": "-3.703790"}',
                "currency": "EUR",
                "description": "The grandeur of a caliph's palace, sybaritic sun-drenched Mediterranean beaches, the staccato stamp of a flamenco dancer's heels, the awed hush of pilgrims entering the cathedral at Santiago de Compostela after weeks of walking El Camino. You can find the soul of Spain in tourist attractions such as these, which represent the country's tumultuous history, rich culture, and enchanting natural beauty.",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Barcelona's Sagrada Familia",
                    image: "assets/images/spain/sagrada.jpg",
                    description: "Antoni Gaudi took the architectural style known as Art Nouveau a step further, even, some have argued, into absurdity. The fanciful and outrageous buildings he created in Barcelona have become landmarks, the signature attractions of this Catalan city. Foremost is The Sagrada Família church, officially the Temple Expiatori de la Sagrada Família or the Holy Family Church of the Atonement. One of Europe's most unconventional churches.",
                    CountryId: 10,
                }, {
                name: "San Lorenzo de El Escorial",
                image: "assets/images/spain/lorenzo.jpg",
                description: "San Lorenzo de El Escorial, about 45 kilometers northwest of Madrid, was the summer home of Spain's kings, and in 1563, work was begun here on a huge complex, which would include a monastery, church, royal palace, mausoleum, library, and museum, all conceived as a monument to Philip II and his reign.",
                CountryId: 10,
            }, {
                name: "Seville Cathedral and Alcazar",
                image: "assets/images/spain/seville.jpg",
                description: "La Giralda tower, Seville Cathedral, and the Alcazar combine to form a UNESCO World Heritage Site. The tower is a minaret, a \"masterpiece of Almohad architecture,\" according to UNESCO. The cathedral has more interior space than St. Peter's in Rome and a 37-meter main altar of carved statues completely covered in gold.",
                CountryId: 10,
            }, {
                name: "Toledo's Old City",
                image: "assets/images/spain/toledo.jpg",
                description: "Moorish, Gothic, and Renaissance architecture mingle and blend into a city that El Greco captured in one of his most famous paintings. High on a granite hill and surrounded on three sides by the deep gorge of the Tagus River, it presents a stunning profile; approaching it from below is an unforgettable sight.",
                CountryId: 10,
            }, {
                name: "The Alhambra and Generalife Gardens",
                image: "assets/images/spain/gardens.jpg",
                description: "No matter how much you have read or how many pictures you have seen of Granada's Alhambra palaces, this Moorish pleasure palace will still take your breath away.",
                CountryId: 10,
            }, {
                name: "Plaza Mayor, Madrid",
                image: "assets/images/spain/madrid.jpg",
                description: " It has served as the stage for ceremonial events — the proclamation of a new king, the canonization of saints, the burning of heretics — and public entertainment such as chivalric tournaments and bullfights.",
                CountryId: 10,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
