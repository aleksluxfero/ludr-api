const Router = require("express").Router;
const SonnikController = require("../controllers/sonnik.controller");

const router = new Router();

/*----------------------------------SONNIK----------------------------------*/

//Создать сонник
router.post("/sonnik", SonnikController.create);
// Получить все названия сонников /api/sonnik/sonnikname
router.get("/sonnik/sonnikname", SonnikController.getAllSonnikNames);
// Получить все Имена по букве alias /api/sonnik/name?letter=а
router.get("/sonnik/name", SonnikController.getAllNamesByLetter);
// Получить сонники по имени  /api/sonnik?name=бог
router.get("/sonnik", SonnikController.getSonniksByName);
// Получить все сонники по вхождению строки /api/sonnik/search?q=ав
router.get("/sonnik/search", SonnikController.sonnikSearchByStirngName);
// Получить имена всех популярных интерпретаций
router.get("/sonnik/popular", SonnikController.getAllPopularSonnikNames);
// Получить сонники по алиасу /api/sonnik/alias?alias=bog
router.get("/sonnik/alias", SonnikController.getSonniksByAlias);
// Получить все алиасы /api/sonnik/aliases
router.get("/sonnik/aliases", SonnikController.getAllAliases);
/*----------------------------------END----------------------------------*/


module.exports = router;
