export const iconeComInput =
  "absolute left-3 top-3 h-4 w-4 text-muted-foreground";

{
  /* <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <Link
            href="/login/card"
            className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao login
          </Link>
          <div>
            <CardTitle className="font-serif text-2xl">Esqueceu sua senha?</CardTitle>
            <CardDescription className="font-mono text-sm mt-2">
              Digite seu email para receber um link de recuperação
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-mono text-sm">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 font-mono"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full font-mono" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar Link de Recuperação"}
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground font-mono">
                Lembrou da senha?{" "}
                <Link href="/login/card" className="text-accent hover:text-accent/80 transition-colors">
                  Fazer login
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>*/
}
