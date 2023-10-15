
import React ,{useEffect ,useState} from 'react';
import NewsItems from '../Components/newsItems'
import Spinner from '../Components/Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


 const News=(props)=> {

    let [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

   const capitalizeFirstLetter=(string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  

     const updateNews = async ()=>{
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        props.setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
            props.setProgress(70);
            setArticles( parsedData.articles)
            setTotalResults(parsedData.totalResults)
            setLoading(false)
            props.setProgress(100);
    }

    useEffect(() => {
         document.title = `NewsMonkey-${capitalizeFirstLetter(props.category)}`
        updateNews();
        //eslint-disable-next-line
    }, []);
  
    
    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
            setArticles(articles.concat(parsedData.articles))
            setTotalResults(parsedData.totalResults)
    }
    
   
        return <>
            <h1 className={`text-center ${props.mode === "primary" ? "text-dark" : "text-light"}`} style={{marginTop:'90px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
              {   loading && <Spinner />}
            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={ <Spinner/>} 
        >
        <div className="container">
            <div className="row my-5">
                {articles.map((element) => {

                    return <div className="col-md-4" key={element.url}>
                        <NewsItems title={element.title ? element.title.slice(0, 45) : ""} desc={element.description ? element.description.slice(0, 88) : ""} imageUrl={!element.urlToImage ? "https://techcrunch.com/wp-content/uploads/2023/09/NFX-General-Partner-Morgan-Beller-and-General-Catalyst-Managing-Director-Marc-Bhargava.jpg?resize=1200,800" : element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>

                })}
            </div>
            </div>
            </InfiniteScroll>
          
        </>;
    
}

News.defaults ={
    country: 'in',
    pageSize :5,
    category : 'general'
}

News.propsTypes={
    country : PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string
}
export default News;
