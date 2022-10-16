import React, { useState } from "react";
import {FaSearch, FaRegHeart, FaShoppingCart, FaUserAlt} from "react-icons/fa";


const TopMenu=()=>{
    return(

            <>
                <div className="main_div"> 
                    <div className="logo">
                      Logo
                    </div>
                      <div className="menu_link">
                          <ul>
                            <li>
                              Home
                            </li>
                            <li>
                              School Uniform
                            </li>
                            <li>
                              Corporate
                            </li>
                            <li>
                              Sports
                            </li>
                            <li>
                              Blogs
                            </li>
                          </ul>
                        
                      </div> 

                <div className="cart_div">
                  <div className="item_div">
                    <ul>
                      <li><FaSearch /> </li>
                      <li><FaRegHeart /> </li>
                      <li><FaShoppingCart /> </li>
                      <li><FaUserAlt /> </li>
                    </ul>
                  </div>

                </div>

              </div>
                
            
            </>

          )
}

export default TopMenu;