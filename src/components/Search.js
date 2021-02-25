import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    // [] run at initial render
    // nothing run at initial render, run after every rerender
    // [data] run at initial render, run after every rerender if data has changed since last render

    // useEffect(()=>{
    //     console.log("only run at initial render")
    // },[]);

    // useEffect(()=>{
    //     console.log("run at initial render and every rerender")
    // });

    console.log(results)

    useEffect(() => {

        // (async () => {
        //     await axios.get("happy");
        // })();
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: "query",
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });

            setResults(data.query.search);
        };
        console.log("run at initial render, run after every rerender if term has changed since last render");
        //

        if (term && !results.length) {
            search();
        } else {
            const timeoutID = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 1000);

            return () => {
                clearTimeout(timeoutID);
            };

        }


    }, [term]);

    const renderResults = results.map((results) => {
        return (
            <div className={"item"} key={results.pageid}>
                <div className={"right floated content"}>
                    <a href={`https://en.wikipedia.org?curid=${results.pageid}`} className={"ui button"}>Go</a>
                </div>
                <div className={"content"}>
                    <div className={"header"}>
                        {results.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: results.snippet}}></span>
                </div>

            </div>
        );
    });


    return (
        <div>
            <div className={"ui form"}>
                <div className={"field"}>
                    <label htmlFor="#">Enter Search Term</label>
                    <input
                        className={"input"}
                        type="text"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className={"ui celled list"}>
                {renderResults}
            </div>

        </div>
    );
};

export default Search;