const Component = ({ clock = false }) => {

    if (!clock) {
        return false;
    }

    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <h2>
            {time.toLocaleTimeString('de-DE', { hour12: false })}
        </h2>
    );
};
