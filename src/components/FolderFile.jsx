import React, { useState } from 'react';
import "../styles/FolderFile.css";
import { HiFolderAdd } from "react-icons/hi";
import { AiFillFileAdd } from "react-icons/ai";

function FolderFile({ data }) {
    const [dataFolder,setDataFolder]=useState(data);
    const [input,setInput]=useState("");
    const [show, setShow] = useState(false);
    const [showInput, setShowInput] = useState(null);
    const handleClick = () => {
        setShow(!show);
    }
    const handleNewClick = (type) => {
        setShow(true);
        setShowInput({isFolder: (type === "folder" ? true : false) });
    }
    const handleKeyDown = (e) => {
        if(e.key!=="Enter"){
            return ;
        }
       if(showInput.isFolder){
            setDataFolder(
                dataFolder,data.items.unshift({
                    name: input,
                    isFolder: true,
                    items:[]
                })
            )
        }
        else{
           setDataFolder(
               dataFolder,data.items.unshift({
                   name: input,
                   isFolder: false,
                   items:[]
               })
           )
       }
       setShowInput(null);
    }
    if (data.isFolder) {
        return (
            <div style={{ marginTop: "5px" }}>
                <div className='main'>
                    <div onClick={handleClick} >📁{data.name}</div>
                    <div className='adj'>
                        <span onClick={() => handleNewClick("folder")}><HiFolderAdd size={19} style={{color:"#ffb02e"}} />Folder</span>
                        <span onClick={() => handleNewClick("file")}><AiFillFileAdd size={19} style={{color:"#ffb02e"}} />File</span>
                    </div>
                </div>
                {
                    showInput &&
                    <div >
                        <span>{ showInput.isFolder?"📁":"📄" }</span>
                        <input type="text" onBlur={()=>{setShowInput(null);}} onKeyDown={handleKeyDown} onChange={(e)=>setInput(e.target.value)} autoFocus />
                    </div>
                }
                {show && data.items.length>0&&
                    (data.items.map((element) => {
                        return (
                            <div style={{ marginLeft: "10px" }}>
                                <FolderFile data={element} />
                            </div>
                        )
                    }))
                }
            </div>
        )
    }
    else {
        return (
            <div style={{cursor:"pointer"}}>
                <span>📄{data.name}</span>
            </div>
        )

    }
}

export default FolderFile