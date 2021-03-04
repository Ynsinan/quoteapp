const Footer = ({ getQuote }) => {
    const handleClick = () => {
        getQuote();
    }
    return (
        <div className="footer">
            <button className="get-quote" type="submit" onClick={() => handleClick()}>Get Quote</button>
        </div>
    );
}



export default Footer;