const Article = ({article}) => {
    return(<div>
        <h2>{article.name}</h2>
        <p> $ {article.price}</p>
        <img src={`./${article.img}.jpg`} alt="article" width="100px"/>
        <button>How many items?</button>
        <button>Add to cart</button>
    </div>)
}

export default Article;