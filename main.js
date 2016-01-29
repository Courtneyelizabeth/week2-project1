//THE OBJECT OF MY AFFECTION: OBJECTS
//IN CLASS OBJECT EXERCISES

// For any methods that we didn't cover, please refer to the Object Documentation.
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
<script type="text/javascript" src="main.js"></script>
// 1. Create an object called "me" that describes you with your name, city, and job title.
var me = {
  name: "Courtney",
  city: "Denver",
  jobTitle: "globetrotter"
};
//console.log("Question 1");
console.log(me);
//console.log(yourAnswer);
//Object {name: "Courtney", city: "Denver", jobTitle: "globetrotter"}

// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//   
//                            family: ['Joan', 'Kyle', 'Hank'] }
me.family = ["Chris", "Kyle", "James"];
console.log(me);
//Object {name: "Courtney", city: "Denver", jobTitle: "globetrotter", family: Array[3]}

// 3. Using the "me" object, use two different methods of accessing your city.
//Dot Notation:
console.log(me.city);  
//Denver
console.log(me["city"]);
//"Denver"
// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };
                       

// 4. Access Penny's dinner choice (this will be the second item in his dinneChoice array)
console.log(invitees.adults[0].dinnerChoice[1]);
//beef

// 5. Access Pablo's table number.
console.log(invitees.children[1].table);
//4

// 6. Access Lauren's seating specialConsideration.
console.log(invitees.adults[2].specialConsiderations.seating);
//Don't sit her next to ex husband at table 8.

// 7. Access Billy's dessert choice (this will be the third item in his dinneChoice array)
console.log(invitees.adults[1].dinnerChoice[2]);
//sorbet

// 8. Access Ada's allergies.
console.log(invitees.children[2].allergies);
//["boys"]

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."
var laurensappetizer = invitees.adults[2].dinnerChoice[0];
var laurensdinner = invitees.adults[2].dinnerChoice[1];
var laurensdessert = invitees.adults[2].dinnerChoice[2];

var lauren = "Lauren's appetizer is " + laurensappetizer + ". She will be eating "+ laurensdinner +" for dinner and has selected "+ laurensdessert +" as her dessert.";

// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
var jsWorkshop = new Object();
console.log(jsWorkshop);
//object {}

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
var jsWorkshop = new Object();
jsWorkshop.classmates = ["Michelle", "Sam", "Tommy", "Tim", "Alexandria"];
console.log(jsWorkshop.classmates);
// 12. Acesss the third classmate in your "jsWorkshop" object.
jsWorkshop.classmates[2];
//"Tommy"
// 13. Get the length of the fourth classmate's name.
jsWorkshop.classmates[3].length;
//3

// 14. Clear the classmates value.
delete jsWorkshop.classmates

// 15. Create an emtpy array called "books".
var books = [];
// Create three objects that contain book titles, their author, and number of pages.
var book1 = {borntoRun:
 {title: "Born to Run",
  author: "Christopher McDougall",
  pages: 287
}};

var book2 = {intoThinAir:
  {title: "Into Thin Air",
  author: "Jon Krakauer",
  pages: 333

}};

var book3 = {theKiteRunner:
  {title: "The Kite Runner",
  author: "Khaled Hosseini",
  pages: 400
}};
// Insert the three objects into the "books" array.
books.push(book1,book2,book3);
//3
console.log(books);
//[object, object, object]
// (Feel free to make up the titles. And the authors. Have fun. No pressure.)
// Example of desired array: [ youHadMeAtWoof, bangkokHaunts, theCatcherInTheRye]
// Example of desired object: {title: "You Had Me at Woof", author: "Julie Klum", pages: 207}
// Final desired result:
    var books = [{youHadMeAtWoof: {title: "You Had Me at Woof",
                                  author: "Julie Klum",
                                  pages: 207
                                  },
                   theCatcherInTheRye: {
                                  title: "The Catcher in the Rye",
                                  author: "JD Salinger",
                                  pages: 214
                                  },
                   bangkokHaunts: {
                                  title: "Bangkok Haunts",
                                  author: "John Burdett",
                                  pages: 569,
                                  }
                }]
// 15a. Access the author of the first book.
var authorName = books[0].borntoRun.author
console.log(authorName);
//Christopher McDougall

// 15b. Print the length of the author the the third book.
var authorLength = books[2].theKiteRunner.author.length;
console.log(authorLength);
//15


// 16. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
// (Go ahead and make this up, too. Get wild.)
books[0].borntoRun.dateRead = "July 1, 2012";
books[1].intoThinAir.dateRead = "December 23, 2006";
books[2].theKiteRunner.dateRead = "June 5, 2014";

console.log(book1);
//Object {title: "Born to Run", author: "Christopher McDougall", pages: "287", dateRead: "2013"}

console.log(book2);
//Object {title: "Into Thin Air", author: "Jon Krakauer", pages: "333", dateRead: "2003"}

console.log(book3);
//Object {title: "The Kite Runner", author: "Khaled Hosseini", pages: "400", dateRead: "2014"}

