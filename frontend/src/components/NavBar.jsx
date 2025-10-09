import { Link } from "react-router";

const NavBar = () => {
    return (
        <header className="bg-base-300 border-b border-base-content/10">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-wide">SunsetBlends</h1>
                    <div className="flex items-center gap-4">
                        <Link to={"/coffee"} className="btn-primary">
                        <span>Coffee</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;