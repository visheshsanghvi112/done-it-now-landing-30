import { Moon, Sun, Home } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
    isDark: boolean;
    setIsDark: (dark: boolean) => void;
}

const Navbar = ({ isDark, setIsDark }: NavbarProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/#contact');
            // Adding a small delay to allow navigation to complete before scrolling
            setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 md:top-6 z-50 flex items-center gap-1 bg-background/80 backdrop-blur-md border border-border p-1.5 rounded-full shadow-sm">
            <Link
                to="/"
                className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-colors flex items-center justify-center"
                aria-label="Back to Home"
            >
                <Home className="h-4 w-4" />
            </Link>

            <div className="w-[1px] h-4 bg-border mx-1"></div>

            <Link
                to="/projects"
                className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-colors"
            >
                Projects
            </Link>
            <a
                href="#contact"
                onClick={scrollToContact}
                className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-colors cursor-pointer"
            >
                Contact
            </a>

            <div className="w-[1px] h-4 bg-border mx-1"></div>

            <button
                onClick={() => setIsDark(!isDark)}
                className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-colors flex items-center justify-center"
                aria-label="Toggle Theme"
            >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
        </nav>
    );
};

export default Navbar;
