import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { iconeComInput } from "@/styles/variaveisTailwind/Reutilizaveis"
import { Mail } from "lucide-react"


export default function InputEmail() {
    return (
        <div className="space-y-2">
            <Label className=" text-sm">Entrar</Label>
            <div className="relative">
                <Mail className={iconeComInput} />
                <Input
                    className="pl-10"
                    type="email"
                    placeholder="admin@exemplo.com"></Input>
            </div>
        </div>
    )
}