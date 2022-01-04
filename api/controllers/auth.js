const Products = require("../models/Products");
require ("../models/asosiations")

class AuthController {

    static async allFavorites (req, res){
        try {
            const user= req.user
            const product= await user.getProperties()
            res.status(200).send(product)
        } catch (error) {
            console.log(error);
        }
    }
    
    static async addFavorites (req, res){
        try {
            const user= req.user
            const product= await Products.findByPk(req.params.id)

            await user.addProperty(product)
            res.sendStatus(201)

            res.status(200).send(product)
        } catch (error) {
            console.log(error);
        }
    }

    static async removeFavorites (req, res){
        try {
            const user= req.user
            const product= await Products.findByPk(req.params.id)
            
            await user.removeProperty(product)
            res.sendStatus(201)

            res.status(200).send(product)
        } catch (error) {
            console.log(error);
        }
    }

}


module.exports = AuthController