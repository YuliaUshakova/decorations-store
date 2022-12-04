import { useSelector } from "react-redux";
import articlesData from "../../data/articlesData";
import { getSelectedCategory } from "../../redux/articlesSlice";
import Article from "./Article";


const Articles = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (<div>
        {articlesData
        .filter(article => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === article.category;
        })
        .map(article => <Article key={article.id} article={article}/>)}
    </div>)
}

export default Articles;