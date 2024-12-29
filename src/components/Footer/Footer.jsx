import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Fila superior */}
      <div className="footer__top">
        <div className="footer__item">
          <i className="footer__icon">⭐</i>
          <h4 className="footer__item-title">High Quality</h4>
          <p className="footer__item-text">Crafted from top materials</p>
        </div>
        <div className="footer__item">
          <i className="footer__icon">🎖️</i>
          <h4 className="footer__item-title">Warranty Protection</h4>
          <p className="footer__item-text">Over 2 years</p>
        </div>
        <div className="footer__item">
          <i className="footer__icon">📦</i>
          <h4 className="footer__item-title">Free Shipping</h4>
          <p className="footer__item-text">Order over 150 $</p>
        </div>
        <div className="footer__item">
          <i className="footer__icon">📞</i>
          <h4 className="footer__item-title">24/7 Support</h4>
          <p className="footer__item-text">Dedicated support</p>
        </div>
      </div>

      {/* Fila inferior */}
      <div className="footer__bottom">
        <h3 className="footer__bottom-title">Relatos de Papel</h3>
        <div className="footer__links">
          <a href="#support" className="footer__link">Support Center</a>
          <a href="#invoicing" className="footer__link">Invoicing</a>
          <a href="#contract" className="footer__link">Contract</a>
          <a href="#careers" className="footer__link">Careers</a>
          <a href="#blog" className="footer__link">Blog</a>
          <a href="#faqs" className="footer__link">FAQs</a>
        </div>
        <p className="footer__copyright">
          Copyright © 2024 Relatos de Papel. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
