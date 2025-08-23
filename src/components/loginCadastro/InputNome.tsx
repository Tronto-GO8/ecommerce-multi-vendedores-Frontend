import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { iconeComInput } from "@/styles/variaveisTailwind/Reutilizaveis"
import { User } from "lucide-react"

export default function InputNome() {
    return (
        <div className="space-y-2">
            <Label className=" text-sm">Nome</Label>
            <div className="relative">
                <User className={iconeComInput} />
                <Input
                    className="pl-10 "
                    placeholder="Seu nome completo"></Input>
            </div>
        </div>
    )
}