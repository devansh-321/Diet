
import { IoSendSharp } from "react-icons/io5";
import { IoIosEye } from "react-icons/io";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import {AiOutlineLogout} from '@react-icons/all-files/ai/AiOutlineLogout.esm'
import { BiSolidMessage } from "react-icons/bi";
import { FiMail, FiPlus } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { IconContext } from "react-icons";
import { MdModeEdit } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { RiSearchLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoIosPerson } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Icon=(props)=>{
    return <IconContext.Provider value={{ color: "#a3a8ab", className: "global-class-name",...props }}>
    {
        props?.onClick 
        ? <div style={{cursor:"pointer"}} onClick={props?.onClick}>
        {props?.children}
      </div>
        :<div>
        {props?.children}
      </div>
    }
    
    
  </IconContext.Provider>
}


export const IconSendMessage=(props)=>{

    return <Icon {...props}>
        <IoSendSharp/>
    </Icon>
}

export const IconAdd=(props)=>{

  return <Icon {...props}>
      <FiPlus/>
  </Icon>
}

export const IconView=(props)=>{

  return <Icon {...props}>
      <IoIosEye/>
  </Icon>
}

export const IconEdit=(props)=>{

  return <Icon {...props}>
      <MdModeEdit/>
  </Icon>
}

export const IconDelete=(props)=>{

  return <Icon {...props}>
      <FiTrash2/>
  </Icon>
}

export const IconNextList=(props)=>{

  return <Icon {...props}>
      <FaCaretRight/>
  </Icon>
}

export const IconPrevList=(props)=>{

  return <Icon {...props}>
      <FaCaretLeft/>
  </Icon>
}

export const IconLogout=(props)=>{

  return <Icon color="#fff" {...props}>
      <AiOutlineLogout />
  </Icon>
}

export const IconMessage=(props)=>{

  return <Icon {...props}>
      <BiSolidMessage />
  </Icon>
}

export const IconMail=(props)=>{

  return <Icon {...props}>
      <FiMail />
  </Icon>
}

export const IconBack=(props)=>{

  return <Icon {...props}>
      <IoMdArrowRoundBack />
  </Icon>
}

export const IconLoad=(props)=>{

  return <Icon {...props}>
      <TfiReload />
  </Icon>
}

export const IconSearch=(props)=>{

  return <Icon {...props}>
      <RiSearchLine />
  </Icon>
}

export const IconPerson=(props)=>{

  return <Icon {...props}>
      <IoMdPerson />
  </Icon>
}

export const IconMenu=(props)=>{

  return <Icon {...props}>
      <IoMenu />
  </Icon>
}

export const IconStar=(props)=>{

  return <Icon {...props}>
      <FaRegStar />
  </Icon>
}

export const IconCertified=(props)=>{

  return <Icon {...props}>
      <LiaCertificateSolid />
  </Icon>
}

export const IconHonor=(props)=>{

  return <Icon {...props}>
      <IoIosPerson />
  </Icon>
}

export const IconRight=(props)=>{

  return <Icon {...props}>
      <FaChevronRight />
  </Icon>
}

export const IconFacebook=(props)=>{

  return <Icon {...props}>
      <FaFacebookF />
  </Icon>
}

export const IconInsta=(props)=>{

  return <Icon {...props}>
      <FaInstagram />
  </Icon>
}

export const IconTwitter=(props)=>{

  return <Icon {...props}>
      <FaXTwitter />
  </Icon>
}

export const IconYoutube=(props)=>{

  return <Icon {...props}>
      <FaYoutube />
  </Icon>
}

export const IconLocation=(props)=>{

  return <Icon {...props}>
      <FaLocationDot />
  </Icon>
}

export const IconPhone=(props)=>{

  return <Icon {...props}>
      <FaPhone />
  </Icon>
}

export const IconClear=(props)=>{

  return <Icon {...props}>
      <IoMdClose />
  </Icon>
}
