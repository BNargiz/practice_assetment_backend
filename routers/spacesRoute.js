const { Router } = require("express");
const router = new Router();
const Spaces = require("../models").space;
const Story = require("../models").story;
const authMiddleware = require("../auth/middleware");

router.get("/", async (request, response, next) => {
  try {
    const spaces = await Spaces.findAll();
    response.send(spaces);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const spacesById = await Spaces.findByPk(id, { include: Story });
    response.send(spacesById);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.post("/:id/stories", authMiddleware, async (request, response, next) => {
  try {
    const user = request.user;
    const { name, content, imageUrl } = request.body;
    const { id } = request.params;
    if (!name || !content || !imageUrl) {
      return response
        .status(400)
        .send("Please provide a name, content and a imageUrl");
    }
    const space = await Spaces.findByPk(id);
    if (space.userId !== user.id) {
      res.status(400).send("This is not your space");
      return;
    }
    const newStory = await Story.create({
      name,
      content,
      imageUrl,
      spaceId: space.id,
    });

    response.status(200).send(newStory);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
