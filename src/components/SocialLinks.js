import React from 'react';
import '../styles/SocialLinks.css';
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";

function SocialLinks() {
    const links = [
        {
          id: 1,
          child: (
            <>
              LinkedIn <FaLinkedin size={25} />
            </>
          ),
          href: "https://linkedin.com",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
              GitHub <FaGithub size={25} />
            </>
          ),
          href: "https://github.com/theyashpatel",
        },
        {
          id: 3,
          child: (
            <>
              Mail <HiOutlineMail size={25} />
            </>
          ),
          href: "mailto:foo@gmail.com",
        }
      ];
  return (
    <div className='sociallnks'>
        <ul>
            {links.map(({ id, child, href, style, download }) => (
                <li 
                key={id}
                className="socialitems"
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