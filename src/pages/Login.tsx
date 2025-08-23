import InputEmail from "@/components/loginCadastro/InputEmail"
import InputSenha from "@/components/loginCadastro/InputSenha"
import LoginSocial from "@/components/loginCadastro/LoginSocial"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import OuSeparador from "@/components/ui/OuSeparador"
import TextoLinkAlternativo from "@/components/ui/TextoLinkAlternativo"
import { Link } from "react-router-dom"

export default function Principal() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
            <Card className="shadow-black">
                <CardHeader className="space-y-4 text-center">
                    <CardTitle className="text-2xl font-bold font-sans rounded-x1">Entrar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form className="space-y-4">
                        <InputEmail />
                        <InputSenha>Senha</InputSenha>

                        <div className="text-right pt-4">
                            <Link to="/esqueceusenha" className="text-sm hover:text-gray-600">Esqueceu a senha?</Link>
                        </div>

                        <Button type="submit" className="w-full">Entrar</Button>
                    </form>
                    <OuSeparador />
                    <LoginSocial />
                    <TextoLinkAlternativo texto="Não tem um conta?" textoLink="Cadastrar" to="/cadastro" />
                </CardContent>
            </Card>
        </div>
    )
}