import "./App.css";
function AdvItem(props)
{
    const { motoadv,onMotoadvClick } = props;
    return (
        
    <div className="adv-item img">
    <img src={motoadv.thumbnailURL} onClick={() => {onMotoadvClick(motoadv)}} />
    <h4 className="text-item">
     {motoadv.title}
     </h4>
    </div>
        
        
  );


}
export default AdvItem;