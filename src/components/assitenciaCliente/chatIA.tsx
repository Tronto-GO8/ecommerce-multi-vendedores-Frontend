import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

type Message = {
    id: number
    sender: "user" | "bot"
    text: string
}

export default function ChatIa() {
    const [messages, setMessages] = useState<Message[]>([])
    const [chatStarted, setChatStarted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [inputText, setInputText] = useState("")

    const messagesEndRef = useRef<HTMLDivElement | null>(null)

    // Rolagem automática para a última mensagem
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const handleSend = () => {
        if (!inputText.trim()) return
        setChatStarted(true)

        // Adiciona a mensagem do usuário
        const newMessage: Message = {
            id: Date.now(),
            sender: "user",
            text: inputText.trim(),
        }
        setMessages((prev) => [...prev, newMessage])
        setInputText("")

        // Simula resposta do bot temporário
        setIsLoading(true)
        setTimeout(() => {
            const botMessage: Message = {
                id: Date.now() + 1,
                sender: "bot",
                text: "Essa é uma resposta automática da IA",
            }
            setMessages((prev) => [...prev, botMessage])
            setIsLoading(false)
        }, 1500)

        //fim temp

        /*Requisição real
        fetch("/api/ai", { method: "POST", body: JSON.stringify({ prompt: inputText }) })
//   .then(res => res.json())
//   .then(data => {
//     // data.text = resposta da IA
//     const botMessage: Message = {
//       id: Date.now() + 1,
//       sender: "bot",
//       text: data.text,
//     }
//     setMessages(prev => [...prev, botMessage])
//     setIsLoading(false)
//   })
//   .catch(err => {
//     console.error(err)
//     setIsLoading(false)
//   })*/
    }

    return (
        <div className="flex justify-end">
            <div className="m-4 mr-28 w-[55vw] h-[88vh] flex flex-col border rounded-lg shadow-lg bg-white">

                {/* Área de mensagens */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-2">
                    {!chatStarted ? (
                        <div className="flex h-full items-center justify-center text-gray-500">
                            <p>Digite algo para começarmos...</p>
                        </div>
                    ) : (
                        <>
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[70%] p-2 rounded-lg whitespace-normal break-words ${msg.sender === "user"
                                                ? "bg-blue-500 text-white"
                                                : "bg-gray-200"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {/*marcador do scroll automático */}
                            <div ref={messagesEndRef} />
                        </>
                    )}
                </div>

                {/* Input fixo embaixo */}
                <div className="p-4 border-t flex items-center gap-2">
                    <Input
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Digite sua mensagem..."
                        disabled={isLoading}
                    />
                    <Button
                        onClick={handleSend}
                        size="icon"
                        variant="default"
                        aria-label="Enviar mensagem"
                        disabled={isLoading}
                    >
                        <Send className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
