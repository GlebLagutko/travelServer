'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Japan',
                urlName: 'japan',
                capital: 'Tokyo',
                id: 7,
                language: 'en',
                "map": "mapbox://styles/gleblagutko1/ckm3owbacccz417l9nmucrgmr",
                "video": "https://www.youtube.com/embed/rcnLTnGGBU0",
                "timezone": "Asia/Tokyo",
                "image": "assets/images/japan.jpg",
                coordinates: '{"lat": "35.652832","lon": "139.839478"}',
                "currency": "JPY",
                "description": "Japan is a fascinating country of economic and business prowess, rich culture, technical wizardry, spatial conundrums and contradictions. Japan held onto the title of the world’s second largest economy for more than 40 years from 1968 to 2010. Tokyo, Japan’s capital city, is the world’s largest metropolitan area, with a population of 32.5 million people.",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Mount Fuji",
                    image: "assets/images/japan/fuji.jpg",
                    description: "Without a doubt Japan's most recognizable landmark, majestic Mount Fuji (Fuji-san) is also the country's highest mountain peak. Towering 3,776 meters over an otherwise largely flat landscape to the south and east, this majestic and fabled mountain is tall enough to be seen from Tokyo, more than 100 kilometers away.",
                    CountryId: 7,
                },
                {
                    name: "Imperial Tokyo",
                    image: "assets/images/japan/tokyo.jpg",
                    description: "Tokyo's most famous landmark, the Imperial Palace with its beautiful 17th-century parks surrounded by walls and moats, is a must-see when visiting the nation's capital. Don't be put off by the fact that the majority of the palace is closed to the public (it's still in use by the Imperial family), as there is still enough to see simply by strolling the grounds.",
                    CountryId: 7,
                },
                {
                    name: "Temple City: Historic Nara",
                    image: "assets/images/japan/nara.jpg",
                    description: "For centuries the hub of Japanese culture, the lovely unspoiled city of Nara is home to a large number of historic buildings, along with important national treasures and works of art.",
                    CountryId:7,
                },
                {
                    name: "Osaka Castle",
                    image: "assets/images/japan/osaka.jpg",
                    description: "Built in 1586 by famous Japanese warrior and politician Toyotomi Hideyoshi, Osaka Castle (Ōsaka-jō) was at the time the largest and most important fortress in the country. Although destroyed and rebuilt a number of times since, the present structure, built in 1931, remains true to the original.",
                    CountryId:7,
                },
                {
                    name: "Chūbu-Sangaku National Park",
                    image: "assets/images/japan/park.jpg",
                    description: "Japan boasts a number of outstanding areas of natural beauty, many of them designated as national parks or, in some cases, UNESCO World Heritage Sites. One of the country's most spectacular of these is Chūbu-Sangaku National Park in the center of Honshu. Located in the park's northern and central regions is the group of mountains collectively referred to as the Hida Mountains, or Japanese Alps.",
                    CountryId:7,
                },
                {
                    name: "The Atsuta Shrine, Nagoya",
                    image: "assets/images/japan/nagoya.jpg",
                    description: "The Atsuta Shrine, in the heart of the city of Nagoya, is the most important Shinto shrine in Japan, and attracts more than five million visitors each year. Established in the first century, this religious site is famous for its preserved Imperial insignia, the \"grass-mowing sword\" (kusanagi-no-tsurugi), one of only three in the country.",
                    CountryId:7,
                },
            ]
            , {});

        return Promise.resolve();
    },

};
