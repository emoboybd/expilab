import Link from "next/link";
function Footer() {
  return (
    <section id="nav">
      <div className="section-container my-20">
        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:justify-between">
          <div className="order-1">
            <Link href="/">
              <img src="/logo.png" className="cursor-pointer" />
            </Link>
          </div>
          <p className="order-3 lg:order-2">
            © 2020 Epixelab. All rights reserved.
          </p>

          <div className="font-semibold flex items-center flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-8 lg:items-center order-2 lg:order-3">
            <Link href="/portfolio" className="hover:text-mainColor">
              Portfolio
            </Link>
            <Link href="/howitworks" className="hover:text-mainColor">
              How it wroks
            </Link>
            <Link href="/pricing" className="hover:text-mainColor">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-mainColor">
              About
            </Link>
            <Link href="/login" className="hover:text-mainColor">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
