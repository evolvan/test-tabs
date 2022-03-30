/**
 * Index file that queries for cases 
 */

 import React,{useState,useEffect} from "react"
 // get our fontawesome imports
import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TailSpin } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

  /**
  * Internal dependencies.
  */
 import "./tabs.css"

 const Tabs = (props) => {
    
   const [currentTab,SetCurrentTab] = useState(0);
   const [data,SetData] = useState(props.data)
   const [currentData,SetCurrentData] = useState([])
   const [currentTabs,SetCurrentTabs] = useState(0);

   function handleClick(value) {
        SetCurrentTab(value);  
   }

   function handleClicks(val) {
       if(val === currentTabs) {
        SetCurrentTabs(-1);
       }else{
        SetCurrentTabs(val);
       }
   }

   function filterData(){
    const currentData = data?.filter((item,i)=> {
        if(item.index===currentTab)
            return item;
    })
    SetCurrentData(currentData);
   }

   useEffect(()=>{
    filterData();
   },[currentTab, currentTabs]);
   
   return (
    <>
        <div className="tabs-main">
            <div className="tab">
            {
                data &&
                data.map((button, i) => {

                    const currentClass = button?.index === currentTab ? ' tablinks active' : 'tablinks';
                    const currentIcon =  currentClass  === ' tablinks active' ? faMinus : faPlus;
                    return (
                        <button type="button" key={button?.id} className={currentClass} onClick={() => handleClick(button?.index)}>
                            <img src={button.icon} className="icon-img" alt="Image not found" />
                            <span> {button?.title} </span>
                            <FontAwesomeIcon icon={currentIcon} />
                        </button>
                    )
                })
            }
            </div>

            <div className="tabcontent">
                { currentData.length > 0 ? 
                <>
                    <div className="tab-content-inner">
                        <h3 className="content-title text-center">{currentData[0]?.title}</h3>
                        <div className="content-sub-heading text-center">{currentData[0]?.subTitle}</div>

                        <p className="spacer">&nbsp;</p>
                        <div className="mobi-flex">
                        <div className="content-body" dangerouslySetInnerHTML={{__html:`<img src=${currentData[0]?.img} class="rounded-img" alt="Image not found"/>`+currentData[0]?.body}}></div>
                        </div>
                        <div className="content-links-container">
                            <div className="links">
                             {currentData[0]?.link1 &&
                                <a href={currentData[0]?.link1} className="links-btn link-1" target="_blank">Learn More</a>
                            }
                            {currentData[0]?.link2 &&
                                <a href={currentData[0]?.link2} className="links-btn link-2" target="_blank">Free Evaluation</a>
                            }
                            </div>
                        </div>
                    </div>
                </>
                : 
                <div className="loader">
                    <TailSpin color="#00BFFF" height={80} width={80} />
                </div>
                }
            </div>
        </div>

         {/* Mobile Only */}
         
             <div className="tabs-main mobile">
                <div className="tab">
                {
                data &&
                data.map((button, i) => {

                    const currentClass = button?.index === currentTabs ? ' tablinks active' : 'tablinks';
                    const currentIcon =  currentClass  === ' tablinks active' ? faMinus : faPlus;
                    return (
                        <>
                            <button type="button" key={button?.id} className={currentClass} onClick={() => handleClicks(button?.index)}>
                                <img src={button.icon} className="icon-img" alt="Image not found" />
                                <span> {button?.title} </span>
                                <FontAwesomeIcon icon={currentIcon} />
                            </button>
                            
                            <div className={`tabcontent ${button?.index === currentTabs ? ' open' : 'close'}`}>
                                <>
                                    <div className="tab-content-inner">
                                        <h3 className="content-title text-center">{data[i]?.title}</h3>
                                        <div className="content-sub-heading text-center">{data[i]?.subTitle}</div>

                                        <p className="spacer">&nbsp;</p>
                                        <div className="mobi-flex">
                                        <div className="content-body" dangerouslySetInnerHTML={{__html:`<img src=${data[i]?.img} class="rounded-img" alt="Image not found"/>`+data[i]?.body}}></div>
                                        </div>
                                        <div className="content-links-container">
                                            <div className="links">
                                            {data[i]?.link1 &&
                                                <a href={data[i]?.link1} className="links-btn link-1" target="_blank">Learn More</a>
                                            }
                                            {data[i]?.link2 &&
                                                <a href={data[i]?.link2} className="links-btn link-2" target="_blank">Free Evaluation</a>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : 
                               
                            </div>

                        </>
                    ) 
                })
                }
                </div>
            </div>
         </>

    )
}

// export default Tabs
export default Tabs
