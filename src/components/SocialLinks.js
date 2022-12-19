import React from 'react';
import '../styles/SocialLinks.css';
import { FaInstagram,FaFacebookSquare,FaWhatsappSquare,FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";

function SocialLinks() {
    const links = [
        {
          id: 1,
          child: (
            <>
              Instagram <FaInstagram size={25} />
            </>
          ),
          href: "https://instagram.com",
          style: "linkshapetop",
          style2: "socialitems"
        },
        {
          id: 2,
          child: (
            <>
              Facebook <FaFacebookSquare size={25} />
            </>
          ),
          href: "https://facebook.com",
          style2: "socialitems"
        },
        {
          id: 3,
          child: (
            <>
              Whatsapp <FaWhatsappSquare size={25} />
            </>
          ),
          href: "https://web.whatsapp.com://send?text=This is whatsapp sharing example using button",
          style2: "socialitems"
        },
        {
          id: 4,
          child: (
            <>
              Mail <HiOutlineMail size={25} />
            </>
          ),
          href: "mailto:foo@gmail.com",
          style2: "socialitems"
        },
        {
          id: 5,
          child: (
            <>
              Phone No <FaPhoneAlt size={25} />
            </>
          ),
          href: "tel:+2349098542959",
          style: "linkshapebottom",
          style2: "socialitems"
        }
      ];
  return (
    <div className='sociallnks'>
        <ul>
            {links.map(({ id, child, href, style, style2, download }) => (
                <li 
                key={id}
                className={style2 + " " + style}
                >
                    <a href={href}
                      className="socialitmlnks"
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                    >
                        {child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks;