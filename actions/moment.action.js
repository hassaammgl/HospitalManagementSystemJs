

// Format Dates

// moment().format("MMMM Do YYYY, h:mm:ss a"); // July 17th 2024, 9:20:26 pm
// moment().format("dddd"); // Wednesday
// moment().format("MMM Do YY"); // Jul 17th 24
// moment().format("YYYY [escaped] YYYY"); // 2024 escaped 2024
// moment().format();

// Relative Time

// moment("20111031", "YYYYMMDD").fromNow(); // 13 years ago
// moment("20120620", "YYYYMMDD").fromNow(); // 12 years ago
// moment().startOf('day').fromNow();        // 21 hours ago
// moment().endOf('day').fromNow();          // in 3 hours
// moment().startOf('hour').fromNow();

// Calendar Time

// moment().subtract(10, 'days').calendar(); // 07/07/2024
// moment().subtract(6, 'days').calendar();  // Last Thursday at 9:22 PM
// moment().subtract(3, 'days').calendar();  // Last Sunday at 9:22 PM
// moment().subtract(1, 'days').calendar();  // Yesterday at 9:22 PM
// moment().calendar();                      // Today at 9:22 PM
// moment().add(1, 'days').calendar();       // Tomorrow at 9:22 PM
// moment().add(3, 'days').calendar();       // Saturday at 9:22 PM
// moment().add(10, 'days').calendar();      // 07/27/2024

// moment.locale(); // en


// moment().format("LT"); // 9:22 PM
// moment().format("LTS"); // 9:22:40 PM
// moment().format("L"); // 07/17/2024
// moment().format("l"); // 7/17/2024
// moment().format("LL"); // July 17, 2024
// moment().format("ll"); // Jul 17, 2024
// moment().format("LLL"); // July 17, 2024 9:22 PM
// moment().format("lll"); // Jul 17, 2024 9:22 PM
// moment().format("LLLL"); // Wednesday, July 17, 2024 9:23 PM
// moment().format('llll'); // Wed, Jul 17, 2024 9:23 PM
