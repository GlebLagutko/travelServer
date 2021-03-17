'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Испания',
                urlName: 'spain',
                capital: 'Мадрид',
                id: 11,
                language: 'ru',
                "map": "mapbox://styles/gleblagutko1/ckm4joamzd6k917l9ow2csvlv",
                "video": "https://www.youtube.com/embed/YGAsG6_JgAI",
                "timezone": "Europe/Madrid",
                "image": "assets/images/spain.jpg",
                "coordinates": '{"lat": "40.416775", "lon": "-3.703790"}',
                "currency": "EUR",
                "description": "Величие дворца халифа, залитые солнцем пляжи Средиземного моря, отрывистый отпечаток каблуков танцора фламенко, трепетная тишина паломников, входящих в собор Сантьяго-де-Компостела после нескольких недель прогулки по Эль-Камино. Вы можете найти душу Испании в таких туристических достопримечательностях, которые представляют бурную историю страны, богатую культуру и очаровательную красоту природы.",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Саграда Фамилия в Барселоне",
                    image: "assets/images/spain/sagrada.jpg",
                    description: "Антони Гауди продвинул архитектурный стиль, известный как модерн, на шаг вперед, даже, как утверждают некоторые, до абсурда. Причудливые и возмутительные здания, которые он построил в Барселоне, стали достопримечательностями, визитной карточкой этого каталонского города. Прежде всего, это церковь Саграда Фамилия, официально именуемая Храмом Искупителей де ла Саграда Фамилия или церковью Святого Семейства Искупления. Одна из самых необычных церквей Европы.",
              CountryId:11,
                }, {
                name: "Сан-Лоренцо-де-Эль-Эскориал",
                image: "assets/images/spain/lorenzo.jpg",
                description: "Сан-Лоренцо-де-Эль-Эскориал, примерно в 45 км к северо-западу от Мадрида, был летним домом испанских королей, и в 1563 году здесь были начаты работы над огромным комплексом, который будет включать монастырь, церковь, королевский дворец, мавзолей, библиотеку и музей, задуманный как памятник Филиппу II и его правлению.",
                CountryId:11,
            }, {
                name: "Севильский собор и Алькасар",
                image: "assets/images/spain/seville.jpg",
                description: "Башня Хиральда, Севильский кафедральный собор и Алькасар вместе составляют объект Всемирного наследия ЮНЕСКО. По мнению ЮНЕСКО, башня является минаретом, «шедевром архитектуры Альмохадов». Собор имеет больше внутреннего пространства, чем собор Святого Петра в Риме, и 37-метровый главный алтарь из резных статуй, полностью покрытых золотом.",
                CountryId:11,
            }, {
                name: "Старый город Толедо",
                image: "assets/images/spain/toledo.jpg",
                description: "Мавританская, готическая и ренессансная архитектура смешиваются и сливаются в город, который Эль Греко запечатлел на одной из своих самых известных картин. Высоко на гранитном холме, окруженный с трех сторон глубоким ущельем реки Тежу, он представляет собой потрясающий профиль; подойти к нему снизу - незабываемое зрелище.",
                CountryId:11,
            }, {
                name: "Сады Альгамбра и Хенералифе",
                image: "assets/images/spain/gardens.jpg",
                description: "Независимо от того, сколько вы читали или сколько фотографий дворцов Гранады Альгамбра вы видели, этот мавританский дворец удовольствий по-прежнему захватывает дух.",
                CountryId:11,
            }, {
                name: "Пласа Майор, Мадрид",
                image: "assets/images/spain/madrid.jpg",
                description: "Она служила сценой для церемониальных мероприятий - провозглашения нового короля, канонизации святых, сожжения еретиков - и общественных развлечений, таких как рыцарские турниры и бои быков.",
                CountryId:11,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
