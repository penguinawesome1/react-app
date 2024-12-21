function Header() {
    return (
        <>
            <header>
                <nav className="bg-rose-300 py-2 px-6 fixed w-[100%] flex justify-between items-center rounded-b-2xl">
                    <a href="index.html"><img src="images/logo.png" className="w-10 h-10" alt="logo" /></a>
                    <div className="flex gap-4">
                        <a className="bg-white p-2 rounded-xl border-solid hover:border-dashed border-2 border-zinc-800" href="html/sign-in.html">Log In</a>
                        <a className="bg-white p-2 rounded-xl border-solid hover:border-dashed border-2 border-zinc-800" href="html/sign-up.html">Sign Up</a>
                    </div>
                </nav>
            </header>
        </>
    )
};

export default Header;