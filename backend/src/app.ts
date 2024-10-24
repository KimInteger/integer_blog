import fs from "node:fs"
import path from "node:path"
import http from "node:http"

const port : number = 3000

const server = http.createServer((req,res)=>{
  console.log("hello")
})

server.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})