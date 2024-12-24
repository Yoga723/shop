import React from "react";

const BenefitSection = () => {
  return (
    <section
      className="ltn__feature-area mt-100 mt--65"
      style={{ marginTop: 0, marginBottom: 0, bottom: 100 }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__feature-item-box-wrap ltn__feature-item-box-wrap-2 ltn__border section-bg-6 position-relative">
              <div className="ltn__feature-item ltn__feature-item-8">
                <div className="ltn__feature-icon">
                  <img
                    src="assets/img/icons/svg/8-trolley.svg"
                    alt="Trolley"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h4>Free shipping</h4>
                  <p>Untuk pesanan diatas Rp.300.000</p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-8">
                <div className="ltn__feature-icon">
                  <img
                    src="assets/img/icons/svg/9-money.svg"
                    alt="Money"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h4>15 days returns</h4>
                  <p>Garansi uang kembali</p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-8">
                <div className="ltn__feature-icon">
                  <img
                    src="assets/img/icons/svg/10-credit-card.svg"
                    alt="Credit Card"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h4>Secure checkout</h4>
                  <p>Transfer aman melalui Bank</p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-8">
                <div className="ltn__feature-icon">
                  <img
                    src="assets/img/icons/svg/11-gift-card.svg"
                    alt="Gift card"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h4>Offer & gift here</h4>
                  <p>Untuk semua pesanan buku</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
