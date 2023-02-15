const SonnikService = require("../services/sonnik.service");

class SonnikController {
  async create(req, res) {
    try {
      const { letter, letterAlias, name, nameAlias, sonnikName, sonnikNameAlias, desc } = req.body;
      const sonnikData = await SonnikService.create(letter, letterAlias, name, nameAlias, sonnikName, sonnikNameAlias, desc);
      return res.json(sonnikData);
    } catch (e) {
      console.log(e.message);
      return res.status(400).json({
        error: "Ошибка при создании сонника"
      })
    }
  }

  async getAllSonnikNames(req, res) {
    try {
      const data = await SonnikService.getAllSonnikNames();
      return res.json(data)
    } catch (err) {
      console.log(err.message)
      return res.status(500).json({
        error: "Ошибка при получении данных"
      })
    }
  }

  async getAllNamesByLetter(req, res) {
    try {
      const { letter } = req.query;
      const data = await SonnikService.getAllNamesByLetter(letter);
      return res.json(data)
    } catch (err) {
      console.log(err.message)
      return res.status(500).json({
        error: "Ошибка при получении данных"
      })
    }
  }

  async getSonniksByName(req, res) {
    try {
      const { name } = req.query;
      const data = await SonnikService.getSonniksByName(name);
      return res.json(data)
    } catch (err) {
      console.log(err.message)
      return res.status(500).json({
        error: "Ошибка при получении данных"
      })
    }
  }

  async sonnikSearchByStirngName(req, res) {
    try {
      const { q } = req.query;
      const data = await SonnikService.sonnikSearchByStirngName(q);
      return res.json(data)
    } catch (err) {
      console.log(err.message)
      return res.status(500).json({
        error: "Ошибка при получении данных"
      })
    }
  }

  async getAllPopularSonnikNames(req, res) {
    try {
      const data = await SonnikService.getAllPopularSonnikNames();
      return res.json(data)
    } catch (err) {
      console.log(err.message)
      return res.status(500).json({
        error: "Ошибка при получении данных"
      })
    }
  }

  async getSonniksByAlias(req, res) {
    const { alias } = req.query;
    try {
      const data = await SonnikService.getSonniksByAlias(alias);
      return res.json(data)
    } catch (err) {
      console.log(err.message)
      return res.status(500).json({
        error: "Ошибка при получении данных"
      })
    }
  }

  async getAllAliases(req, res) {
    try {
      const data = await SonnikService.getAllAliases();
      return res.json(data)
    } catch (err) {
      console.log(err.message)
      return res.status(500).json({
        error: "Ошибка при получении данных"
      })
    }
  }


}

module.exports = new SonnikController();