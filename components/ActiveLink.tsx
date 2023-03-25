import { CSSProperties, FC } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

interface Props {
  text: string;
  href: string;
}
//esto es obligatorio xq no tiene signo ? => text?: string

export const ActiveLink: FC<Props> = ({ text, href }) => {
   
  const {asPath} = useRouter()
    
  return ( 
    <Link style={asPath === href ? style : undefined} href={href}>{text} </Link>
  )
}
