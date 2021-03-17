const db = require('./models/index');

let Country = db.Country;
let User = db.User;
let Vote = db.Vote;
let Attraction = db.Attraction;
var fs = require("fs");

const typeDefs = [`

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type User {
    id: Int!
    name: String!
    fileName: String!
  }

  type Vote {
    id: Int!
    rate: Int!
    User: User!
    AttractionId: Int!
  }

  type Mutation {
    authenticate(userName: String!, file: Upload!): Int
    vote(rate: Int!, userId: Int!, attractionPath: String!): Int
  }
  
  type coordinates {
    lon: Float!
    lat: Float!
  }
  
  type Country {
    id: Int!
    name: String!
    urlName: String!
    video: String!
    capital: String!
    description: String!
    Attractions: [Attraction]
    coordinates: coordinates
    map: String!
    image: String!
    currency: String!
  }
  type Attraction {
    id: Int!
    name: String!
    image: String!
    description: String!
    Votes: [Vote]
  }

  type Query {
    Countries(language: String!): [Country]
    CountryById(id: Int!): Country
    UserByName(name: String!): User
    Attractions(countryId: Int!): [Attraction]
    CountryByNameAndLanguage(name: String!, language: String!): Country
  }

  schema {
    query: Query
    mutation: Mutation
  }
`];


const resolvers = {
    Query: {
        CountryByNameAndLanguage(root, {name: name, language: lang}, context) {
            return Country.findOne({
                where: {
                    language: lang,
                    urlName: name
                },
                include: [{
                    model: db.Attraction,
                    as: 'Attractions',
                    include: [{
                        model: db.Vote,
                        as: 'Votes',
                        include: [{
                            model: db.User,
                            as: 'User'
                        }]
                    }]
                }]
            });
        },
        UserByName(root, {name: name}, context) {
            return User.findOne({
                where: {
                    name: name
                },
            });
        },
        Countries(root, {language: lang}, context) {
            return Country.findAll({
                where: {
                    language: lang
                },
                include: [{
                    model: db.Attraction,
                    as: 'Attractions'
                }]
            });
        },
    },
    Mutation: {
        authenticate: async (root, {userName: userName, file: file}, context) => {
            return file.then(file => {
                return createUser(userName, file);
            });
        },
        vote: async (root, {rate: rate, userId: userId, attractionPath: attractionPath}, context) => {
            console.log("-----------------------");
            const attractions = await Attraction.findAll({
                where: {
                    image: attractionPath
                }
            });
            console.log("8**************");
            console.log(attractions);
            attractions.forEach( async ({id: id}) =>{
                return await vote(rate, userId, id);
            });

            return 1
        },
    },
};

async function vote(rate, userId, attractionId, ) {
    let vote = await Vote.findOne({
        where: {
            UserId: userId,
            AttractionId: attractionId
        }
    });

    if (vote) {
        vote.rate = rate;
        await vote.save({fields: ['rate']})
    } else {
        vote = await Vote.create({
            rate: rate, UserId: userId, AttractionId: attractionId
        });
    }
    return vote.id;
}


async function createUser(userName, file) {
    var user = await User.findOne({
        where: {
            name: userName
        }
    });
    if (user) {
        return null;
    } else {

        console.log("create user")
        let image = file.createReadStream();
        let fileName = `assets/${userName}-${file.filename}`;
        user = await User.create({
            name: userName, fileName: fileName,
        });
        const writeStream = fs.createWriteStream(fileName);
        await image.pipe(writeStream);

        console.log("file saved")
        return user.id;
    }
}

const jsSchema = {
    typeDefs,
    resolvers,
};
// );

module.exports = jsSchema;
