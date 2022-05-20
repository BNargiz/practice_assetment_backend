const { Router } = require("express");
const res = require("express/lib/response");

const router = new Router();
const Story = require("../models").story;
const Space = require("../models").space;

router.delete("/delete/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const story = await Story.findByPk(id);
    const destroyedStory = await story.destroy();
    response.send({ message: "Story deleted", destroyedStory });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
