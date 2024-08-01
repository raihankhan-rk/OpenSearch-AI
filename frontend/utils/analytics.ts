import ReactGA from "react-ga4";

export const TrackGoogleAnalyticsEvent = (
    event_name:string,
    label:string,
    data?:object
) => {

    let event_params = {
        label,
        ...data
    };

    ReactGA.event(event_name, event_params);
};