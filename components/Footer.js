export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} JUYI CHR. Tous droits réservés.
        </div>
        <div className="text-sm flex items-center gap-4">
          <a
            href="/privacy"
            className="hover:text-white underline underline-offset-2 transition"
          >
            Politique de Confidentialité
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="/terms"
            className="hover:text-white underline underline-offset-2 transition"
          >
            Conditions d'Utilisation
          </a>
        </div>
      </div>
    </footer>
  );
}
