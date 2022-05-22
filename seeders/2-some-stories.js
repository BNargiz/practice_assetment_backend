"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "The Rabbit and the Turtle",
          content:
            "One day a rabbit was boasting about how fast he could run. He was laughing at the turtle for being so slow. Much to the rabbits surprise, the turtle challenged him to a race. The rabbit thought this was a good joke and accepted the challenge. The fox was to be the umpire of the race. As the race began, the rabbit raced way ahead of the turtle, just like everyone thought.The rabbit got to the halfway point and could not see the turtle anywhere. He was hot and tired and decided to stop and take a short nap. Even if the turtle passed him, he would be able to race to the finish line ahead of him. All this time the turtle kept walking step by step by step. He never quit no matter how hot or tired he got. He just kept going.However, the rabbit slept longer than he had thought and woke up. He could not see the turtle anywhere! He went at full speed to the finish line but found the turtle there waiting for him",
          imageUrl:
            "https://www.moralstories.org/wp-content/uploads/2009/05/Rabbit-Turtle.jpg.webp",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Little Mermaid",
          content:
            "Long long ago, in the Deep Sea kingdom, there lived the sea king with his five mermaid daughters. Sirenetta was the youngest and the loveliest among them. She had a beautiful voice and everybody from far and wide came to hear her sing and praised her voice and her beauty.One day, while Sirenetta was swimming on the surface of the water and watching ships go by, she saw a young man falling off his ship. She swam swiftly to save him from drowning and dragged him to the shore. Soon, people found the man on the shore and Sirenetta swam away. This man was actually the prince of a kingdom. When he became conscious, the prince looked around for the girl who had saved him but no one knew who she was.Sirenetta often thought of the young man and fell in love with the prince, but she was sad because she could never be like all the other ladies he knew. They had two feet and she had a fish tail!",
          imageUrl: "https://m.media-amazon.com/images/I/51FWwaL7YvL.jpg",

          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Kitten",
          content:
            "Once there lived a brother and sister- Vasya and Katya. They had a cat. Once, in the spring season, the cat was lost. The children could not find it anywhere, though they looked for it everywhere.One day, they heard many soft meows from the roof of the barn, while they were playing nearby. Vasya climbed onto the roof, and found to his great joy that their cat had given birth to four five lovely kittens. He screamed in delight, to Katya, “I’ve found her! It’s out cat..and she had five kittens..They look so sweet. Come here, quick!”Katya and Vasya visited the roof of the barn everyday. They fed the mother cat very well so that she will have enough milk to feed her babies. The barn roof had become the home of the cats.",
          imageUrl:
            "https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SOPHIE´S LITTLE DOG",
          content:
            "Once upon a time, there was a girl called Sophie who really wished to have a puppy, but her parents were never at home because of their work, so they couldn’t take care of a little dog.Sophie tried to convince her parents, but they always said that it was impossible to have an animal because it was a big responsibility. It is not enough to just feed the animal, you also have to play with him, wash him, spend time with him, and actually it is like having  a new member of the family",
          imageUrl:
            "https://kpets-prod.s3.amazonaws.com/1ad468b86a4ed8b8548e25236e96106040f3f88f.jpg?1406866654",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("stories", null, {});
  },
};
