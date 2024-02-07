import tagsList from "../jsons/Tags";

const Tags = () => {
    return (
        <div className="widget widget-tags">
            <div className="widget-header">
                <h5 className="title">Our Popular Tags</h5>
            </div>
            <ul className="widget-wrapper">
                {tagsList.map((val, i) => (
                    <li key={i} style={{cursor: 'pointer'}}><a>{val.text}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default Tags;