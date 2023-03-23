import { api } from "../api"

interface loginBody {
    email: string,
    senha: string
}
export async function login(body: loginBody) {
  await api.post("usuario/login", body); //essa é a rota que esta declarada na documentacao do postman

}