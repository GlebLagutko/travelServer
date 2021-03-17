'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Griechenland',
                urlName: 'greece',
                capital: 'Athen',
                id: 15,
                language: 'de',
                "map": "mapbox://styles/gleblagutko1/ckm4imiau21be17lhw911ac77",
                "video": "https://www.youtube.com/embed/WsX_SOsgvPI",
                "timezone": "Europe/Athens",
                "image": "assets/images/greece.jpg",
                "coordinates": '{"lat": "37.983810","lon": "23.727539"}',
                "currency": "EUR",
                "description": "Griechenland beherbergt einige der wichtigsten historischen Stätten der Welt sowie rund 6.000 Inseln und ist bekannt für seine natürliche Schönheit und faszinierende Kultur. Antike archäologische Stätten, Klippen, die in strahlend blaues Wasser stürzen, Sand- und Kieselstrände und ein mildes mediterranes Klima machen Griechenland zu einem der wichtigsten Reiseziele Europas.",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Akropolis, Athen",
                    image: "assets/images/greece/athens.jpg",
                    description: "Die Akropolis gilt als Symbol Athens und Griechenlands und der westlichen Zivilisation und ist ein felsiger Hügel im Herzen des modernen Athen, der von drei prächtigen Tempeln aus dem 5. Jahrhundert vor Christus gekrönt wird.",
                    CountryId: 15,
                }, {
                name: "Santorini",
                image: "assets/images/greece/santorini.jpg",
                description: "Das atemberaubende Santorini ist die dramatischste aller griechischen Inseln. Es ist am bekanntesten für die Westküstenstädte Fira und Oia, die über einer tiefblauen, mit Meer gefüllten Caldera zu hängen scheinen. Fira und Oia bestehen aus typischen weiß getünchten kykladischen kubischen Gebäuden, von denen viele in Boutique-Hotels mit Infinity-Pools umgewandelt wurden. Sie gelten als romantische Ziele, die für Hochzeiten und Flitterwochen beliebt sind.",
                CountryId: 15,
            }, {
                name: "Delphi",
                image: "assets/images/greece/delphi.jpg",
                description: "Auf dem griechischen Festland gehört Delphi zum UNESCO-Weltkulturerbe. Erbaut an den unteren Hängen des Berges Parnassus mit Blick auf eine dramatische Schlucht, war der Ort den Alten heilig, die auf Pilgerreisen hierher kamen, um Apollo (Gott des Lichts, der Prophezeiung, der Musik und der Heilung) anzubeten und das mythische Orakel um Rat zu bitten .",
                CountryId: 15,
            }, {
                name: "Korfu",
                image: "assets/images/greece/corfu.jpg",
                description: "Korfu ist eines der beliebtesten Reiseziele Griechenlands und liegt im Ionischen Meer vor der Westküste des Festlandes. Die Hauptstadt Korfu-Stadt gehört dank ihrer eleganten italienischen Architektur zum UNESCO-Weltkulturerbe - sie wurde mehrere Jahrhunderte lang von den Venezianern regiert.",
                CountryId: 15,
            }, {
                name: "Rhodos Stadt",
                image: "assets/images/greece/rhodes.jpg",
                description: "Rhodos liegt an der Ägäis in der Nähe der Türkei und ist die größte der Dodekanes-Inseln. Die Hauptstadt Rhodos, die zum UNESCO-Weltkulturerbe gehört, ist eines der beliebtesten Reiseziele Griechenlands. Es ist von einem beeindruckenden Befestigungssystem umgeben, einschließlich monumentaler Türme und Tore, die von den Rittern von St. John erbaut wurden, nachdem sie im 14. Jahrhundert die Kontrolle über die Insel übernommen hatten.",
                CountryId: 15,
            }, {
                name: "Zákynthos",
                image: "assets/images/greece/sea.jpg",
                description: "Die Insel Zákynthos (Zante) beherbergt eine wunderschöne Landschaft über und unter dem Meer und ist ein weiteres beliebtes Touristenziel in Griechenland. Es ist auch leicht zu erreichen, mit einem Gebietsschema nur 16 Kilometer vor der Westküste des Peloponnes im Ionischen Meer.",
                CountryId: 15,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
