const Footer = ({l}) =>{
    const today = new Date()

    return (
        <footer><p>{l} Copyright &copy; {today.getFullYear()}</p></footer>
    )
}

export default Footer