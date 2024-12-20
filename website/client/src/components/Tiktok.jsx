import {useEffect} from 'react'

const SocialMediaSection = () => {
    useEffect(() => {
        // Dynamically load the TikTok embed script
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);}

export default SocialMediaSection
