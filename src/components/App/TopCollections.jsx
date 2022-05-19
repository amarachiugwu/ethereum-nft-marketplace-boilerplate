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

            <div className="col-lg-4 col-md-4 pt-3 pb-3" style={{ borderBottom: "1px solid #aaa" }} key={index}>
              
                <div class="creators creator-primary d-flex align-items-center">
                    <span class="fw-bold text-muted">{index + 1}.</span>

                    <div class="d-flex align-items-center ms-3">
                        <div class="position-relative d-inline-flex">
                            <img src="images/client/01.jpg" class="avatar avatar-md-sm shadow-md rounded-pill" alt="" />
                            <span class="verified text-primary">
                                <i class="mdi mdi-check-decagram"></i>
                            </span>
                            <span class="online text-success">
                                <i class="mdi mdi-circle"></i>
                            </span>
                        </div>

                        <div class="ms-3" style={{ width:"220px" }}>
                            <h6 class="mb-0">
                                <a href="creators.html" class="text-black name">StreetBoy</a> 
                                <small style={{ display:"inline-block", float : "right", color:"green" }}>+125%</small>
                            </h6>
                            <small class="text-muted" style={{ fontSize:"14px" }}>Floor price: 
                            <img style={{ display:"inline-block", width:"9px", height:"auto", margin:"0 3px" }} src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" size="14" class="Blockreact__Block-sc-1xf18x6-0 Avatarreact__ImgAvatar-sc-sbw25j-1 jGZCUu hzWBaN" alt="" />  
                            <a href="creators.html" class="text-dark name"  style={{ fontSize:"16px" }}>0.97</a>
                             
                            <small style={{ display:"inline-block", float : "right",  fontSize:"16px" }} className="text-dar"><img style={{ display:"inline-block", width:"9px", height:"auto", marginRignt:"3px" }} src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" size="14" class="Blockreact__Block-sc-1xf18x6-0 Avatarreact__ImgAvatar-sc-sbw25j-1 jGZCUu hzWBaN" alt="" /> 60</small></small>
                        </div>
                    </div>
                </div>
            </div>

            )) }

        </>
    );
}