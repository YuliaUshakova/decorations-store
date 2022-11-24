import Filter from './Filter';

const AllCategories = () => {
    return (<div>
       <h1>SELECT FROM OUR LIST</h1>
       {['SOLO', 'DECO', 'SETS'].map(category => <Filter category = {category}/>
    )}
    </div>)
}

export default AllCategories;