import express from "express"
import rutas from "./routes/rutas.js"
import conectarBD from "./bd/bd.js"

const app = express()

async function conexion(){
	await conectarBD()
}
conexion()

app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use("/", rutas)

app.get("/", function(req, res){
	res.send("Hola desde nodejs")

})	

const PORT = process.env.PORT || 3000
app.listen(PORT, function (){
	console.log("Aplicación en http://localhost:"+PORT)
})
