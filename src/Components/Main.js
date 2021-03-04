const Main = ({ quote, author }) => {
    return (
        <div className="main">
            <p>{quote}</p>
            <p>-{author}</p>
        </div>
    );
}

export default Main;