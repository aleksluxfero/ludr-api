const SonnikModel = require("../models/sonnik.model");

class SonnikService {
  async create(letter, letterAlias, name, nameAlias, sonnikName, sonnikNameAlias, desc) {
    return await SonnikModel.create({letter, letterAlias, name, nameAlias, sonnikName, sonnikNameAlias, desc});
  }

  async getAllSonnikNames(req, res) {
    return SonnikModel.aggregate([
      {
        $group: {
          _id: {sonnikName: "$sonnikName", sonnikNameAlias: "$sonnikNameAlias"},
        }
      },
      {
        $group: {
          _id: "$_id.sonnikName",
          sonnikNameAlias: {$first: "$_id.sonnikNameAlias"},
        }
      }
    ]);
  }

  async getAllNamesByLetter(letter) {

    return SonnikModel.aggregate([
      {
        $match: {letterAlias: letter}
      },
      {
        $group: {
          _id: {name: "$name", nameAlias: "$nameAlias"},
          count: {$sum: 1}
        }
      },
      {
        $group: {
          _id: "$_id.name",
          nameAlias: {$first: "$_id.nameAlias"},
          count: {$sum: "$count"}
        }
      },
      {
        $sort: {_id: 1}
      }
    ]);
  }

  async getSonniksByName(name) {
    return SonnikModel.find({ name: { $regex: new RegExp("^" + name + "$", "i") } });
  }

  async sonnikSearchByStirngName(q) {
    return SonnikModel.aggregate([
      {
        $match: { name: { $regex: new RegExp(q, "i") } },
      },
      {
        $group: {
          _id: "$name",
          data: { $first: "$$ROOT" }
        }
      },
      {
        $replaceRoot: {
          newRoot: "$data"
        }
      },
      {$limit: 20}
    ]);
  }

  async getAllPopularSonnikNames() {
    return SonnikModel.distinct('name', { isPopular: true });
  }

  async getSonniksByAlias(alias) {
    return SonnikModel.find({nameAlias: alias});
  }

  async getAllAliases() {
    return SonnikModel.distinct('nameAlias');
  }

}

module.exports = new SonnikService();