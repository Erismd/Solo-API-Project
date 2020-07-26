import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Movies } from "../entity/movies";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    // TOOD: Coudln't import json.file. Will do it later!!!!!!!!
    // yarn seed
    // Table => "public.user"
    await connection
      .createQueryBuilder()
      .insert()
      .into(Movies)
      .values([
        {
          title: "Harry Potter and the Philosopher's Stone",
          director: "Chris Columbus",
          released_date: "5/4/1849",
          rating: 7,
          country: "UK",
          reviews:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.",
        },
        {
          title: "Ron Clark Story, The",
          released_date: "5/4/1849",
          director: "Arvin Biner",
          rating: 9,
          country: "China",
          reviews:
            "vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis",
        },
        {
          title: "D.A.R.Y.L.",
          released_date: "8/3/1822",
          director: "Julianne Sawday",
          rating: 9,
          country: "China",
          reviews:
            "ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat",
        },
        {
          title: "Black Christmas",
          released_date: "7/18/1922",
          director: "Joellyn Calbert",
          rating: 3,
          country: "France",
          reviews:
            "lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt",
        },
        {
          title: "Malèna",
          released_date: "6/22/1972",
          director: "Arvin Milkeham",
          rating: 5,
          country: "Indonesia",
          reviews:
            "ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio",
        },
        {
          title: "Wind",
          released_date: "3/1/1893",
          director: "Rozanne Borrows",
          rating: 6,
          country: "China",
          reviews:
            "nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio",
        },
        {
          title: "Wolves",
          released_date: "7/3/1921",
          director: "Emili Vynall",
          rating: 4,
          country: "Portugal",
          reviews:
            "luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis",
        },
        {
          title: "Saimaa Gesture, The (Saimaa-ilmiö)",
          released_date: "3/25/1924",
          director: "Deidre Draisey",
          rating: 4,
          country: "Bangladesh",
          reviews:
            "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent",
        },
        {
          title: "Road to Singapore",
          released_date: "7/16/1890",
          director: "Tracy Pavluk",
          rating: 3,
          country: "Philippines",
          reviews:
            "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
        },
        {
          title: "Street Smart",
          released_date: "8/7/1824",
          director: "Jeffrey Kase",
          rating: 9,
          country: "United States",
          reviews:
            "vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet",
        },
        {
          title: "Splash",
          released_date: "9/13/1955",
          director: "Denise Hutsby",
          rating: 3,
          country: "Thailand",
          reviews:
            "quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis",
        },
        {
          title: "Adventures of Priscilla, Queen of the Desert, The",
          released_date: "6/27/2020",
          director: "Bonnie Brahm",
          rating: 3,
          country: "France",
          reviews:
            "consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac",
        },
        {
          title: "Comet",
          released_date: "7/29/1864",
          director: "Laureen Choffin",
          rating: 10,
          country: "Philippines",
          reviews:
            "sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget",
        },
        {
          title: "Father of the Bride Part II",
          released_date: "12/12/1854",
          director: "Lind Thombleson",
          rating: 7,
          country: "China",
          reviews:
            "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",
        },
        {
          title: "Here Without Me (Inja bedoone man)",
          released_date: "5/13/2010",
          director: "Rollo Capini",
          rating: 1,
          country: "Tanzania",
          reviews:
            "ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit",
        },
        {
          title: "Betty Blue (37°2 le matin)",
          released_date: "11/15/1812",
          director: "Court Crambie",
          rating: 9,
          country: "Philippines",
          reviews:
            "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in",
        },
        {
          title: "After Five in the Jungle (Nach Fünf im Urwald)",
          released_date: "7/22/1841",
          director: "Tobye Rutherforth",
          rating: 1,
          country: "French Polynesia",
          reviews:
            "facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget",
        },
        {
          title: "Pelican, The (Le Pelican)",
          released_date: "8/5/1911",
          director: "Ritchie Rizzolo",
          rating: 4,
          country: "Poland",
          reviews:
            "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue",
        },
        {
          title:
            "8 Diagram Pole Fighter, The (a.k.a. Invincible Pole Fighter) (Wu Lang ba gua gun)",
            released_date: "11/13/1950",
          director: "Ernestus Sherr",
          rating: 8,
          country: "Macedonia",
          reviews:
            "pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium",
        },
        {
          title: "Envy (Kiskanmak)",
          released_date: "4/11/1827",
          director: "Adelaida Kroger",
          rating: 7,
          country: "China",
          reviews:
            "penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque",
        },
        {
          title: "Lucky Jordan",
          released_date: "3/9/1805",
          director: "Faun Fenty",
          rating: 1,
          country: "Russia",
          reviews:
            "dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
        },
      ])
      .execute();
  }
}
