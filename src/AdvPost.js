import "./Advpost.css";
function AdvPost(props)
{
    const { motoadv,onBgClick} = props;
    return (

            <div className="adv-post">       
            <div className="adv-post-bg" onClick={onBgClick} />
            <div className="adv-post-content">
                <div className="adv-post-content img">
                <img src={motoadv.thumbnailURL} />
                </div>
                <h4 className="content-post">{motoadv.title}</h4>
            </div>
            </div>

        );
}
export default AdvPost;