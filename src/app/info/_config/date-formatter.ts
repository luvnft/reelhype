export function formatDate(dateString: string) {
    // Create a new Date object from the input date string
    const date = new Date(dateString);

    // Define arrays for month names and days
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    // Extract day, month, and year from the date object
    const day = String(date.getDate()).padStart(2, '0');
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    // Return the formatted date string
    return `${day} ${month} ${year}`;
}
