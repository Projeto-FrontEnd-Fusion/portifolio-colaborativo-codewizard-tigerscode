import axios from "axios";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
    const [teamData, setTeamData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchTeamData = async () => {
        try {
            setIsLoading(true);
            const response = await axios(
                "https://sistema-cadastro-dados-portifolio-front-end-fusion.vercel.app/api/TigerCoders"
            );

            const data = response.data;
    
            // const data = response.data;
            setTeamData(data);
        } catch (error) {
            console.log("Error fetching data", error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchTeamData();
    }, []);

    if (isLoading) return <p>Loading...</p>

    return (
        <TeamContext.Provider value={{teamData, isLoading}}>
            {children}
        </TeamContext.Provider>
    )
}

TeamProvider.propTypes = {
    children: PropTypes.node
}