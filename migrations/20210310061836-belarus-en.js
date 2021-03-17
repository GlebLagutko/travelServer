'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Belarus',
                urlName: 'belarus',
                capital: 'Minsk',
                id: 16,
                language: 'en',

                "timezone": "Europe/Minsk",
                "map": "mapbox://styles/gleblagutko1/ckm3oraey2py617qxdbjmf69w",
                "coordinates": '{"lat": "53.893009", "lon": "27.567444"}',
                "currency": "BYN",
                "video": "https://www.youtube.com/embed/QNdYybI3Pgs",
                "image": "assets/images/belarus.jpg",
                "description": "Belarus is situated in the geographical center of Europe. Despite its position, it often" +
                    " unjustly has a lack of the tourists’ attention. But, it has lots of attractions to surprise and" +
                    " inspire curious travelers. The population of the country is about ten million people, who live in" +
                    " dozens of cities breathing with history.",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    "name": "Belovezhskaya Pushcha National Park",
                    "image": "assets/images/belarus/pushcha.jpg",
                    "description": "Belovezhskaya Pushcha National Park covers both Belarus and neighbouring Poland, " +
                        "and is a protected area of land as well as a UNESCO World Heritage Site. The park is famous" +
                        " for its lush landscapes and flora and fauna, the most notable of which is the European Bison," +
                        " and is one of the few places in the world where these majestic animals can be viewed in their " +
                        "natural habitat. ",
               CountryId:16,
                }, {
                "name": "Mir Castle",
                "image": "assets/images/belarus/mir.jpg",
                "description": "One of the premium attractions in Belarus, Mir Castle lies in the Grodno region" +
                    " and dates from the 16th century. This mighty architectural feat is built in the Baroque," +
                    " Gothic, and Renaissance styles, and is heavily surrounded by fortification walls.",
                CountryId:16,
            }, {
                "name": "Brest Hero Fortress Memorial Complex",
                "image": "assets/images/belarus/brest.jpg",
                "description": "A memorial complex erected in the city of Brest that stands on the site of the " +
                    "original fortress, Brest Fortress is dedicated to the heroes of the Great Patriotic War." +
                    " The site features conserved parts of the original ruins of the fortress as well as ramparts.",
                CountryId:16,
            }, {
                "name": "Nesvizh",
                "image": "assets/images/belarus/nesvizh.jpg",
                "description": "The city of Nesvizh is famous for its medieval castle, also known as Nesvizh" +
                    " Castle. The building is a mix of Baroque and Renaissance styles, and was completed in" +
                    " the 17th century. The former home of the Radziwill family, the castle is now open to" +
                    " the public who can explore the building as well as the sprawling gardens that are" +
                    " modelled on traditional English rose gardens. ",
                CountryId:16,
            }, {
                "name": "Braslav Lake Area",
                "image": "assets/images/belarus/braslav.jpg",
                "description": "If you want to explore what is left of an ancient glacier then a visit to Braslav " +
                    "Lake Area is something that you can’t miss. There are approximately 300 lakes in the region" +
                    " that are known as the ‘Blue Necklace’ of Belarus due to their azure waters.",
                CountryId:16,
            }, {
                "name": "Grodno",
                "image": "assets/images/belarus/grodno.jpg",
                "description": "Found on the western border of Belarus, come to the city of Grodno in particular" +
                    " for the Kalozha Church, a nominee as a UNESCO World Heritage Site. The church is still in " +
                    "working order and is a place of worship for Orthodox Christians in Belarus, and is said to" +
                    " have been built in the 12th century. ",
                CountryId:16,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
