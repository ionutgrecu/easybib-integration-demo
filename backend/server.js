const port = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const cors = require("cors");
const faker = require("faker");

const sequelize = new Sequelize(
  "bib",
  "bib_user",
  "5O7EkA8O2A7E5u6u5Ey4su6Inac3tE",
  {
    host: "s1.websea.net",
    port: 13000,
    dialect: "mariadb",
  }
);

const Author = sequelize.define("author", {
  name: Sequelize.STRING(64),
  function: Sequelize.STRING(64),
  email: Sequelize.STRING(128),
});

const Publication = sequelize.define(
  "publication",
  {
    title: Sequelize.STRING(255),
    type: Sequelize.ENUM("book", "newspaper", "paperwork", "other"),
    documentDate: Sequelize.DATEONLY,
  },
  {
    indexes: [
      {
        fields: ["type"],
      },
    ],
  }
);

Publication.hasMany(Author, {
  onDelete: "CASCADE",
});
Author.belongsTo(Publication);

const app = express();

app.use((req, res, next) => {
  console.log("Requested " + req.url);
  next();
});
app.use(cors());
app.use(bodyParser.json());

app.get("/sync", async (req, res) => {
  try {
    await sequelize.sync();
    res.status(201).json({ message: "table created" });
  } catch (error) {
    console.warn(error);
    res.status(500).json({ message: "Error sync" });
  }
});

app.get("/seed", async (req, res) => {
  try {
    const pubTypes = ["book", "newspaper", "paperwork", "other"];
    const authorFunctions = ["author", "coauthor", "profesor", "doctor"];
    
    for (let i = 0; i < 10; i++) {
      let title = faker.lorem.words(Math.floor(Math.random() * 3) + 3);
      title = title.charAt(0).toUpperCase() + title.slice(1);

      let publication = await Publication.create({
        title: title,
        type: pubTypes[Math.floor(Math.random() * 3)],
        documentDate: faker.date.past(50),
      });

      let authorCount=Math.floor(Math.random()*7)+1
      for(let j=0;j<authorCount;j++)
      await Author.create({
        name: faker.name.findName(),
        function: authorFunctions[Math.floor(Math.random() * 3)],
        email: faker.internet.email(),
        publicationId:publication.id
      });
    }
    res.status(201).json({ message: "Database seeded" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error seed" });
  }
});

console.log(`Listening on ${port}`);
app.listen(port);
