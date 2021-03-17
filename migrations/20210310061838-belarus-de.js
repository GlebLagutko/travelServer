'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Weißrussland',
                urlName: 'belarus',
                capital: 'Minsk',
                id: 18,
                language: 'de',

                "timezone": "Europe/Minsk",
                "map": "mapbox://styles/gleblagutko1/ckm3oraey2py617qxdbjmf69w",
                "coordinates": '{"lat": "53.893009", "lon": "27.567444"}',
                "currency": "BYN",
                "video": "https://www.youtube.com/embed/QNdYybI3Pgs",
                "image": "assets/images/belarus.jpg",
                "description": "Belarus liegt im geografischen Zentrum Europas. Trotz seiner Lage wird es von Touristen " +
                    "oft zu Unrecht ignoriert. Aber es gibt hier viele Attraktionen, die neugierige Reisende überraschen" +
                    " und inspirieren können. Das Land hat etwa zehn Millionen Einwohner, die in Dutzenden von" +
                    " Städten leben, die Geschichte atmen.",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    "name": "Bialowieza Wald",
                    "image": "assets/images/belarus/pushcha.jpg",
                    "description": "Der Belovezhskaya Pushcha Nationalpark umfasst sowohl Weißrussland als" +
                        " auch das benachbarte Polen und ist ein Schutzgebiet sowie ein UNESCO-Weltkulturerbe." +
                        " Der Park ist bekannt für seine üppigen Landschaften, Flora und Fauna, von denen der" +
                        " Bison der berühmteste ist. Er ist einer der wenigen Orte auf der Welt, an denen diese" +
                        " majestätischen Tiere in ihrem natürlichen Lebensraum gesehen werden können.",
                    CountryId: 18,
                }, {
                "name": "Mir Schloss",
                "image": "assets/images/belarus/mir.jpg",
                "description": "Das Schloss Mir, eine der Hauptattraktionen von Belarus, befindet sich in der Region Grodno und stammt aus dem 16. Jahrhundert. Diese mächtige architektonische Struktur wurde im Barock-, Gotik- und Renaissance-Stil erbaut und ist stark von Festungsmauern umgeben.",
                CountryId: 18,
            }, {
                "name": "Festung Brest",
                "image": "assets/images/belarus/brest.jpg",
                "description": "Der in der Stadt Brest an der Stelle der ursprünglichen Festung errichtete Gedenkkomplex Brest Fortress ist den Helden des Großen Vaterländischen Krieges gewidmet. Teile der ursprünglichen Festungsruinen sowie Wälle sind auf dem Gelände erhalten geblieben.",
                CountryId: 18,
            }, {
                "name": "Nesvizh",
                "image": "assets/images/belarus/nesvizh.jpg",
                "description": "Die Stadt Nesvizh ist berühmt für ihre mittelalterliche Burg, die auch als Nesvizh-Burg bekannt ist. Das Gebäude ist eine Mischung aus Barock- und Renaissance-Stil und wurde im 17. Jahrhundert erbaut. Das Schloss, das früher die Familie Radziwill beherbergte, ist jetzt für die Öffentlichkeit zugänglich, die das Gebäude sowie die weitläufigen Gärten nach dem Vorbild traditioneller englischer Rosengärten erkunden kann. ",
                CountryId: 18,
            }, {
                "name": "Braslav Seen",
                "image": "assets/images/belarus/braslav.jpg",
                "description": "Wenn Sie die Überreste eines alten Gletschers erkunden möchten, sollten Sie einen Besuch des Braslav-Sees nicht verpassen. In der Region gibt es etwa 300 Seen, die aufgrund ihres azurblauen Wassers als «Blaue Halskette» von Belarus bezeichnet werden.",
                CountryId: 18,
            }, {
                "name": "Grodno",
                "image": "assets/images/belarus/grodno.jpg",
                "description": "Wenn Sie sich an der Westgrenze von Belarus befinden, kommen Sie in die Stadt Grodno, insbesondere wegen der Kalozhskaya-Kirche, die zum UNESCO-Weltkulturerbe gehört. Die Kirche ist noch funktionsfähig und eine Kultstätte für orthodoxe Christen in Weißrussland. Sie soll im 12. Jahrhundert erbaut worden sein.",
                CountryId: 18,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
