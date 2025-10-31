import mongoose from "mongoose"
import 'dotenv/config'

function conectarBD() {
	try{
			const conexion = mongoose.connect(process.env.KEY_MONGO)
			//const conexion = mongoose.connect("mongodb:localhost:27017/backend1")
			console.log("conexión establecida con MongoAtlas")
	}
	catch(err){
		console.log("Error"+err)
	}
}

export default conectarBD