import './style.css'

export default function Button({Color, HoverColor, Size, Text, Link}){
    return(
        <a className={`${Color} ${HoverColor} ${Size} ease-in-out duration-300 hover:scale-110`} target="__blank" href={Link}>
            {Text}
        </a>
    )
}