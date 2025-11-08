import React, { useState, useEffect } from "react";
import { useTheme } from "../../../contexts/ThemeContext"
import { getUserSettings, updateUserSettings, deleteUserAccount, UserSettings } from "../services/userService";


export default function Configuracoes() {
  const [removeConta, setRemoveConta] = useState(false);
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [deleting, setDeleting] = useState(false);
  const [settings, setSettings] = useState<UserSettings>({
    notifications: { email: false, sms: false },
  });
  const token = "TOKEN_DO_USUARIO_AQUI";

  useEffect(() => {
    async function fetchSettings() {
      try {
        const data = await getUserSettings(token);
        setSettings(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSettings();
  }, [token]);

  const handleToggleNotification = async (type: "email" | "sms") => {
    const newSettings = {
      ...settings,
      notifications: { ...settings.notifications, [type]: !settings.notifications[type] },
    };
    setSettings(newSettings);
    try {
      await updateUserSettings(newSettings, token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAccount = async () => {
    setDeleting(true);
    try {
      await deleteUserAccount(token);
      alert("Conta excluída com sucesso!");
      // opcional: redirecionar para login
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir conta.");
    } finally {
      setDeleting(false);
    }
  };


  return (
    <main>
      <section className="dark:bg-gray-900 dark:text-gray-100 border border-gray-400 bg-white rounded-lg shadow-sm p-6 max-w-4xl mx-auto space-y-6">
        <div className=" border-b pb-3 mb-6 dark:border-gray-700" >
          <h2 className="text-xl font-semibold">Configurações</h2>
        </div>

        <div className="border border-gray-400 dark:border-gray-700 rounded-lg p-4">
          <h3 className="text-l text-gray-700  dark:text-gray-200">Tema</h3>
          <label className="flex items-center cursor-pointer">
            <span className="mr-3 text-gray-700 dark:text-gray-200">Modo escuro</span>

            <div className="relative">
              <input checked={isDarkMode}
                onChange={(e) => setIsDarkMode(e.target.checked)} type="checkbox" id="modo-escuro" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300  dark:bg-gray-600 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-300 rounded-full transition-transform peer-checked:translate-x-5"></div>
            </div>
          </label>
        </div>

        <div className="border border-gray-400 dark:border-gray-700 rounded-lg p-4">
          <h3 className="text-lg text-gray-700 mb-2 dark:text-gray-200">Notificações</h3>

          <label className="flex items-center cursor-pointer mb-2">
            <input checked={settings.notifications.email}
              onChange={() => handleToggleNotification("email")}
              type="checkbox" className="mr-3 text-gray-700 dark:text-gray-200" />
            <span>Email</span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input checked={settings.notifications.sms}
              onChange={() => handleToggleNotification("sms")}
              type="checkbox" className="mr-3 text-gray-700" />
            <span>SMS</span>
          </label>
        </div>

        <div className="border border-gray-400  dark:border-gray-700 rounded-lg p-4">
          <h3 className="text-lg text-gray-700 mb-2 dark:text-gray-200">Excluir conta</h3>
          <p className="text-l text-gray-700  dark:text-gray-300">
            A exclusão da conta é permanente e não pode ser desfeita
          </p>

          <button onClick={() => setRemoveConta(true)} className="text-gray-600 dark:text-gray-300 border border-gray-600 dark:border-gray-500 px-4 py-2 rounded hover:bg-gray-600 hover:text-white dark:hover:bg-gray-700 transition">
            Excluir minha conta
          </button>

          {removeConta && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 dark:text-gray-100 p-6 border border-gray-300 dark:border-gray-700 rounded shadow-lg z-50">
              <h3 className="text-lg font-semibold mb-4">Tem certeza?</h3>
              <p className="text-l text-red-700 dark:text-red-400">
                A exclusão da conta é permanente e não pode ser desfeita
              </p>
              <br />
              <div className="flex justify-start gap-2">
                <button
                  onClick={() => setRemoveConta(false)}
                  className="px-4 py-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleDeleteAccount}
                  disabled={deleting}
                  className={`px-4 py-2 rounded text-white transition ${deleting
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800"
                    }`}
                >
                  {deleting ? "Excluindo..." : "Excluir minha conta"}
                </button>
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
