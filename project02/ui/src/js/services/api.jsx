const rootURL = "http://localhost:8000";

// React Task 1:
export async function fetchUser(username) {
    // replace this code with functionality that actually
    // queries that correct endpoint:
    const response = await fetch(`${rootURL}/api/users/${username}`);
    const data = await response.json();
    // console.log(data[0]);
    return data[0];
}

// React Task 3:
export async function fetchCourses(options = {}) {
    let baseURL = `${rootURL}/api/courses?`;
    if (options.department) {
        baseURL += `department=${options.department}&`;
    }
    if (options.instructor) {
        baseURL += `instructor=${options.instructor}&`;
    }
    if (options.hours) {
        baseURL += `hours=${options.hours}&`;
    }
    if (options.title) {
        baseURL += `title=${options.title}&`;
    }
    if (options.days) {
        const daysParsed = options.days.join("");
        baseURL += `days=${daysParsed}&`;
    }
    if (options.classifications) {
        if (options.classifications.includes("di")) {
            baseURL += `di=true&`;
        }
        if (options.classifications.includes("dir")) {
            baseURL += `dir=true&`;
        }
        if (options.classifications.includes("fys")) {
            baseURL += `fys=true&`;
        }
        if (options.classifications.includes("honors")) {
            baseURL += `honors=true&`;
        }
        if (options.classifications.includes("arts")) {
            baseURL += `arts=true&`;
        }
        if (options.classifications.includes("service")) {
            baseURL += `service=true&`;
        }
    }
    if (options.open) {
        baseURL += `open=true&`;
    }
    console.log(baseURL);
    const response = await fetch(baseURL);
    console.log("fetchCourses response: " + response);
    const courses = await response.json();
    console.log(courses);
    return courses;
}

export async function fetchSchedule(username) {
    const response = await fetch(`${rootURL}/api/schedules/${username}`);
    return await response.json();
}

export async function deleteCourseFromSchedule(schedule, crn) {
    const url = `${rootURL}/api/schedules/${schedule.id}/courses/${crn}`;
    const response = await fetch(url, {
        method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export async function addCourseToSchedule(schedule, crn) {
    console.log(crn);
    const url = `${rootURL}/api/schedules/${schedule.id}/courses`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            crn: crn,
        }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}
