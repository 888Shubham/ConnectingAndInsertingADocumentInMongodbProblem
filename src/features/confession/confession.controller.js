import ConfessionModel from "./confession.model.js";

export default class ConfessionController {
  async create(req, res) {
    try {
      const { title, body, author } = req.body;
      const confession = await ConfessionModel.create(title, body, author);
      res.status(201).send(confession);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }
}
