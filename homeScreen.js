import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

function HomeScreen() {
  return (
      <div className="Home-Container">
          <div className="Left-Sidebar">
              <div className="Title-Container">
                  <p className="Title-Text">Bloom's Taxonomy</p>
              </div>
              <div className="Msg-Container">
                  <div className="Msg-Txt">
                      <span>To Click "Begin" Button Get Start</span>
                  </div>
              </div>
          </div>
          <div className="Right-Sidebar">
              <div className="Btn-Container">
                  <NavLink to="/screenone" className="link">
                    <div className="Begin-Btn">
                        Begin
                        <FontAwesomeIcon icon={faChevronRight} style={{paddingLeft:10}} />
                    </div>
                  </NavLink>
              </div>
          </div>

          <div className="Mobile-Container">
            <div className="Title-Container">
                <p className="Title-Text">Bloom's Taxonomy</p>
            </div>
            <div className="Begin-Btn">
                Begin
                <FontAwesomeIcon icon={faChevronRight} style={{paddingLeft:10}} />
            </div>
            <div className="Msg-Container">
                <div className="Msg-Txt">
                    <span>To Click "Begin" Button Get Start</span>
                </div>
            </div>
        </div>
      </div>
  );
}

export default HomeScreen;
