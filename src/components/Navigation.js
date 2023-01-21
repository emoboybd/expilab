import Link from "next/link";
function Navigation() {
  return (
    <section id="nav">
      <div className="section-container my-5">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img src="/logo.png" className="cursor-pointer" />
          </Link>

          <div className="hidden font-semibold md:flex md:space-x-8 md:items-center ">
            <Link href="/" className="hover:text-mainColor">
              Home
            </Link>
            <Link href="/about" className="hover:text-mainColor">
              About us
            </Link>
            <Link href="/app" className="hover:text-mainColor">
              Our app
            </Link>
            <Link href="/contact" className="hover:text-mainColor">
              Contacts
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="login" className="font-semibold hover:text-mainColor">
              Log in
            </Link>
            <button className="main-btn px-4 py-2">Sign up</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
