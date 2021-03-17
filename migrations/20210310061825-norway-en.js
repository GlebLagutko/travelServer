'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Countries',
            [{
                name: 'Norway',
                urlName: 'norway',
                capital: 'Oslo',
                id: 1,
                language: 'en',
                description: "Norway, country of northern Europe that occupies the westernhalf of the Scandinavian peninsula. Nearly half of the inhabitants of the country live in the far south, in the region around Oslo, the capital. About two-thirds of Norway is mountainous, and off its much-indented coastline lie, carved by deep glacial fjords, some 50,000 islands.",
                coordinates: '{"lat": "59.911491", "lon": "10.757933"}',
                video: "https://www.youtube.com/embed/Scxs7L0vhZ4",
                currency: "NOK",
                timezone: "Europe/Oslo",
                map: "mapbox://styles/gleblagutko1/ckm3hgeoeb04a17qp1zl3qhx6",
                image: "assets/images/norway.jpg",

            }]
            , {});
        await queryInterface.bulkInsert('Attractions',
            [
                {
                    name: 'Sognefjord',
                    image: '/assets/images/norway/sognefjord.jpg',
                    description: 'The largest of Norway\'s fjords, Sognefjord reaches 204 kilometers inland from the coastal village of Skjolden and branches off into countless smaller inlets and fjords along the way.',
                    CountryId: 1,
                },
                {
                    name: "Viking Ship Museum, Oslo",
                    image: "/assets/images/norway/museum.jpg",
                    description: "The largest of Norway's museums dedicated to their seafaring ancestors, the Viking Ship Museum (Vikingskipshuset på Bygdøy) in Oslo features three 9th-century Viking vessels, each of which had been laid to rest as burial chambers for prominent Vikings.",
                    CountryId: 1
                },
                {
                    name: "Geirangerfjord",
                    image: "/assets/images/norway/geirangerfjord.jpg",
                    description: "Part of the spectacular Fjord Norway network - and regularly topping the UNESCO World Heritage Sites list - the Geirangerfjord region north of Ålesund offers some of the finest scenery anywhere in Norway.",
                    CountryId: 1,
                },
                {
                    name: "Akershus Fortress, Oslo",
                    image: "/assets/images/norway/castle.jpg",
                    description: "The Akershus Fortress (Akershus Festning) is a medieval castle commissioned by king Håkon V in 1299, later turned into a Renaissance royal residence by king Christian IV in the early 17th century. It sits on a promontory overlooking the Oslofjord, and the grounds have spectacular views over the harbor.",
                    CountryId: 1,
                },
                {
                    name: "Pulpit Rock/Preikestolen",
                    image: "/assets/images/norway/rock.jpg",
                    description: "The most famous tourist attraction in Ryfylke is this spectacular natural viewing point 604 metres above sea level. Take the four-hour hike up to Preikestolen between April and October for the best and most Instagrammable viewing conditions.",
                    CountryId: 1,
                },
                {
                    name: "Bryggen Hanseatic Wharf",
                    image: "/assets/images/norway/bryggen.jpg",
                    description: "Bryggen Hanseatic Wharf\nThis wharf has been one of the main trading hubs in Bergen since the Viking Age. The historic houses from the 14th century and mid-16th century are now home to numerous artists producing jewellery, textiles and leather goods.",
                    CountryId: 1,
                }

            ]
            , {});

        return Promise.resolve();
    },

};
