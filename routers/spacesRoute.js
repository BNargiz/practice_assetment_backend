const { Router } = require("express");
const router = new Router();
const Spaces = require("../models").space;
const Story = require("../models").story;

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

module.exports = router;
