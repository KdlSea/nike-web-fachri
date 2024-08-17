import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start flex-wrap gap-20
      max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p className="text-white-400 mt-6 leading-7 font-montserrat
          text-base sm:max-w-sm
          ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque eaque rerum laudantium voluptas explicabo ipsam soluta obcaecati. Quasi repudiandae, commodi ipsa laudantium neque amet saepe repellendus minima excepturi maiores!</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon)=> (
              <div className="flex justify-center items-center w-12 h-12 
              rounded-full bg-white"> 
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between flex-wrap lg:gap-20 gap-20">
            {footerLinks.map((section) => (
              <div key={section}>
                <h4 className="text-white font-montserrat
                text-2xl leading-normal font-medium mb-6
                ">{section.title}</h4>
                <ul>
                  {section.links.map((link)=>(
                    <li key={link.name} className="text-white-400 mt-3 font-montserrat text-base
                    leading-normal hover:text-slate-gray cursor-pointer">
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

            ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col
      max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat
        cursor-pointer">
          <img src={copyrightSign} alt="copy right sign" width={20} height={20} 
           className="rounded-full m-0"/>
           <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms of Condition</p>
      </div>
    </footer>
  )
}

export default Footer