// 17. Remove the second book from the books Array.
delete books[1]
console.log(books);
//[Object, 2: Object]
// Bonus: Explain, in your own words, the difference between Literal Notation and Constructor.
          //Literal Notation: Create an object and wrap its properties. 
          //Constructor: The variable is set equal to the value. 

// 17. Let's play a game. Create an object (like we did with the bike in class) and assign it at least five properties.
// The class will guess what your object is based on it's properties.
var thing = {
  actor : "Fred Armisen",
  actress: "Carrie Brownstein",
  medium: "tv",
  setting: "Portland",
};
var thing = "portlandia";
//undefined
thing == "lost"
//false
thing == "portlandia"
//true

// You're a zookeeper and keeping a detailed log of each of the animals in your zoo.
// 18. Create an empty object called "zoo"
var zoo = {};
// 19. Create assign three animals as your keys in the "zoo" object. The values of the animals should be empty objects.
zoo.panda = {}
zoo.penguin = {}
zoo.lion = {}
console.log(zoo);

//Object {panda: Object, penguin: Object, lion: Object}
// 20. Within each animal empty object, assign a key/value pair of "timeSlept" and a number indicating the hours of sleep each animal got. (Make this up, obvi)
zoo.panda.timeSlept = 16;
zoo.penguin.timeSlept = 6;
zoo.lion.timeSlept = 4;
// 21. Within each animal object, assign a object pair consisting of a key called "meals" and an empty array as the value.
zoo.panda.meals = [];
zoo.penguin.meals = [];
zoo.lion.meals = [];
// 22. Within each animal's meals array, create two objects with keys of "monday" and "wednesday". You only feed those jerks twice a week. It's fine.
var monday = {monday: {} };
var wednesday = {wednesday: {} };
zoo.panda.meals.push(monday, wednesday);
zoo.penguin.meals.push(monday, wednesday);
zoo.lion.meals.push(monday, wednesday);
console.log(zoo);
// 23. In the individual days of the week, create an object with the key of each meal ("breakfast", "lunch", "dinner") and a made up value of what they ate.
// That array should look like this (within the meals object, within the animal object, within the zoo object):
  // [ { monday: {
  //   breakfast: "cheetos on top of greek yogurt",
  //   lunch: "6 gallons of Diet Coke",
  //   dinner: "leftover lasagna"
  // }},
  //  {wednesday: {
  //   breakfast: "cashews, diced apples, tuna, grapes, BubbleYum",
  //   lunch: "a ham and cheddar lunchable",
  //   dinner: "I put my thing down, flip it, and reverse it"
  // }}]

 zoo.panda.meals[0].monday.breakfast = "smoothie";
 zoo.panda.meals[0].monday.lunch = "omelet";
 zoo.panda.meals[0].monday.dinner = "bamboo";
 zoo.panda.meals[1].wednesday.breakfast = "apples";
 zoo.panda.meals[1].wednesday.lunch= "peanuts";
 zoo.panda.meals[1].wednesday.dinner = "water";

 zoo.penguin.meals[0].monday.breakfast = "fishy";
 zoo.penguin.meals[0].monday.lunch = "shrimp";
 zoo.penguin.meals[0].monday.dinner = "escargot";
 zoo.penguin.meals[1].wednesday.breakfast = "susies goldfish";
 zoo.penguin.meals[1].wednesday.lunch = "dogfishhead IPA";
 zoo.penguin.meals[1].wednesday.dinner= "seafood paella";

// 24. Damn it. The night zookeeper just informed you that your second animal took a nap right before bed time. Add two hours to his "timeSlept" value.
var time = zoo.penguin.timeSlept
zoo.penguin.timeSlept = time +=2;
//8
console.log(zoo.penguin.timeSlept);
//8

// 25. To each animal object, add a "favoriteActivities" key with the value being an array of three of his/her favorite activities.

zoo.panda.favoriteActivities = ["rolling on its back", "this", "coloring"];
zoo.penguin.favoriteActivities = ["being cute", "skiing", "playing in snow"];
zoo.lion.favoriteActivities = ["being the king", "scaring people", "coding"];
console.log(zoo);
// 26. Your first animal just tossed his lunch at the zoo visitors. Change his monday lunch value to an empty string.
zoo.panda.meals[0].monday.lunch = "";
// 27. You know your "zoo" object? The owner wants to add zookeepers to the object, too. But before we do that, we need to make sure
// the animals stay separate from the zookeepers. To do this, create an object within the "zoo" object. The key will be "animals" and the value will be an array
// containing the three animals you already defined.
var wildThangs = zoo;
zoo = {animals: wildThangs};
console.log(zoo);

// 28. To the "zoo" object, add an object named "zookeepers" with the value being and empty object.
zoo.zookeepers = {}
// 29. To the empty "zookeepers" object, add two objects with their keys being two names and their values being an empty object.
zoo.zookeepers.dude = {};
zoo.zookeepers.lady = {};
// 30. This joker wants you to add the "hireDate" for each zookeeper. Within the empty object attached to each name, assign a key/value pair of
// "hireDate" and the value being a string of hire date.
zoo.zookeepers.dude.hireDate = "Today";
zoo.zookeepers.lady.hireDate = "July 3rd";

console.log(zookeepers);