export function formatDateTime(dateString, showTime = false, showDateTime = false) {
    try {
        // Parse the date string into a Date object
        const dateObject = new Date(dateString);

        // Check if the date is valid
        if (isNaN(dateObject)) {
            throw new Error("Invalid date format");
        }

        if (showTime) {
            // Format only the time (hours and minutes)
            const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
            return dateObject.toLocaleTimeString(undefined, timeOptions);
        } else if (showDateTime) {
            // Format date with time (hours and minutes)
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = dateObject.toLocaleDateString(undefined, dateOptions);

            const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
            const formattedTime = dateObject.toLocaleTimeString(undefined, timeOptions);

            return `${formattedDate} ${formattedTime}`;
        } else {
            // Format only the date
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            return dateObject.toLocaleDateString(undefined, dateOptions);
        }
    } catch (error) {
        return "Invalid date format";
    }
}
