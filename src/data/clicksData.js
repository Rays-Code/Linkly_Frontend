import axios from "axios";

// data format
// const clicksData = [
//   { label: "Jan", clicks: null },
//   { label: "Feb", clicks: null },
//   { label: "Mar", clicks: null },
//   { label: "Apr", clicks: null },
//   { label: "May", clicks: null },
//   { label: "Jun", clicks: null },
//   { label: "Jul", clicks: null },
//   { label: "Aug", clicks: null },
//   { label: "Sep", clicks: null },
//   { label: "Oct", clicks: null },
//   { label: "Nov", clicks: null },
//   { label: "Dec", clicks: null },
// ];

const getAnalytics = async (shortURL) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/analytics`, {
        shortURL: shortURL
    })

    return res.data.clicksHistory;
}


export default getAnalytics;
