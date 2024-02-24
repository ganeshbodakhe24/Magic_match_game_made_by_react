import React,{setState, useEffect,useContext, useState} from "react";
import { GlobalStore } from "../App";

function Card(props) {
    const{swapHandler}=useContext(GlobalStore);
    const{image_id,index,getIndex ,flipback,setFlipList_index}=props;

    const[clickAudio,setClickAudio]=useState(false);
    const[flip_css,setFlip_css]=useState();
    function ClickHandler(index){
        getIndex(index);
        setFlip_css("flip_card");
        swapHandler();//count swap
        setClickAudio(true);
    }
    useEffect(()=>{
        if(flipback===1){
            setFlip_css("");
            setClickAudio(false);
            setFlipList_index(index);
        }
    })
    return (
        <>
             {
                clickAudio ? <audio
                src="click.wav"
                // controls
                autoPlay={true}
                loop={false}
              /> : ""
            }
        <div className="card" onClick={()=>{ClickHandler(index)}}>
         <div className={`card-inner ${flip_css}`} >
            <div className="card-front">
               <img src="img/horror_bg.jpeg"></img>
            </div>
            <div className=" card-back">
                <img src={"img/"+image_id+".png"}></img>
    
            </div>
         </div>
        </div>
        </>
    )
}
export default Card;