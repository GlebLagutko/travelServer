'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Греция',
                urlName: 'greece',
                capital: 'Афины',
                id: 14,
                language: 'ru',
                "map": "mapbox://styles/gleblagutko1/ckm4imiau21be17lhw911ac77",
                "video": "https://www.youtube.com/embed/WsX_SOsgvPI",
                "timezone": "Europe/Athens",
                "image": "assets/images/greece.jpg",
                "coordinates": '{"lat": "37.983810","lon": "23.727539"}',
                "currency": "EUR",
                "description": "Греция, где расположены некоторые из самых важных исторических мест в мире, а также около 6000 островов, известна своей природной красотой и увлекательной культурой. Древние археологические памятники, скалы, переходящие в сверкающую голубую воду, песчаные и галечные пляжи и мягкий средиземноморский климат делают Грецию одним из главных туристических направлений Европы.",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Акрополь, Афины",
                    image: "assets/images/greece/athens.jpg",
                    description: "Акрополь, который считается символом Афин и Греции, а также западной цивилизации, представляет собой скалистый холм, возвышающийся в самом сердце современных Афин, увенчанный тремя великолепными храмами, датируемыми V веком до нашей эры.",
             CountryId:14,
                }, {
                name: "Санторини",
                image: "assets/images/greece/santorini.jpg",
                description: "Великолепный Санторини - самый драматичный из всех греческих островов. Он наиболее известен городами на вершинах утёсов западного побережья Фира и Ия, которые, кажется, нависают над глубокой синей кальдерой, заполненной морем. Фира и Ия, состоящие из типичных кикладских белоснежных кубических зданий, многие из которых были преобразованы в бутик-отели с пейзажными бассейнами, считаются романтическими направлениями, популярными для проведения свадеб и медового месяца.",
                CountryId:14,
            }, {
                name: "Дeлфи",
                image: "assets/images/greece/delphi.jpg",
                description: "На материковой части Греции Дельфы внесены в список Всемирного наследия ЮНЕСКО. Построенный на нижних склонах горы Парнас, с видом на драматическое ущелье, это место было священным для древних, которые приезжали сюда во время паломничества, чтобы поклоняться Аполлону (богу света, пророчеств, музыки и исцеления) и спрашивать совета у мифического оракула. .",
                CountryId:14,
            }, {
                name: "Корфу",
                image: "assets/images/greece/corfu.jpg",
                description: "Одно из самых популярных туристических направлений Греции, Корфу находится в Ионическом море у западного побережья материка. Столица, город Корфу, является объектом Всемирного наследия ЮНЕСКО благодаря своей элегантной итальянской архитектуре - он находился под властью венецианцев на протяжении нескольких столетий.",
                CountryId:14,
            }, {
                name: "Родос",
                image: "assets/images/greece/rhodes.jpg",
                description: "Родос, расположенный на берегу Эгейского моря недалеко от Турции, является крупнейшим из островов Додеканеса. Его столица, город Родос, внесенный в список всемирного наследия ЮНЕСКО, является одним из самых популярных туристических направлений Греции. Он окружен впечатляющей системой укреплений, в том числе монументальными башнями и воротами, построенными рыцарями Святого Иоанна после того, как они взяли остров под свой контроль в 14 веке.",
                CountryId:14,
            }, {
                name: "Закинтос",
                image: "assets/images/greece/sea.jpg",
                description: "Остров Закинтос (Занте), где расположены великолепные пейзажи как над морем, так и под ним, является еще одним популярным туристическим направлением в Греции. Сюда также легко добраться, так как он находится всего в 16 км от западного побережья Пелопоннеса в Ионическом море.",
                CountryId:14,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
