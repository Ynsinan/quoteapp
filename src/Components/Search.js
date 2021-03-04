import { useState } from "react";

const Search = ({ selectedData, setSelectedData, setQuote, setAuthor }) => {

    const [text, setText] = useState("");
    const random = (dataArray) => {
        let randomNum = Math.floor(Math.random() * dataArray.length);

        let temp;
        if (randomNum !== temp) {
            temp = randomNum;
            return randomNum;
        } else {
            while (randomNum !== temp) {
                randomNum = Math.floor(Math.random() * dataArray.length);
            }
            temp = randomNum;
            return randomNum;
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newData = selectedData.filter((element) => element.author === text);
        const rnd = random(newData);
        setQuote(newData[rnd]?.text);
        setAuthor(newData[rnd]?.author);


    }


    return (
        <div className="search">
            <form role="search" onSubmit={onSubmit}>
                <input id="search" className="search-bar" type="search" placeholder="Albert Einstein" onChange={(e) => setText(e.target.value)} autoFocus required />
                <button className="fas fa-search" type="submit"></button>
            </form>
        </div>
    );
}

export default Search;