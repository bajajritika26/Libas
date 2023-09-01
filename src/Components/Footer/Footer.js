import React from "react";
import style from "./Footer.module.css";
import Instagram from "../../Assets/instagram.png"
import facebook from "../../Assets/facebook.png"
import Pinterest from "../../Assets/pinterest.png"
import Twitter from "../../Assets/twitter.png"
import Youtube from "../../Assets/youtube.png"
const Footer = () => {
  return (
    <div className={style.footerContainer}>
    <div className={style.footer}>
      <div className={style.first}>
        <h3>CONTACT US</h3>
        <span>+91 9899990772</span>
        <span>care@libas.in</span>
        <span>Mon to Sat</span>
        <span>9 AM to 6 PM</span>
        <h3>DISCOVER</h3>
        <span>Onam Offers</span>
        <span>Raksha Bandhan Sale</span>
        <span>Teej Offers</span>
      </div>
      <div className={style.first}>
        <h3>CUSTOMER EXPERIENCE</h3>
        <span>Shipping Policy</span>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Refund Policy</span>
        <span>Return policy</span>
        <span>Contact Us</span>
        <span>Track Order</span>
        <span>Raise Return</span>
        <span>Store Locator</span>
      </div>
      <div className={style.first}>
        <h3>EXPLORE MORE</h3>
        <span>Sarees</span>
        <span>Kurtas</span>
        <span>Suits</span>
        <span>Dresses</span>
        <span>Bottoms</span>
        <span>Plus Size Clothing</span>
        <span>Loungewear</span>
        <span>New</span>
        <span>Sale</span>
        <span>Purple Edit</span>
      </div>
      <div className={style.first}>
      <div>
        <h3>FOLLOW US</h3>
        <span>
          <img src={Instagram} alt="" />
        </span>
        <span>
          <img src={facebook} alt="" />
        </span>
        <span>
          <img src={Youtube} alt="" />
        </span>
        <span>
          <img src={Twitter} alt="" />
        </span>
        <span>
          <img src={Pinterest} alt="" />
        </span>
      </div>
      <div>
        <h3>DOWNLOAD THE APP</h3>
        <span>
          <img src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/mobile-icon.jpg?v=1690358023"alt="" />
        </span>
        <span>
          <img src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/play-store-mobile-icon.jpg?v=1690358024" alt=""/>
        </span>
      </div>
      <div>
        <h3>SAFE & SECURE PAYMENT</h3>
        <span>
          <img src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/visa.png?v=1690358462" alt=""/>
        </span>
        <span>
          <img src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/paytm.jpg?v=1690358023" alt=""/>
        </span>
        <span>
          <img src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/mastercard.png?v=1690358462" alt=""/>
        </span>
        <span>
          <img src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/amx.png?v=1690358462" alt="" />
        </span>
      </div>
      <div>
        <span> &#169; Libas 2023. All rights reserved.</span>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
