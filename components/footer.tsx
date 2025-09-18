import Link from "next/link";

export function Footer() {
    //Getting the current daye
    const date = new Date();
    const current_year = date.getFullYear();

    return(
        <footer className="text-center m-8">
            <p>&copy; {current_year} Invoice Creator v0.1&middot; Build with Nextjs v15</p>
            <p className="text-gray-500"><Link target="_blank" href={'https://andvega.com/'}><span className="underline decoration-pink-500">Andvega</span> &middot; FullStack Developer</Link></p>
        </footer>
    );
}