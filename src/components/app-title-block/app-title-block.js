import "./app-title-block.scss";

const TitleBlock = ({title}) => {
    return (
        <div className="title__block">
            <p className="text">{title}</p>
        </div>
    )
}
export default TitleBlock;