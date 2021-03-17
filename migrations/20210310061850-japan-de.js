'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Japan',
                urlName: 'japan',
                capital: 'Tokio',
                id: 9,
                language: 'de',
                "map": "mapbox://styles/gleblagutko1/ckm3owbacccz417l9nmucrgmr",
                "video": "https://www.youtube.com/embed/rcnLTnGGBU0",
                "timezone": "Asia/Tokyo",
                "image": "assets/images/japan.jpg",
                "coordinates": '{"lat": "35.652832","lon": "139.839478"}',
                "currency": "JPY",
                "description": "Japan ist ein faszinierendes Land mit wirtschaftlichen und geschäftlichen Fähigkeiten, einer reichen Kultur, technischer Zauberei, räumlichen Rätseln und Widersprüchen. Japan hat von 1968 bis 2010 mehr als 40 Jahre lang den Titel der zweitgrößten Volkswirtschaft der Welt inne. Tokio, Japans Hauptstadt, ist mit 32,5 Millionen Einwohnern die größte Metropolregion der Welt.",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Berg Fuji",
                    image: "assets/images/japan/fuji.jpg",
                    description: "Ohne Zweifel ist Japans bekanntestes Wahrzeichen, der majestätische Berg Fuji (Fuji-san), auch der höchste Berg des Landes. Dieser majestätische und sagenumwobene Berg ragt 3.776 Meter über eine ansonsten weitgehend flache Landschaft im Süden und Osten und ist hoch genug, um von Tokio aus gesehen zu werden, das mehr als 100 Kilometer entfernt ist.",
                    CountryId: 9,
                },
                {
                    name: "Kaiserliches Tokio",
                    image: "assets/images/japan/tokyo.jpg",
                    description: "Tokios berühmtestes Wahrzeichen, der Kaiserpalast mit seinen wunderschönen Parks aus dem 17. Jahrhundert, die von Mauern und Wassergräben umgeben sind, ist ein Muss, wenn Sie die Hauptstadt des Landes besuchen. Lassen Sie sich nicht von der Tatsache abschrecken, dass der Großteil des Palastes für die Öffentlichkeit geschlossen ist (er wird immer noch von der kaiserlichen Familie genutzt), da es immer noch genug zu sehen gibt, wenn Sie einfach durch das Gelände schlendern.",
                    CountryId: 9,
                },
                {
                    name: "Temple City: Historisches Nara",
                    image: "assets/images/japan/nara.jpg",
                    description: "Die schöne, unberührte Stadt Nara ist seit Jahrhunderten das Zentrum der japanischen Kultur und beherbergt eine große Anzahl historischer Gebäude sowie wichtige nationale Schätze und Kunstwerke.",
                    CountryId: 9,
                },
                {
                    name: "Osaka Schloss",
                    image: "assets/images/japan/osaka.jpg",
                    description: "Das Schloss Osaka (Ōsaka-jō) wurde 1586 von dem berühmten japanischen Krieger und Politiker Toyotomi Hideyoshi erbaut und war zu dieser Zeit die größte und wichtigste Festung des Landes. Obwohl das heutige Gebäude, das 1931 erbaut wurde, mehrmals zerstört und wieder aufgebaut wurde, bleibt es dem Original treu.",
                    CountryId: 9,
                },
                {
                    name: "Chūbu-Sangaku Nationalpark ",
                    image: "assets/images/japan/park.jpg",
                    description: "Japan verfügt über eine Reihe herausragender Naturschönheiten, von denen viele als Nationalparks oder in einigen Fällen als UNESCO-Weltkulturerbe ausgewiesen sind. Einer der spektakulärsten des Landes ist der Chūbu-Sangaku-Nationalpark im Zentrum von Honshu. In den nördlichen und zentralen Regionen des Parks befindet sich die Gebirgsgruppe, die zusammen als Hida-Gebirge oder japanische Alpen bezeichnet wird.",
                    CountryId: 9,
                },
                {
                    name: "Der Atsuta-Schrein, Nagoya",
                    image: "assets/images/japan/nagoya.jpg",
                    description: "Der Atsuta-Schrein im Herzen der Stadt Nagoya ist der wichtigste Shinto-Schrein in Japan und zieht jedes Jahr mehr als fünf Millionen Besucher an. Diese religiöse Stätte wurde im ersten Jahrhundert gegründet und ist berühmt für ihre erhaltenen kaiserlichen Insignien, das \"Grasmähschwert\" (kusanagi-no-tsurugi), eines von nur drei im Land.",
                    CountryId: 9,
                },
            ]
            , {});

        return Promise.resolve();
    },

};
