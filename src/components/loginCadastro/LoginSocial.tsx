import Facebook from "@/assets/icones_svg/Facebook"
import Google from "@/assets/icones_svg/Google"
import { Button } from "@/components/ui/button"

export default function LoginSocial() {
    return (
        <div className="flex items-center justify-center align-middle">
            <Button
                type="button"
                variant="outline"
                className="w-full hover:text-gray-600"
            >
                <Google />
                Continuar com Google
            </Button>

            <Button
                type="button"
                variant="outline"
                className="w-full hover:text-gray-600"
            >
                <Facebook />
                Continuar com Facebook
            </Button>
        </div>

    )
}