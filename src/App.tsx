import { useTranslation } from "react-i18next";
import { useTheme } from "./hooks/useTheme";
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";

function App() {
  const { theme } = useTheme();
  const { i18n } = useTranslation();

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Apply text direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
