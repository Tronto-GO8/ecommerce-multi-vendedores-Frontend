
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { iconeComInput } from "@/styles/variaveisTailwind/Reutilizaveis"
import { Eye, EyeOff, Lock } from "lucide-react"
import React, { useState } from "react"

interface senhaProps {
    children: React.ReactNode
}

export default function InputSenha({ children }: senhaProps) {
    const [mostrarSenha, setMostrarSenha] = useState<boolean>(false)
    return (
        <div className="space-y-2">
            <Label className=" text-sm">{children}</Label>
            <div className="relative">
                <Lock className={iconeComInput} />
                <Input
                    className="pl-10 pr-10 "
                    placeholder="••••••••"
                    type={mostrarSenha ? "text" : "password"}
                ></Input>
                <Button
                    type="button"
                    variant={"ghost"}
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setMostrarSenha(!mostrarSenha)}>
                    {mostrarSenha ? (
                        <Eye className="h-4 w-4 text-muted-foreground"></Eye>) : (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />)}
                </Button>
            </div>
        </div>
    )
}