"use client"
import { basePath } from '@/next.config'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <div id="topbar" className="d-flex align-items-center fixed-top">
    <div className="container d-flex justify-content-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope"></i> <a href="mailto:admin@dialogika.co">admin@dialogika.co</a>
        <i className="bi bi-phone"></i> +62 851 6299 2597
      </div>
      <div className="d-none d-lg-flex social-links align-items-center">
        <a href="https://link.dialogika.co/twitter" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="https://link.dialogika.co/facebook" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="https://link.dialogika.co/instagram" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="https://link.dialogika.co/linkedin" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
  </div>

{/*   <!-- ======= Header ======= --> */}
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

       <a href="../index.html" className="logo me-auto"><img src={`${basePath}/assets/img/logo.webp`} alt="Logo Dialogika" className="img-fluid"/></a>

       <nav id="navbar" className="navbar order-last order-lg-0">
  <ul className="navbar-desktop-list">
    <li>
      <Link className="nav-link scrollto" href="index.html">
        Home
      </Link>
    </li>
    <li className="dropdown">
      <Link href="../program">
        <span>Program</span> <i className="bi bi-chevron-down"></i>
      </Link>
      <ul>
        <li className="dropdown">
          <button
            className="btn w-100 text-start"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>Online</span> <i className="bi bi-chevron-right"></i>
          </button>
          <ul>
            <li>
              <Link href="../program/basic-play.html">
                Basic Play{" "}
                <span className="badge rounded-pill text-bg-success">Best Buy</span>
              </Link>
            </li>
            <li>
              <Link href="../program/basic-plus.html">Basic Plus</Link>
            </li>
            <li>
              <Link href="../program/basic-private.html">Basic Private</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <button
            className="btn w-100 text-start"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>Offline</span> <i className="bi bi-chevron-right"></i>
          </button>
          <ul>
            <li>
              <Link href="../program/first-className.html">
                First Class{" "}
                <span className="badge rounded-pill text-bg-success">Best Buy</span>
              </Link>
            </li>
            <li>
              <Link href="../program/first-kids.html">First Kids</Link>
            </li>
            <li>
              <Link href="../program/first-private.html">First Private</Link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <Link className="nav-link scrollto" href="../corporate/">
        Corporate
      </Link>
    </li>
    <li>
      <Link className="nav-link scrollto" href="../event/">
        Event
      </Link>
    </li>
    <li>
      <Link className="nav-link scrollto" href="../service/">
        Services
      </Link>
    </li>
    <li>
      <Link className="nav-link scrollto active" href="../shop/">
        Shop
      </Link>
    </li>
    <li>
      <Link className="nav-link scrollto" href="../blog/">
        Blog
      </Link>
    </li>
  </ul>
  <i
    className="bi bi-list d-block d-md-none"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasNavbar"
  ></i>
</nav>

       {/* <!-- .navbar --> */}

      <a href="https://www.dialogika.co/program/" className="appointment-btn">Daftar <span className="d-md-inline">Sekarang</span></a>

    </div>
  </header>
  {/* <!-- End Header --> */}

  {/* <!-- ======= Mobile Nav ======= --> */}
  <nav className="navbar-canvas fixed-top">
    <div className="container-fluid">
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <a href="../index.html">
            <img alt='Logo Dialogika' src={`${basePath}/assets/img/logo.webp`} className="offcanvas-title" id="offcanvasNavbarLabel"/>
          </a>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <a href="#hero"><div className="card"><div className="card-body">Home</div></div></a>
          <div className="card">
            <a href="#program-collapse" data-bs-toggle="collapse">
              <div className="card-body d-flex justify-content-between">
                <span>Program</span>
                <i className='bx bxs-chevron-down bx-tada'></i>
              </div>
            </a>
            <div className="collapse" id="program-collapse">
  {/* Online Section */}
  <button
    className="btn w-100 text-start"
    data-bs-toggle="collapse"
    data-bs-target="#program-online"
    aria-expanded="false"
    aria-controls="program-online"
  >
    <div className="card">
      <div className="card-body d-flex justify-content-between">
        <span>Online</span>
        <i className="bx bxs-chevron-down bx-tada"></i>
      </div>
    </div>
  </button>
  <div className="collapse" id="program-online">
    <Link href="../program/basic-play.html">
      <div className="card card-body">Basic Play</div>
    </Link>
    <Link href="../program/basic-plus.html">
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <span>Basic Plus</span>
          <span className="badge bg-warning rounded-pill text-dark">Best Buy</span>
        </div>
      </div>
    </Link>
    <Link href="../program/basic-private.html">
      <div className="card card-body">Basic Private</div>
    </Link>
    <hr />
    <Link href="../program/kids-play.html">
      <div className="card card-body">Kids Play</div>
    </Link>
    <Link href="../program/kids-plus.html">
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <span>Kids Plus</span>
          <span className="badge bg-info rounded-pill">New</span>
        </div>
      </div>
    </Link>
    <Link href="../program/kids-private.html">
      <div className="card card-body">Kids Private</div>
    </Link>
  </div>

  {/* Offline Section */}
  <button
    className="btn w-100 text-start"
    data-bs-toggle="collapse"
    data-bs-target="#program-offline"
    aria-expanded="false"
    aria-controls="program-offline"
  >
    <div className="card">
      <div className="card-body d-flex justify-content-between">
        <span>Offline</span>
        <i className="bx bxs-chevron-down bx-tada"></i>
      </div>
    </div>
  </button>
  <div className="collapse" id="program-offline">
    <Link href="../program/first-className.html">
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <span>First Class</span>
          <span className="badge bg-warning rounded-pill text-dark">Best Buy</span>
        </div>
      </div>
    </Link>
    <Link href="../program/first-kids.html">
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <span>First Kids</span>
          <span className="badge bg-info rounded-pill">New</span>
        </div>
      </div>
    </Link>
    <hr />
    <Link href="../program/first-private.html">
      <div className="card card-body">First Private</div>
    </Link>
  </div>
</div>

          </div>
          <a href="../corporate/"><div className="card card-body">Corporate</div></a>
          <a href="../event/"><div className="card card-body">
            <div className="justify-content-between d-flex">
              <span>Event </span>
              <span className="badge bg-info rounded-pill">New</span> 
            </div>
          </div></a>
          <a href="../service/" onClick={()=> (false)}><div className="card card-body">
            <div className="justify-content-between d-flex">
              <span>Service </span>
              <span className="badge bg-warning rounded-pill">Coming Soon</span>
            </div>
          </div></a>
          <a href="https://www.dialogika.co/shop/" onClick={()=>(false)}><div className="card card-body">
            <div className="justify-content-between d-flex">
              <span>Shop </span>
            </div>
          </div></a>
          <a href="../blog/"><div className="card card-body">Blog</div></a>
        </div>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Header