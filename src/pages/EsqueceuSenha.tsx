import InputEmail from "@/components/loginCadastro/InputEmail"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function EsqueceuSenha() {
    const [estaCarregando, setEstaCarregando] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setEstaCarregando(true)
    }
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
            <Card className="shadow-black">
                <CardHeader className="space-y-4" >
                    <Link to="/login"
                        className="inline-flex items-center text-sm hover:text-gray-600 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar ao login
                    </Link>

                    <div>
                        <CardTitle className="text-2xl font-bold font-sans">Esqueceu sua senha</CardTitle>
                        <CardDescription className="text-sm mt-2">
                            Digite seu email para receber um link de recuperação
                        </CardDescription>
                    </div>



                </CardHeader>
                <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <InputEmail />

                        <Button
                            type="submit"
                            className="w-full  border border-white bg-[#303030] text-white hover:bg-gray-900"
                            disabled={estaCarregando}>
                            {estaCarregando ? "Enviando..." : "Enviar link de recuperação"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}