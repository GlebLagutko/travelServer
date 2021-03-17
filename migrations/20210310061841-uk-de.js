'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Großbritannien',
                urlName: 'uk',
                capital: 'London',
                id: 21,
                language: 'de',
                "map": "mapbox://styles/gleblagutko1/ckm3tjiv09qrs17lbtyv7g8yx",
                "video": "https://www.youtube.com/embed/XkRFSnxXQ_w",
                "timezone": "Europe/London",
                "image": "assets/images/uk.jpg",
                "coordinates": '{"lat": "51.509865", "lon": "-0.118092"}',
                "currency": "GBP",
                description: "Vereinigtes Königreich, Inselland vor der nordwestlichen Küste des europäischen Festlandes. Das Vereinigte Königreich umfasst die gesamte Insel Großbritannien, zu der England, Wales und Schottland gehören, sowie den nördlichen Teil der Insel Irland. Der Name Großbritannien wird manchmal verwendet, um sich auf das Vereinigte Königreich als Ganzes zu beziehen. Die Hauptstadt ist London, eines der weltweit führenden Handels-, Finanz- und Kulturzentren.",
            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: "Stonehenge",
                    image: "assets/images/uk/stone.jpg",
                    description: "Stonehenge, 16 km nördlich der historischen Stadt Salisbury in der Salisbury Plain, ist Europas bekanntestes prähistorisches Denkmal. Ausstellungen im ausgezeichneten Besucherzentrum von Stonehenge bereiteten die Bühne für einen Besuch. Sie erklärten anhand von audiovisuellen Erlebnissen und mehr als 250 antiken Objekten, wie die Megalithen zwischen 3000 und 1500 v. Chr. Errichtet wurden, und tauschten Informationen über das Leben in dieser Zeit aus.",
                    CountryId: 21,
                }, {
                name: "Tower of London",
                image: "assets/images/uk/tower.jpg",
                description: "Gefängnis, Palast, Schatzkammer, Observatorium und Menagerie: Der Tower of London hat alles getan und ist eine der Hauptattraktionen in London. Dieses Weltkulturerbe gilt als das wichtigste Gebäude Englands und bietet genug zu sehen und zu erleben, um die Besucher stundenlang zu beschäftigen.",
                CountryId: 21,
            }, {
                name: "Die römischen Bäder",
                image: "assets/images/uk/bath.jpg",
                description: "Wenn Sie nur Zeit haben, eine kleinere Stadt in England zu besuchen, können Sie es nicht besser machen als in Bath. Diese bemerkenswert schöne Stadt in Somerset bietet mehr fantastische Touristenattraktionen, als Sie sich an einem Tag wünschen können.",
                CountryId: 21,
            }, {
                name: "Chester Zoo",
                image: "assets/images/uk/zoo.jpg",
                description: "Der Chester Zoo befindet sich in Upton, etwas mehr als 1,6 km nördlich des Stadtzentrums von Chester. Er ist Englands meistbesuchte Sehenswürdigkeit außerhalb Londons und einer der besten Orte für Familien in England.",
                CountryId: 21,
            }, {
                name: "Devil's Bridge",
                image: "assets/images/uk/bridge.jpg",
                description: "Die Devil's Bridge liegt 19 km von der Küstenstadt Aberystwyth entfernt und besteht aus drei spektakulär übereinander gestapelten Brücken. Die älteste stammt aus dem 11. Jahrhundert und die neueste wurde 1901 erbaut. Sie überspannen die Rheidol-Schlucht, in die der Fluss Mynach 300 Fuß eintaucht ins Tal weit unten.",
                CountryId: 21,
            }, {
                name: "Edinburgh Schloss",
                image: "assets/images/uk/castle.jpg",
                description: "Die Steintürme und Mauern des Edinburgh Castle dominieren seit dem 13. Jahrhundert die Skyline von Edinburgh. Es befindet sich auf einem schwarzen Basaltfelsen und bietet einen herrlichen Blick auf die Stadt sowie eine Reise durch Schottlands turbulente Geschichte.",
                CountryId: 21,
            },
            ]
            , {});

        return Promise.resolve();
    },

};
