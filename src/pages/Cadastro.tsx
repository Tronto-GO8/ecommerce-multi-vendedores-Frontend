import InputEmail from "@/components/loginCadastro/InputEmail"
import InputNome from "@/components/loginCadastro/InputNome"
import InputSenha from "@/components/loginCadastro/InputSenha"
import LoginSocial from "@/components/loginCadastro/LoginSocial"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import OuSeparador from "@/components/ui/OuSeparador"
import TextoLinkAlternativo from "@/components/ui/TextoLinkAlternativo"

export default function Cadastrar() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
            <div className="w-full max-w-md">
                <Card className="shadow-black">
                    <CardHeader className="space-y-4 text-center">
                        <CardTitle className="text-2xl font-bold font-sans">Criar conta</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <form className="space-y-4 border-dashed border-l-black">
                            <InputNome />
                            <InputEmail />
                            <InputSenha>Senha</InputSenha>
                            <InputSenha>Confirmar senha</InputSenha>
                            <Button type="submit" className="w-full">Criar Conta</Button>
                        </form>
                        <OuSeparador />
                        <LoginSocial />
                        <TextoLinkAlternativo texto="Já tem uma conta?" textoLink="Entrar" to="/login" />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}