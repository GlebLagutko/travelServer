'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Countries',
      [{
        name: 'Norwegen',
        urlName: 'norway',
        capital: 'Oslo',
        id: 3,
        language: 'de',
        description: "Norwegen, Land Nordeuropas, das die westliche Hälfte der skandinavischen Halbinsel einnimmt. Fast die Hälfte der Einwohner des Landes lebt im äußersten Süden in der Region um die Hauptstadt Oslo. Ungefähr zwei Drittel Norwegens sind bergig, und vor seiner stark eingedrückten Küste liegen etwa 50.000 Inseln, die von tiefen Gletscherfjorden geschnitzt wurden.",
        coordinates: '{"lat": "59.911491", "lon": "10.757933"}',
        video: "https://www.youtube.com/embed/Scxs7L0vhZ4",
        currency: "NOK",
        timezone: "Europe/Oslo"
      }]
      , {});
    await queryInterface.bulkInsert('Attractions',
      [{
        name: "Sognefjord",
        image: "/assets/images/norway/sognefjord.jpg",
        description: "Der Sognefjord, der größte Fjord Norwegens, erreicht 204 Kilometer landeinwärts vom Küstendorf Skjolden und zweigt auf dem Weg in unzählige kleinere Buchten und Fjorde ab.",
        CountryId: 3,
      },
        {
          name: "Wikingerschiffsmuseum, Oslo",
          image: "/assets/images/norway/museum.jpg",
          description: "Das Wikingerschiffsmuseum (Vikingskipshuset på Bygdøy) in Oslo ist das größte norwegische Museum, das seinen Vorfahren der Seefahrt gewidmet ist. Es verfügt über drei Wikingerschiffe aus dem 9. Jahrhundert, die jeweils als Grabkammern für prominente Wikinger zur Ruhe gelegt wurden.",
          CountryId: 3,
        },
        {
          name: "Geirangerfjord",
          image: "/assets/images/norway/geirangerfjord.jpg",
          description: "Die Region Geirangerfjord nördlich von Ålesund ist Teil des spektakulären Fjordnorwegen-Netzwerks und steht regelmäßig ganz oben auf der Liste der UNESCO-Welterbestätten. Sie bietet einige der schönsten Landschaften Norwegens.",
          CountryId: 3,
        },
        {
          name: "Festung Akershus, Oslo",
          image: "/assets/images/norway/castle.jpg",
          description: "Die Akershus-Festung (Akershus Festning) ist eine mittelalterliche Burg, die 1299 von König Håkon V. in Auftrag gegeben wurde und später im frühen 17. Jahrhundert von König Christian IV. In eine königliche Renaissance-Residenz umgewandelt wurde. Es liegt auf einem Vorgebirge mit Blick auf den Oslofjord und das Gelände bietet einen spektakulären Blick über den Hafen.",
          CountryId: 3,
        },
        {
          name: "Preikestolen",
          image: "/assets/images/norway/rock.jpg",
          description: "Die berühmteste Touristenattraktion in Ryfylke ist dieser spektakuläre natürliche Aussichtspunkt 604 Meter über dem Meeresspiegel. Machen Sie zwischen April und Oktober die vierstündige Wanderung nach Preikestolen, um die besten und instagrammartigsten Betrachtungsbedingungen zu erhalten.",
          CountryId: 3,
        },
        {
          name: "Bryggen Hanseatic Wharf",
          image: "/assets/images/norway/bryggen.jpg",
          description: "Dieser Kai ist seit der Wikingerzeit eines der wichtigsten Handelszentren in Bergen. In den historischen Häusern aus dem 14. und Mitte des 16. Jahrhunderts befinden sich heute zahlreiche Künstler, die Schmuck, Textilien und Lederwaren herstellen.",
          CountryId: 3,
        }
      ]
      , {});

    return Promise.resolve();
  },

};
