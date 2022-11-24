import { useSelector, useDispatch } from "react-redux";
import articlesData from "../data/articlesData";
import { getSelectedCategory, filterCategory } from "../redux/articlesSlice";
import Article from "./Article";


const Articles = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (<div>
        {articlesData
        .filter(article => {
            return selectedCategory === article.category;
        })
        .map(article => <Article article={article}/>)}
    </div>)
}

export default Articles;