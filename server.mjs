import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
http.createServer(async(req,res)=>{try{const route=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const file=path.resolve(root,'.'+(route==='/'?'/index.html':route));if(!file.startsWith(root+path.sep))throw Error();const data=await readFile(file);res.writeHead(200,{'Content-Type':({'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.mjs':'text/javascript'}[path.extname(file)]||'application/octet-stream'),'Cache-Control':'no-store'});res.end(data)}catch{res.writeHead(404);res.end('Não encontrado')}}).listen(4173,'127.0.0.1',()=>console.log('Protótipo: http://127.0.0.1:4173'));
