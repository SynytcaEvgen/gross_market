import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../app-header/app-header";
import Footer from "../app-footer/app-footer";
import MainSlider from "../app-main-slider/app-main-slider";
import SecondSlider from "../app-second-slider/app-second-slider";
import InstaBlock from "../app-block-insta/app-block-insta";
import SimpleMap from "../app-block-map/app-block-map";
import Popup from "../app-popup/app-popup";
import FormCv from "../app-form-cv/app-form-cv";
import HeaderForm from "../app-form-header/app-form-header";
import ScrollToTop from "../app-scroll-to-top/app-scroll-to-top";

import "./app.scss";


const App = () => {

    const [scrollPos, setScrollPos] = useState(true);
    const [modalActive, setmodalActive] =  useState(false);
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 0 && window.screen.width <= 600) {
                setScrollPos(scrollPos => scrollPos = true)
            } else {
                setScrollPos(scrollPos => scrollPos = false)
            }
        }
    }, []);
    return (
        <Router>
            <ScrollToTop/>
            <div className="app__content">
                <Switch>
                    <Route exact path="/">
                        <Header scrollPos={scrollPos}/>
                        <main> 
                            <MainSlider/>
                            <SecondSlider/>
                            <InstaBlock/>
                            <SimpleMap/>
                        </main>
                    </Route>
                    <Route exact path="/form">
                        <HeaderForm/>
                        <main> 
                            <FormCv/> 
                        </main>
                    </Route>
                </Switch>
                <Footer setActive={setmodalActive}/> 
                <Popup active={modalActive} setActive={setmodalActive} />
            </div>
        </Router> 
    )
}
export default App;