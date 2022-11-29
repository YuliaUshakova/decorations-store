import Filter from './Filter';

const AllCategories = () => {
    return (<div>
       <h3>OUR SELECTION</h3>
       {['DECO', 'SOLO', 'SETS', 'ALL'].map((category, id) => <Filter category = {category}/>
    )}
    </div>)
}

export default AllCategories;