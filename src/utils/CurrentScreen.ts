import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

const CurrentScreen = () => {
    const [currScreen, setCurrScreen] = React.useState("Orders");
        const {pathname} = useLocation();
    useEffect(() => {
        const spilitedPathName = pathname.split("/")[2];
        setCurrScreen(spilitedPathName);
    }, [pathname]);
    return currScreen;
}

export default  CurrentScreen;