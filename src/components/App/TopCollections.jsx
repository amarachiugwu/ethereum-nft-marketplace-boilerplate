import React from 'react';
import TopCollection from "./Data/topCollection.json";
import {Link} from "react-router-dom";

export const TopCollections = ({ inputValue, setInputValue }) => {

    const prevDefault = e => {
        e.preventDefault();
    }
    
    return (
        <>
        
            { TopCollection?.map((nft, index) => (

                <Link to={"/NFTMarketPlace"} onClick={() => setInputValue(nft.addrs)} className="col-lg-4 col-md-4 pt-3 pb-3" style={{  cursor:"pointer", backgroundColor:"#fff", borderRadius:"5px" }} key={index}>
                
                    <div class="creators creator-primary d-flex align-items-center">
                        <span class="fw-bold text-muted">{index + 1}.</span>
                        
                        <div class="d-flex align-items-center ms-3">
                            <div class="position-relative d-inline-flex">
                                <img src={nft.image} class="avatar avatar-md-sm shadow-md rounded-pill" alt="" />
                                {nft.verified ? 
                                <span class="verified text-primary">
                                    <i class="mdi mdi-check-decagram"></i>
                                </span> : ""}
                            </div>

                            <div class="ms-3" style={{ width:"220px" }}>
                                <h6 class="mb-0">
                                    <span class="text-black name">{nft.name.length > 15 ? nft.name.substr(0 , 15)+"..." : nft.name}</span> 
                                    <small style={{ display:"inline-block", float : "right", color:nft.color }} >{nft.percentage}%</small>
                                </h6>
                                <small class="text-muted" style={{ fontSize:"14px" }}>Floor price: 
                                <img style={{ display:"inline-block", width:"9px", height:"auto", margin:"0 3px" }} src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" size="14" class="Blockreact__Block-sc-1xf18x6-0 Avatarreact__ImgAvatar-sc-sbw25j-1 jGZCUu hzWBaN" alt="" />  
                                <span class="text-dark name"  style={{ fontSize:"16px" }}>{nft.price.floor}</span>
                                
                                <small style={{ display:"inline-block", float : "right",  fontSize:"16px" }} className="text-dar"><img style={{ display:"inline-block", width:"9px", height:"auto", marginRignt:"3px" }} src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" size="14" class="Blockreact__Block-sc-1xf18x6-0 Avatarreact__ImgAvatar-sc-sbw25j-1 jGZCUu hzWBaN" alt="" /> {nft.price.high}</small></small>
                            </div>
                        </div>

                    </div>
                </Link>
                    

            )) }

        </>
    );
}