'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Великобритания',
                urlName: 'uk',
                capital: 'Лондон',
                id: 20,
                language: 'ru',
                "map": "mapbox://styles/gleblagutko1/ckm3tjiv09qrs17lbtyv7g8yx",
                "video": "https://www.youtube.com/embed/XkRFSnxXQ_w",
                "timezone": "Europe/London",
                "image": "assets/images/uk.jpg",
                "coordinates": '{"lat": "51.509865", "lon": "-0.118092"}',
                "currency": "GBP",
                description: "Великобритания, островное государство, расположенное у северо-западного побережья континентальной Европы. Соединенное Королевство включает весь остров Великобритания, который включает Англию, Уэльс и Шотландию, а также северную часть острова Ирландия. Название Британия иногда используется для обозначения Соединенного Королевства в целом. Столица - Лондон, который входит в число ведущих мировых коммерческих, финансовых и культурных центров.",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Стоунхендж",
                    image: "assets/images/uk/stone.jpg",
                    description: "Стоунхендж, расположенный в 10 милях к северу от исторического города Солсбери на равнине Солсбери, является самым известным доисторическим памятником Европы. Выставки в превосходном центре для посетителей Стоунхенджа подготовили почву для посещения, объясняя с помощью аудиовизуальных впечатлений и более 250 древних объектов, как были возведены мегалиты между 3000 и 1500 годами до нашей эры, и делясь информацией о жизни в то время.",
             CountryId:20,
                }, {
                name: "Башня Лондона",
                image: "assets/images/uk/tower.jpg",
                description: "Тюрьма, дворец, сокровищница, обсерватория и зверинец: Лондонский Тауэр сделал все это, и это одна из главных достопримечательностей Лондона. Считается самым важным зданием в Англии, в этом объекте всемирного наследия есть что посмотреть и чем заняться, чтобы посетители были заняты часами.",
                CountryId:20,
            }, {
                name: "Римские бани и город Бат",
                image: "assets/images/uk/bath.jpg",
                description: "Если у вас есть время посетить только один город поменьше в Англии, вы не найдете ничего лучше, чем Бат. Этот удивительно красивый город в Сомерсете может похвастаться большим количеством фантастических туристических достопримечательностей, чем вы могли бы надеяться посетить за день.",
                CountryId:20,
            }, {
                name: "Честерский зоопарк",
                image: "assets/images/uk/zoo.jpg",
                description: "Зоопарк Честера, расположенный в Аптоне, чуть более чем в миле к северу от центра города Честер, является самой посещаемой достопримечательностью Англии за пределами Лондона и одним из лучших мест в Англии для семейного отдыха.",
                CountryId:20,
            }, {
                name: "Дьявольский мост ",
                image: "assets/images/uk/bridge.jpg",
                description: "Дьявольский мост расположен в 12 милях от приморского города Аберистуит, на самом деле представляет собой три моста, эффектно сложенные друг на друга, самый старый из которых датируется 11 веком, а самый новый построен в 1901 году. Они проходят через ущелье Рейдол, где река Майнах опускается на 300 футов. в долину далеко внизу.",
                CountryId:20,
            }, {
                name: "Эдинбургский замок",
                image: "assets/images/uk/castle.jpg",
                description: "Каменные башни и стены Эдинбургского замка доминируют над горизонтом Эдинбурга с 13 века. Расположенный на вершине черной базальтовой скалы, он предлагает великолепный вид на город и путешествие по бурной истории Шотландии.",
                CountryId:20,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
